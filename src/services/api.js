import axios from 'axios';



// Base da Url: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=183806a6e6ec0ea2a0e5b4873b10819f


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

