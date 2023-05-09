<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <book-list @Book="getBook"></book-list>
    <book-read :readKeyword="isbn"></book-read>
    <book-add></book-add>
  </div>
</template>

<script>
import BookAdd from "./components/BookAdd.vue";
import BookList from "./components/BookList.vue";
import BookRead from "./components/BookRead.vue";

export default {
  name: "App",
  components: {
    BookList,
    BookRead,
    BookAdd,
  },

  data() {
    return {
      books: [],
      isbn: 0,
    };
  },
  methods: {
    getBook(keyword) {
      this.isbn = keyword;
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
</style>
