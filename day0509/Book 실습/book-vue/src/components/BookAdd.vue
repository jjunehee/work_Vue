<template>
  <div>
    <hr />
    <h2>책 추가</h2>
    <h3>책 번호</h3>
    <input type="text" v-model="book.isbn" /><br />
    <h3>제목</h3>
    <input type="text" v-model="book.title" /><br />
    <h3>작가</h3>
    <input type="text" v-model="book.author" /><br />
    <h3>가격</h3>
    <input type="text" v-model="book.price" /><br />
    <h3>내용</h3>
    <input type="text" v-model="book.content" /><br />

    <button @click="addBook">추가</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookAdd",
  components: {},
  data() {
    return {
      book: {
        isbn: "",
        title: "",
        author: "",
        price: 0,
        content: "",
      },
    };
  },
  created() {},
  methods: {
    addBook() {
      axios.post("http://192.168.214.40:9999/vuews/book", this.book).then((resp) => {
        console.log(resp);
        alert("추가 성공");
      });
    },
  },
};
</script>

<style scoped></style>
