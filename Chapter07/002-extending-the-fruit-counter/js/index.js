const store = new Vuex.Store({
  state: {
    count: 5,
    apples: 0,
    pears: 0
  },
  getters: {
    counter(state) {
      return state.count;
    },
    appleCount(state) {
      return state.apples;
    },
    pearCount(state) {
      return state.pears;
    }
  },
  mutations: {
    decrementWithApplesCounter(state, payload) {
      state.count = state.count - 1;
      state.count < 0 ? (state.count = 0) : (state.count, state.apples += 1);
    },
    decrementWithPearsCounter(state, payload) {
      state.count = state.count - 1;
      state.count < 0 ? (state.count = 0) : (state.count, state.pears += 1);
    },
    resetCounter(state) {
      state.count = 5;
      state.apples = 0;
      state.pears = 0;
    }
  },
  actions: {
    decrementWithApples(state, payload) {
      setTimeout(() => {
        state.commit("decrementWithApplesCounter", payload);
      }, 1000)
    },    
    decrementWithPears(state, payload) {
      state.commit("decrementWithPearsCounter", payload);
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
    },
    apples() {
      return store.getters.appleCount;
    },
    pears() {
      return store.getters.pearCount;
    }
  },
  methods: {
    eatApples(payload) {
      store.dispatch("decrementWithApples", payload);
    },
    eatPears(payload) {
      store.dispatch("decrementWithPears", payload);
    },
    counterReset() {
      store.dispatch("reset");
    }
  }
});