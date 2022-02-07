<template>
  <v-card
      class="movieCards ma-5 mx-auto"
      max-width="430px"
      max-height="330px"
  >
    <v-card-text style="overflow-y: auto; height: 200px">
      <p class="text-h6 text--primary">
        {{ movie.title }}
      </p>
      <p>{{ movie.genre }}</p>

      <v-row align="center" class="mx-0">
        <v-rating
            :value="movie.rating"
            color="amber"
            background-color="warning lighten-1"
            dense
            half-increments
            readonly
            size="18"></v-rating>
        <div class="grey--text ms-4">{{ movie.rating }}</div>
      </v-row>
      <p>
      <div class="text--primary">
        {{ movie.summary }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-4" @click="edit = true">
        Edit
      </v-btn>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Rate
      </v-btn>


      <v-spacer/>

      <v-btn icon small color="#C0191F" @click="deleteWarning = true">
        <v-icon>mdi-delete</v-icon>
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
            @input="reveal = false; patchRating(movie, $event)"
        ></v-rating>

        <v-card-actions class="pt-0 justify-lg-space-between">
          <v-btn text color="teal accent-4" @click="reveal = false"
          >Return
          </v-btn>

          <!--          <v-btn text color="teal accent-4" @click="reveal = false">Rate</v-btn>-->

        </v-card-actions>
      </v-card>
    </v-expand-transition>

    <v-dialog v-model="edit"
              max-width="400"

    >
      <v-card>
        <v-card-title class="text-h6">
          Edit
        </v-card-title>

        <v-form ref="form" class="ma-3">
          <v-text-field v-model="title"
                        label="Title"
                        :rules="inputRules"
                        class="shrink"
                        clearable
                        outlined
                        required>
          </v-text-field>


          <v-textarea v-model="summary"
                      :rules="inputRules"
                      class="shrink"
                      label="Summary"
                      outlined
                      clearable
                      required>
          </v-textarea>

          <v-select v-model="select"
                    :items="genre"
                    :rules="inputRules"
                    label="Genre"
                    required>
          </v-select>

          <p>Rating
            <v-rating color="yellow darken-3"
                      background-color="warning lighten-1"
                      half-increments
                      hover
                      @input="updateRating($event)"
                      size="20">
            </v-rating>
          </p>


        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="teal accent-4"
              text
              @click="submitForm"
          >
            Save
          </v-btn>
          <v-btn
              color="teal accent-4"
              text
              @click="edit = false"
          >
            Return
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
        v-model="deleteWarning"
        persistent
        max-width="300"
    >
      <v-card>
        <v-card-title>Warning</v-card-title>
        <v-card-text>You are about to delete {{movie.title}}. Are you sure?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="teal accent-4"
              text
              @click="deleteMovie(movie)"
          >
            Yes, delete
          </v-btn>
          <v-spacer />
          <v-btn
              color="teal accent-4"
              text
              @click="deleteWarning = false"
          >
            Return
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>

import MovieService from "@/services/MovieService";

export default {
  name: "MovieCard",
  props: ['movie'],

  data: () => ({
    reveal: false,
    edit: false,
    deleteWarning: false,

    title: '',
    summary: '',
    genre: [],
    ratingValue: 0,

    select: null,

    inputRules: [
      v => !!v && v.trim() !== "" || "This is required",
    ]
  }),

  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        await this.putMovie(this.movie.id, this.title, this.summary, this.select, this.ratingValue)

        window.location.reload()
      }
    },
    putMovie(id, title, summary, genre, rating) {
      let movie = {
        'title': title,
        "summary": summary,
        "genre": genre,
        "rating": rating
      }
      MovieService.putMovie(id, movie)
    },
    patchRating(movie, value) {
      MovieService.patchRating(movie, value)
    },
    deleteMovie(movie) {
      MovieService.deleteMovie(movie)
      this.refreshPage()

    },
    refreshPage() {
      window.location.reload()
    },
    getGenres() {
      MovieService.getGenres().then((response) => {
        this.genre = response.data
      })
    },
    updateRating(value) {
      this.ratingValue = value
    }
  },

  created() {
    this.getGenres()
    this.title = this.movie.title
    this.summary = this.movie.summary
    this.select = this.movie.genre
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