import axios from "axios";

const movie_api_base_url = 'http://192.168.2.106:8090/api/movies'
const genre_api_url = 'http://192.168.2.106:8090/api/genres'

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

    getGenres() {
        return axios.get(genre_api_url)
    }

    addMovie(movie) {
        return axios.post(movie_api_base_url, movie)
    }

    deleteMovie(movie) {
        return axios.delete(movie_api_base_url + "/" + movie.id)
    }


}

export default new MovieService()