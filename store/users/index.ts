// Vuex
export interface RootState {
  [key: string]: {
    id: number;
    name: string;
  };
}

export const state = (): RootState => ({
  "1": {
    id: 1,
    name: "Shaheem",
  },
});
