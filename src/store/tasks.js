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

const mutations = {
  deleteDish(state, id) {
    state.dishes = state.dishes.filter(el => el.id !== id);
  },

  addDish(state, dish) {
    state.dishes.push(dish);
  },

  editDish(state, dish) {
    const index = state.dishes.findIndex(el => el.id === dish.id);

    if (index !== -1) {
      Object.assign(state.dishes[index], dish);
    }
  },

  setDishes(state, dishes) {
    state.dishes = dishes;
  }
};

const actions = {
  deleteDish({ commit }, id) {
    commit("deleteDish", id);
  },

  addDish({ commit }, dish) {
    let uId = 1;

    if (state.dishes.length) {
      uId = Math.max(...state.dishes.map(el => el.id)) + 1;
    }

    dish.id = uId;

    commit("addDish", dish);
  },

  editDish({ commit }, dish) {
    commit("editDish", dish);
  },

  getDishes({ commit }, dishes) {
    commit("setDishes", dishes);
  }
};

const getters = {
  dishes: state => {
    return state.dishes;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
