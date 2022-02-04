import axios from "axios";

const movie_api_base_url = 'http://localhost:8090/api/movies'

class MovieService {
    getMovies() {
        let value = axios.get(movie_api_base_url)
        console.log(value)
        return value
    }

    updateRating(movie, value) {
        movie.rating = value
        return axios.post(movie_api_base_url, movie)
    }
}

export default new MovieService()