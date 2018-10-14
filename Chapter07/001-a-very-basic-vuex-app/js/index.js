const store = new Vuex.Store({
  state: {
    count: 5
  },
  getters: {
    counter(state) {
      return state.count;
    }
  },
  mutations: {
    decrementCounter(state, payload) {
      state.count = state.count - payload;
      state.count < 0 ? (state.count = 0) : state.count;
    },
    resetCounter(state) {
      state.count = 5;
    }
  },
  actions: {
    decrement(state, payload) {
      state.commit("decrementCounter", payload);
    },
    reset(state) {
      state.commit("resetCounter");
    }
  }
});

const app = new Vue({
  el: "#app",
  store: store,
  computed: {
    count() {
      return store.getters.counter;
    }
  },
  methods: {
    eatFruit(amount) {
      store.dispatch("decrement", amount);
    },
    counterReset() {
      store.dispatch("reset");
    }
  }
});