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

        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddMovie"
}
</script>

<style scoped>
.picture {
  background: url("../../pics/Living Room Free Stock Video.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>