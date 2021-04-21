<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">{{ action }} Plat</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          :rules="[
            val => !!val || 'Le nom est obligatoire',
            val => val.length < 21 || '20 caractères max.'
          ]"
          ref="name"
          filled
          v-model="dishe.nom"
          label="Nom (Burger)"
          class="col"
          autofocus
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          :rules="[val => val.length < 136 || '135 caractères max.']"
          ref="description"
          filled
          v-model="dishe.description"
          label="Description"
          type="textarea"
          class="col"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.image"
          label="URL de l'image"
          class="col"
        />
        <q-img
          :src="dishe.image ? dishe.image : 'statics/image-placeholder.png'"
          class="q-ml-sm"
          contain
        />
      </div>

      <div class="q-mb-md">
        <div class="row">
          <p class="q-mb-none">Note:</p>
        </div>
        <div class="row">
          <q-rating v-model="dishe.note" size="2em" color="orange" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Annuler" color="grey" v-close-popup />
      <q-btn label="Sauver" color="primary" @click="dishFormSubmit" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["action", "currentDish"],
  data() {
    return {
      dishe: {
        nom: "",
        description: "",
        note: 1,
        image: ""
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addDish", "editDish"]),

    dishFormSubmit() {
      this.$refs.name.validate();
      this.$refs.description.validate();

      if (!this.$refs.name.hasError && !this.$refs.description.hasError) {
        this.$emit("close");
        this.action == "ajouter"
          ? this.addDish(this.dishe)
          : this.editDish(this.dishe);
      }
    }
  },
  mounted() {
    if (this.currentDish) {
      this.dishe = Object.assign({}, this.currentDish);
    }
  }
};
</script>

<style>
.form-card {
  min-width: 400px;
}
.form-card .heading {
  text-transform: capitalize;
}
.form-card .q-card-section {
  width: 100%;
}
.thumbnail {
  max-width: 50px;
  max-height: 50px;
}
.form-card .q-img {
  height: 56px;
  width: 56px;
  border-radius: 10px;
}
.form-card .q-img__image {
  background-size: cover !important;
}
.form-card .q-rating__icon {
  opacity: 0.2;
}
.form-card .q-rating__icon--active {
  opacity: 1;
}
</style>
