import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import {cityStore} from "stores/cityStore";
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  const mycityStore = cityStore()

  pinia.use(({ store }) => {
    store.$onAction((action) => {
      if (action.type === 'refresh') {
        store.mycityStore.saveToLocalStorage();
      }
    });
  });

  return pinia
})
