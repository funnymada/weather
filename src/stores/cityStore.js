import { defineStore } from 'pinia';
import { persist } from 'pinia-plugin-persist';

export const cityStore = defineStore('weather', {
  state: () => ({
    name: '',
    degrees: null,
    precipitation: null,
  }),
  actions: {
    refresh({newCity}) {
      this.name = newCity.newName;
      this.degrees = newCity.newDegrees;
      this.precipitation = newCity.newPrecipitation;
    },
  },
  plugins: [persist()],
});
