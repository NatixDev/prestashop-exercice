import Vue from "vue";
import Vuex from "vuex";

// Importer votre module ici et l'ajouter au Store (ligne 19)
import tasks from "./tasks";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // Votre module ici (mettre une virgule à la fin de la ligne 18)
      tasks
    },
    // watch: {
    //   dishes: {
    //     handler() {
    //       console.log('Dishes changed!');
    //       this.$q.localStorage.set('dishes', this.dishes);
    //     }
    //   }
    // },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  // console.log("Store", Store.tasks, this.state);

  return Store;
}
