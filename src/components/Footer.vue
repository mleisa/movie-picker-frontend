<template>
  <v-footer
      dark
      padless
      fixed
      absolute
  >
    <v-row justify="center" no-gutters>
      <router-link
          v-for="item in items" :key="item.name"
          style="text-decoration: none"
          :to="{path:item.path}">
        <v-btn color="white" text rounded class="my-2">
          {{ item.name }}
        </v-btn>
      </router-link>

      <v-col
          class=" py-1 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Movie Picker</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    items: [
      {name: "Home", path: "/"},
      {name: "Browse", path: "/movies"},
      {name: "Add", path: "/addMovie"},
      {name: "About Us", path: "/aboutUs"},
    ]
  })
}
</script>

<style scoped>

</style>