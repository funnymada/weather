import { createPinia, defineStore } from 'pinia';
import {useQuasar} from "quasar";

const pinia = createPinia();
const localStorageKey = 'cityStore';
export const cityStore = defineStore('weather', {
  state: () => ({
    name: '',
    degrees: null,
    precipitation: null,
    test: "example"
  }),
  actions: {

    loadFromLocalStorage() {
      const $q = useQuasar()
      const data =  $q.localStorage.getItem(localStorageKey);
      if (data) {
        const parsedData = JSON.parse(data);
        this.name = parsedData.name;
        this.degrees = parsedData.degrees;
        this.precipitation = parsedData.precipitation;
      }
    },
    // Metodo per salvare lo stato nel Local Storage
    saveToLocalStorage() {
      const $q = useQuasar()
      const data = JSON.stringify({
        name: this.name,
        degrees: this.degrees,
        precipitation: this.precipitation,
      });

      localStorage.setItem(localStorageKey, data);
    },

    refresh(newCity) {
      this.name = newCity.name;
      this.degrees = newCity.degrees;
      this.precipitation = newCity.precipitation;
      this.saveToLocalStorage();
    },
  },

  mounted() {
    this.loadFromLocalStorage();
  },
});
