<template>
  <v-container fill-height class="picture" fluid>
    <v-container>
    <v-container grid-list fill-height class="area justify-start" :max-height="$vuetify.breakpoint.xs ? 300 : '20vh'">

        <div v-for="movie in movies" :key="movie.id" class="flexClass ma-5" >
          <MovieCard :movie="movie"/>
        </div>

    </v-container>
    </v-container>
  </v-container>
</template>

<script>
import MovieService from "@/services/MovieService";
import MovieCard from "@/components/MovieCard";

export default {
  name: "AddMovie",
  components: {MovieCard},
  data: () => ({
    movies: []
  }),
  methods: {
    getMovies() {
      MovieService.getMovies().then((response) => {
        this.movies = response.data
      })
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style scoped>
.picture {
  background: url("../../pics/Living Room Free Stock Video.png") no-repeat center center fixed;
  background-size: cover;

  position: static;
}
.area {
  max-width: 80%;
  max-height: 90%;
  margin-bottom: 300px;
}
.flexClass {
  width: 300px;
}

</style>