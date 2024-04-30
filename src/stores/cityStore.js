import {createPinia, defineStore} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
export const cityStore = defineStore('weather', {
  state: () => ({
    name: '',
    degrees: null,
    precipitation: null,
  }),
  actions: {
    changeName (name) {
      cityStore.name=name
    },
    refresh(newCity) {
      this.name = newCity.name;
      this.degrees = newCity.degrees;
      this.precipitation = newCity.precipitation;
    },
  },
  plugins: pinia.use(piniaPluginPersistedstate),
});
