import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function importAll(r) {
  return r.keys().reduce((store, value) => {
    const key = value.match(/\.\/(\w+)\.js$/)[1];
    return Object.assign(store, { [key]: r(value).default });
  }, {});
}

const modules = importAll(require.context('./modules', false, /\.js$/));

console.log(modules);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
});
