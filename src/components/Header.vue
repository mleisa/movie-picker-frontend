<template>
  <v-card
      color="grey lighten-4">
    <v-app-bar dark app fixed>
      <router-link to="/" style="text-decoration: none">
        <v-toolbar-title class="white--text">
          Movie Picker
        </v-toolbar-title>
      </router-link>

      <v-menu bottom
              origin="center center"
              transition="scale-transition"
              open-on-hover
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn icon dark v-bind="attrs" v-on="on" elevation="0">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list dark elevation="0">
          <v-list-item v-for="link in links" :key="link.name" :to="{path: link.path}" replace link>
            <v-list-item-title v-text="link.name" class="white--text"></v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-spacer></v-spacer>


      <!--      <v-text-field clearable class="flex-sm-shrink-0" label="Search"></v-text-field>-->
      <!--      <v-autocomplete-->

      <!--          v-on:keyup.enter="changeWindow"-->
      <!--          cache-items-->
      <!--          class="mx-4"-->
      <!--          flat-->
      <!--          hide-no-data-->
      <!--          hide-details-->
      <!--          label="Search"-->
      <!--          clearable-->
      <!--      ></v-autocomplete>-->
      <!--      <v-btn icon>-->
      <!--        <v-icon>mdi-magnify</v-icon>-->
      <!--      </v-btn>-->

    </v-app-bar>
  </v-card>
</template>

<script>

export default {
  name: "Header",
  components: {},
  data() {
    return {
      links: [
        {name: 'Browse Movies', path: '/movies'},
        {name: 'Add Movies', path: '/addMovie'},
        {name: 'About Us', path: '/aboutUs'},
        {name: 'Contact Us', path: '/contactUs'},
      ]
    }
  },
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