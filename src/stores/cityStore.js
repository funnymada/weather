import { useQuasar } from 'quasar/vue';
import { createPinia, defineStore } from 'pinia';

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
    // Metodo per caricare lo stato dal Local Storage
    loadFromLocalStorage() {
      const { $q } = useQuasar();
      const data = $q.localStorage.getItem(localStorageKey);
      if (data) {
        const parsedData = JSON.parse(data);
        this.name = parsedData.name;
        this.degrees = parsedData.degrees;
        this.precipitation = parsedData.precipitation;
      }
    },
    // Metodo per salvare lo stato nel Local Storage
    saveToLocalStorage() {
      const { $q } = useQuasar();
      const data = JSON.stringify({
        name: this.name,
        degrees: this.degrees,
        precipitation: this.precipitation,
      });
      $q.localStorage.set(localStorageKey, data);
    },
    // Metodo per aggiornare lo stato e salvarlo nel Local Storage
    refresh(newCity) {
      this.name = newCity.name;
      this.degrees = newCity.degrees;
      this.precipitation = newCity.precipitation;
      this.saveToLocalStorage();
    },
  },
  // Carica lo stato dal Local Storage quando il componente viene montato
  mounted() {
    this.loadFromLocalStorage();
  },
});
