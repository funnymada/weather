import { createPinia, defineStore } from 'pinia';
import {useQuasar} from "quasar";

const pinia = createPinia();
const localStorageKey = 'cityStore';
export const cityStore = defineStore('weather', {
  state: () => ({
    name: '',
    degrees: null,
    precipitation: null,
    data: [{
      name: 'Bergamo',
      degrees: 19,
      precipitation: 2,
    },
      {
        name: 'Brescia',
        degrees: 5,
        precipitation: 0,
      },
      {
        name: 'Cene',
        degrees: 1.4,
        precipitation: 3,
      },
      {
        name: 'Alzano',
        degrees: 14,
        precipitation: 1,
      },
      {
        name: 'Nembro',
        degrees: 19,
        precipitation: 2,
      },
      {
        name: 'arcobaleno',
        degrees: 5,
        precipitation: 0,
      },
      {
        name: 'gffgfg',
        degrees: 1.4,
        precipitation: 3,
      },
      {
        name: 'Montichiari',
        degrees: 14,
        precipitation: 1,
      }

      ]
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
