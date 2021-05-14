import { createStore } from 'vuex';

export const stateMap = {
  counter: 'counter',
};

export const gettersMap = {};

export const mutationsMap = {
  setCounter: 'setCounter',
};

export const actionsMap = {
  increment: 'increment',
  decrement: 'decrement',
};

const store = createStore({
  state: () => ({
    [stateMap.counter]: 0,
  }),
  mutations: {
    [mutationsMap.setCounter]: (state, payload) => { state.counter = payload; },
  },
  actions: {
    [actionsMap.increment]:
      ({ commit, state }) => commit(mutationsMap.setCounter, state.counter + 1),
    [actionsMap.decrement]:
      ({ commit, state }) => commit(mutationsMap.setCounter, state.counter - 1),
  },
});

export default store;
