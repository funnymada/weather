import { defineStore } from 'pinia';
//import createPersist from 'pinia-persist';

export const loginStore = defineStore('isLogged', {
  state: () => ({
    isLogged: false,
  }),
  getters: {

  },
  actions: {
    login() {
      this.isLogged = true;
    },
  },
});
/*
const persist = createPersist('isLogged', {
  filter: ['isLogged'],
});

persist(loginStore);*/
