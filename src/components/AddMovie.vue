<template>
  <v-container fill-height class="picture" fluid>
    <v-row justify="space-around">
      <v-card dark width="400">
        <v-app-bar flat dark>

          <v-toolbar-title class="text-h6 white--text pl-0">
            Make an Addition!
          </v-toolbar-title>

          <v-spacer></v-spacer>

        </v-app-bar>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
                v-model="name"
                :rules="inputRules"
                label="Movie Name"
                required
                clearable
            ></v-text-field>

            <v-textarea
                v-model="summary"
                :rules="inputRules"
                label="Summary"
                required
            ></v-textarea>

            <v-select
                v-model="select"
                :items="items"
                :rules="inputRules"
                label="Genre"
                required
                dark
            ></v-select>

            <p class="text-md-h7 text-xl-h6 text-sm-h8 font-weight-regular">Rating
              <v-rating
                  class="rating"
                  color="yellow darken-3"
                  background-color="warning lighten-1"
                  half-increments
                  hover
                  size="20"
                  @input="saveRating($event)"
              ></v-rating>
            </p>

            <v-btn class="mr-4" @click="submit">Submit</v-btn>

            <v-btn @click="clear">Clear</v-btn>

          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'
import MovieService from "@/services/MovieService";

export default {
  name: "AddMovie",
  mixins: [validationMixin],

  validations: {
    name: {required},
    summary: {required},
    select: {required},
  },

  data: () => ({
    name: '',
    summary: '',
    select: null,
    items: [],
    ratingValue: 0,

    inputRules: [
      v => !!v && v.trim() !== "" || "This is required"
    ]

  }),

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {

        await this.addMovie(this.name, this.summary, this.select, this.ratingValue)

        window.location.href = '#/movies'
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.summary = ''
      this.select = null
    },
    getGenres() {
      MovieService.getGenres().then((response) => {
        this.items = response.data
      })
    },
    saveRating(value) {
      this.ratingValue = value
    },
    addMovie(name, summary, genre, rating) {
      let movie = {
        title: name,
        summary: summary,
        genre: genre,
        rating: rating
      }

      MovieService.addMovie(movie).then(response => movie.id = response.id)
    },
    changeWindow() {
      window.location.href = '#/movies'
    }
  },

  created() {
    this.getGenres()
  }
}
</script>

<style scoped>
.picture {
  background: url("../../pics/Living Room Free Stock Video.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>
