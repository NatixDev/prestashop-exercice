const state = {
  dishes: [
    {
      id: 1,
      image: "https://i.imgur.com/0umadnY.jpg",
      nom: "Burger",
      description:
        "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: "https://i.imgur.com/b9zDbyb.jpg",
      nom: "Pizza",
      description:
        "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: "https://i.imgur.com/RbKjUjB.jpg",
      nom: "Petits choux",
      description:
        "Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...",
      note: 1
    },
    {
      id: 4,
      image: "https://i.imgur.com/xAuhNVg.jpg",
      nom: "BBQ Ribs",
      description:
        "Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.",
      note: 5
    }
  ]
};

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  deleteDish(state, id) {
    state.dishes = state.dishes.filter(el => el.id !== id);
  },

  addDish(state, payload) {
    state.dishes.push(payload);
  },

  editDish(state, payload) {
    const index = state.dishes.findIndex(el => el.id === payload.id);

    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.dishes[index], payload);
    }
  }
};
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  deleteDish({ commit }, id) {
    commit("deleteDish", id);
  },

  addDish({ commit }, dish) {
    let uId = 1;
    // Si le tableau contient des éléments
    if (state.dishes.length) {
      // Récupère l'id MAX et lui ajoute 1
      uId = Math.max(...state.dishes.map(el => el.id)) + 1;
    }
    // Ajoute le nouvel id à la tache
    dish.id = uId;
    // Commite l'ajout
    commit("addDish", dish);
  },

  editDish({ commit }, dish) {
    commit("editDish", dish);
  }
};

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  dishes: state => {
    return state.dishes;
  }
};

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
