import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import '../Filme/filme.css';
import api from '../../services/api';
import {toast} from 'react-toastify';


function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "183806a6e6ec0ea2a0e5b4873b10819f",
                    language: "en",
                }
            })
                .then((response) => {
                   // console.log(response.data);
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Filme não encontrado");
                    navigate("/",{replace: true});
                    return;
                })
        }

        loadFilme();

        return () => {
           // console.log("COMPONENTE FOI DESMONTANDO")
        }
    }, [navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id);

        if(hasFilme){
            //alert("Esse filme já está na Lista");
            toast.warn("Esse filme já está cadastrado! ")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        //alert("Filme salvo com Sucesso!");
        toast.success("Filme salvo com sucesso!")
    }


    if (loading) {
        return (
            <div className='filme-info'>
                <h1> Carregando detalhes ...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="filme-info">
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

                <h3> Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} / 10</strong>

                <div className="area-buttons">
                    <button onClick={salvarFilme}> Salvar </button>

                    <button >
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trainer`}>
                            Trainer 
                        </a>

                    </button>

                </div>

            </div>
        </div>
    )
}



export default Filme;