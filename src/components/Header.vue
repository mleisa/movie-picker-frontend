<template>
  <v-card
      color="grey lighten-4">
    <v-app-bar dark app fixed>
      <router-link to="/" style="text-decoration: none">
        <v-toolbar-title class="white--text">
          Movie Picker
        </v-toolbar-title>
      </router-link>

      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Browse All</v-btn>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Pick A Movie</v-btn>-->
      <!--      <v-btn class="ma-2" color="#7d39a7">Add A Movie</v-btn>-->

      <v-menu bottom
              origin="center center"
              transition="scale-transition"
              open-on-hover
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn dark v-bind="attrs" v-on="on" elevation="0">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list dark elevation="0">
          <v-list-item v-for="item in items" :key="item.name" link>
            <router-link :to="{path:item.path}" style="text-decoration: none">
              <v-list-item-title v-text="item.name" class="white--text"></v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-spacer></v-spacer>



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
        {name: 'Browse Movies', path: '/movies'},
        {name: 'Add Movies', path: '/addMovie'},
        {name: 'Services', path: '/services'},
        {name: 'About us', path: '/aboutUs'},
        {name: 'Contact Us', path: '/contactUs'}
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