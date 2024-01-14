// Vuex
export interface RootState {
  counter: number;
}

export const state = (): RootState => ({
  counter: 0,
});

export const getters = {
  getCounter(state: RootState): number {
    return state.counter;
  },
};

export const mutations = {
  increment(state: RootState) {
    state.counter++;
  },
};

export const actions = {
  async fetchCounter(state: RootState) {
    // Make API call here
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};
