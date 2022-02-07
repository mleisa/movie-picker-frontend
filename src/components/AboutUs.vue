<template>
  <v-container fill-height class="picture justify-center" fluid>
    <v-card dark color="#272727" class="align-self-center">
      <v-card-title>Who are we?</v-card-title>
      <v-card-text>
        <strike>Who are you?</strike><br>
        Actually, we are just one person: Melisa Fidan, with the student number 576604.
      </v-card-text>
      <v-card-title>What is this website?</v-card-title>
      <v-card-text>
        This is a little website with the creative name 'Movie Picker'. Not sure what to watch tonight and Netlix went
        entirely bankrupt? We are prepared.<br>

        Here you may browse through movies and see our ratings, as well as a small personal summary.
        <br>If you have access to our admin features, you can even change our data! Exciting.
      </v-card-text>

      <v-card-title>What Can You Do?</v-card-title>
      <v-card-text>
        Granted you have the rights to do so, you may add movies to our precious database. There are never enough!
        <br>It could also happen that you see a rating of mine and wildly disagree. Or maybe you misclicked! No problem, you can always change your opinion (or mine).
        <br>Maybe the entire entry seems a little wrong in your eyes? No problem, get right to editing.
        <br>Sometimes you may not want to see a movie title any longer and so you click on the bin-icon and simply delete the entry from our database!
        <br>Be careful with that as it is irreversible. <strike>Unless you restart the data bank.</strike>
      </v-card-text>

    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.picture {
  background: url("../../pics/Living Room Free Stock Video.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
}

.v-card {
  margin-top: 50px;
  margin-bottom: 200px;
}
</style>