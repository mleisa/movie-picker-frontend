<template>
  <div class="container">
    <Header />
    <h1 class="text-center">Movies</h1>
    <table class="table-striped">
      <thead>
      <th>Movie ID</th>
      <th>Movie Title</th>
      <th>Movie Idk</th>
      <th>Movie Rating</th>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key = "movie.id">
          <td>{{movie.id}}</td>
          <td>{{movie.title}}</td>
          <td>{{movie.genre}}</td>
          <td>{{movie.rating}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <br>
      <v-text-field
          v-model="message4"
          outlined
          clearable
      ></v-text-field>
      <v-btn>Delete</v-btn>
    </div>
  </div>



</template>

<script>
import MovieService from "@/services/MovieService";
import Header from "@/components/Header";

export default {
  name: "Movie",
  components: {Header},
  data() {
    return {
      movies: []
    }
  },
  methods: {
    getMovies() {
      MovieService.getMovies().then((response) => {
        this.movies = response.data
      });
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style scoped>

</style>