import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      gender: "",
      year: "",
      month: "",
      day: "",
      answer1: "",
      answer2: "",
      answer3: "",
      userconcern: ""
    }
  },
  mutations: {
    setUser(state, setUser) {
      state.user.gender = setUser.gender;
      state.user.year = setUser.year;
      state.user.month = setUser.month;
      state.user.day = setUser.day;
    },
    setInfo(state, setInfo) {
      state.user.answer1 = setInfo.answer1;
      state.user.answer2 = setInfo.answer2;
      state.user.answer3 = setInfo.answer3;
    },
    setConcern(state, setConcern) {
      state.user.userconcern = setConcern.userconcern;
    }
  }
});
