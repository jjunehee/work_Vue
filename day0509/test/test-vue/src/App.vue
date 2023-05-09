<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <naver-header-vue @mom="yes"></naver-header-vue>
    <naver-search-view-vue :naverKeyword="momkeyword"></naver-search-view-vue>
  </div>
</template>

<script>
import NaverHeaderVue from "./components/NaverHeader.vue";
import NaverSearchViewVue from "./components/NaverSearchView.vue";

export default {
  name: "App",
  components: { NaverHeaderVue, NaverSearchViewVue },

  data() {
    return {
      momkeyword: "",
    };
  },
  methods: {
    yes(keyword) {
      this.momkeyword = keyword;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  text-align: center;
}
</style>
