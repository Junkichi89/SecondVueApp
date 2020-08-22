import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {},
    usersinfo: {},
    usersconcern: ""
  },
  mutations: {
    setUser(state, setUser) {
      state.users = setUser;
    },
    setInfo(state, setInfo) {
      state.usersinfo = setInfo;
    },
    setConcern(state, setConcern) {
      state.usersconcern = setConcern
    }
  }
});
