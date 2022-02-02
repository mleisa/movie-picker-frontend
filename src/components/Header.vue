<template>
  <v-card
      color="grey lighten-4">
    <v-app-bar dark app fixed>
      <v-toolbar-title class="white--text">
        Movie Picker
      </v-toolbar-title>

      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Browse All</v-btn>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Pick A Movie</v-btn>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Add A Movie</v-btn>-->
      <v-spacer></v-spacer>
      <v-menu bottom
              origin="center center"
              transition="scale-transition"
              open-on-hover
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn dark v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list dark>
          <v-list-item v-for="item in items" :key="item" link>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>


      <v-text-field clearable class="flex-sm-shrink-0" label="Search"></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      items: [
        'Browse Movies',
        'Services',
        'About us',
        'Contact Us'
      ]
    }
  }
}
</script>

<style scoped>
.v-text-field {
  max-width: 250px;
}

.v-toolbar {
  padding: 5px;
}
</style>