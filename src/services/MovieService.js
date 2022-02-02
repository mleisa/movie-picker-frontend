import axios from "axios";

const movie_api_base_url = 'http://localhost:8090/api/movies'

class MovieService {
    getMovies() {
        return axios.get(movie_api_base_url);
    }

}

export default new MovieService()