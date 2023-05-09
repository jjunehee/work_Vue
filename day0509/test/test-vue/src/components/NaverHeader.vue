<template>
  <div id="comApp">
    <h1>네이버 검색화면</h1>
    <input type="text" v-model="keyword" @keydown.enter="search" />
  </div>
</template>

<script>
export default {
  name: "NaverHeader",
  components: {},
  // data : {}. // new Vue 하던 시절의 인스턴스는 이렇게 써도 됐었지만
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$emit("mom", this.keyword);
    },
  },
};
</script>

<style scoped></style>
