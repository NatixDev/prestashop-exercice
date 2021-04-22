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
    const dishes = this.$q.localStorage.getItem("dishes");

    console.log("Local data:", dishes);

    if (dishes) {
      this.getDishes(dishes);
    }
  }
};
</script>

<style></style>
