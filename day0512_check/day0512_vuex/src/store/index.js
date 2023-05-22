import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopList: [],
    newsList: [],
    blogList: [],
  },
  getters: {
    top3Items(state) {
      return state.shopList
        .sort((a, b) => {
          return a.lprice - b.lprice;
        })
        .slice(0, 3);
    },
  },
  mutations: {
    // mutation은 state 전담 관리자라서 첫번째 인자로 state가 들어옴.
    SEARCH_NAVER_SHOP(state, payload) {
      state.shopList = payload; // action이 저장해달라고 보낸 데이터 저장해주기
    },
  },
  actions: {
    // vuex에 저장할 데이터를 백엔드에서 얻어온다??? 무조건 actions에!!!
    searchNaverShop({ commit }, payload) {
      // (vuex통째로, 컴포넌트에서 보낸 데이터)
      // 첫번째 인자는 vuex가 통으로
      http.get("/naver/shop/" + payload).then(({ data }) => {
        console.log(data);
        commit("SEARCH_NAVER_SHOP", data.items); // mutation에게 state에 데이터를 저장해달라고 요청함.
      });
    },
  },
  modules: {},
});
