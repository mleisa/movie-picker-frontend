<template>
  <v-container fill-height class="picture" fluid>
    <v-row align-content="center" align="center">
      <v-col align-self="center">
<!--        <v-card color="transparent" elevation="0" class="white&#45;&#45;text">-->
          <v-card-title class="justify-center white--text text-xl-h1 text-md-h3" cols="15" sm="4">Don't know what to watch?</v-card-title>
          <v-card-title class="justify-center white--text text-xl-h2 text-md-h4" cols="15" sm="4">Look no further!</v-card-title>
<!--        </v-card>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  name: "Test",
  components: {},
  data() {
    return {
      image: { backgroundImage: ''}
    }
  }
}
</script>

<style lang="scss" scoped>

.picture {
  background: url("../../pics/Living Room Free Stock Video.png") no-repeat center center fixed;
  background-size: cover;

  //filter: brightness(0.5);
  position: static;
}



</style>