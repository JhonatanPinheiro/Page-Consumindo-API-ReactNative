import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';


// URL Da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=183806a6e6ec0ea2a0e5b4873b10819f

function Home() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing?", {
                params: {
                    api_key: "183806a6e6ec0ea2a0e5b4873b10819f",
                    language: "en",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0,10));
            //console.log(response.data.results[1])
            setFilme(response.data.results.slice(0, 10))
            setLoading(false);
        }


        loadFilmes();

    }, [])


    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filme.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}> Acessar </Link>
                        </article>
                        
                    )
                })}
            </div>
        </div>
    )
}



export default Home;