import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Contacts: [],
    Search:""
  },
  mutations: {
    SET_DATA(state,payload){
      state.Contacts = [...payload];
    },
    SEARCH(state,payload){
      state.Search = payload
    }

  },
  actions: {
      fecthData({ commit }){
        axios.get("http://localhost:3000/contact")
        .then(({data})=>{
          commit('SET_DATA',data)
        })}
    
        
  },
  modules: {}
});
