import { defineStore } from "pinia";

export const useCounterStore = defineStore("Counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    oddOrEven: (state) => {
      if (state.counter % 2 === 0) {
        return "Odd";
      }
      return "Even";
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
