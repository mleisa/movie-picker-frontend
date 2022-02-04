<template>
  <v-card
      class="movieCards ma-5 mx-auto"
      max-width="330px"
      max-height="330px"
  >
    <v-card-text style="overflow-y: auto; height: 200px" :max-height="$vuetify.breakpoint.xs ? 300 : '20vh'">
      <p class="text-h6 text--primary">
        {{ movie.title }}
      </p>
      <p>{{movie.genre}}</p>

      <v-row align="center" class="mx-0">
        <v-rating
            :value="movie.rating"
            color="amber"
            background-color="warning lighten-1"
            dense
            half-increments
            readonly
            size="18"></v-rating>
        <div class="grey--text ms-4">{{movie.rating}}</div>
      </v-row><p>
      <div class="text--primary">
        {{movie.summary}}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Rate
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Rating
          </p>
        </v-card-text>

        <v-rating
            class="rating"
            color="yellow darken-3"
            background-color="warning lighten-1"

            half-increments
            hover
            size="30"
            @input="reveal = false; addRating(movie, $event)"
        ></v-rating>

        <v-card-actions class="pt-0 justify-lg-space-between">
          <v-btn text color="teal accent-4" @click="reveal = false"
          >Return
          </v-btn>

<!--          <v-btn text color="teal accent-4" @click="reveal = false">Rate</v-btn>-->

        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>

import MovieService from "@/services/MovieService";

export default {
  name: "MovieCard",
  props: ['movie'],
  data: () => ({
    reveal: false,
  }),
  methods: {
    addRating(movie, value) {
      MovieService.updateRating(movie, value)
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

</style>