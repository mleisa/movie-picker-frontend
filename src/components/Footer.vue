<template>
  <v-footer
      dark
      padless
      fixed
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
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
    links: [
      'Home',
      'Services',
      'About us',
      'Contact Us'
    ]
  })
}
</script>

<style scoped>

</style>