<template>
  <q-card class="card">
    <q-img
      :src="dishe.image ? dishe.image : 'statics/image-placeholder.png'"
      basic
      contain
    >
      <div class="absolute-bottom text-h6">
        {{ dishe.nom }}
      </div>
    </q-img>

    <q-card-section>
      <q-rating
        :value="dishe.note"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-section>
      <span v-if="dishe.description">{{ dishe.description }}</span>
      <span v-else>Aucune description fournie.</span>
    </q-card-section>

    <q-card-actions class="absolute-bottom" align="right">
      <q-btn @click="showFormDishe = true" icon="edit" color="blue" flat
        >Modifier</q-btn
      >
      <q-btn @click="confirmDelete(dishe.id)" icon="delete" color="red" flat
        >Supprimer</q-btn
      >
    </q-card-actions>

    <q-dialog v-model="showFormDishe">
      <form-dishe
        @close="showFormDishe = false"
        :currentDish="dishe"
        action="modifier"
      />
    </q-dialog>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["dishe"],
  data() {
    return {
      showFormDishe: false
    };
  },
  methods: {
    ...mapActions("tasks", ["deleteDish"]),
    confirmDelete(id) {
      this.$q
        .dialog({
          title: "Supprimer plat",
          message: "Supprimer ce plat ?",
          cancel: "Annuler",
          ok: "Supprimer",
          persistent: true
        })
        .onOk(() => {
          this.deleteDish(id);
        });
    }
  },
  components: {
    "form-dishe": require("components/FormDishe.vue").default
  }
};
</script>

<style>
.card {
  min-height: 400px;
  max-width: 250px;
  width: 250px;
  transition: background 0.3s;
}
.card-clickable {
  cursor: pointer;
}
.card-clickable:hover {
  background: #bdbdbd !important;
}
.card .q-img {
  max-height: 180px;
}
.card .q-img__image {
  background-size: cover !important;
}
.card .q-rating__icon {
  opacity: 0.2;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
