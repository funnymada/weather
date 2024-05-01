import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();
export const cityStore = defineStore('weather', {
  state: () => ({
    name: '',
    degrees: null,
    precipitation: null,
}),
  actions: {
    refresh(newCity) {
      this.name = newCity.name;
      this.degrees = newCity.degrees;
      this.precipitation = newCity.precipitation;
    },
  }
});
