<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("tasks", ["getDishes"])
  },
  mounted() {
    // Récupère les données du localStorage
    const dishes = this.$q.localStorage.getItem("dishes");

    console.log(dishes);
    // Si les plats existent
    if (dishes) {
      // Récupère les plats
      this.getDishes(dishes);
    }
  }
};
</script>

<style></style>
