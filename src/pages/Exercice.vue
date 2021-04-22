<template>
  <q-page class="q-pa-lg">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row q-gutter-lg">
        <dishe v-for="dishe in dishes" :key="dishe.id" :dishe="dishe" />

        <add-button @click="showFormDishe = true" />

        <q-dialog v-model="showFormDishe" persistent>
          <form-dishe @close="showFormDishe = false" action="ajouter" />
        </q-dialog>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      showFormDishe: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["dishes"])
  },
  watch: {
    dishes: {
      handler() {
        console.log("Dishes changed!", this.dishes);
        this.$q.localStorage.set("dishes", this.dishes);
        console.log("After:", this.$q.localStorage.getItem("dishes"));
      }
      // deep: true
    }
  },
  methods: {
    ...mapActions("tasks", ["getDishes"]),
    refresh(done) {
      this.getDishes(this.$q.localStorage.getItem("dishes"));
      done();
    }
  },
  components: {
    dishe: require("components/Dishe.vue").default,
    "add-button": require("components/AddButton.vue").default,
    "form-dishe": require("components/FormDishe.vue").default
  }
};
</script>
