<template>
  <div>
    <h2>책 목록</h2>

    <table border="1" style="margin: 0 auto" class="scrolltbody">
      <thead>
        <tr>
          <td>책 번호</td>
          <td>제목</td>
          <td>작가</td>
          <td>가격</td>
          <td>내용</td>
        </tr>
      </thead>
      <tbody>
        <book-list-item v-for="book in books" :bb="book" :key="book.isbn" @Book="transferBook">
        </book-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import BookListItem from "./BookListItem.vue";
export default {
  name: "BookList",
  components: { BookListItem },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios.get("http://192.168.214.40:9999/vuews/book").then((resp) => {
        this.books = resp.data;
        console.log(resp);
      });
    },
    transferBook(keyword) {
      this.$emit("Book", keyword);
    },
  },
};
</script>

<style scoped>
.scrolltbody {
  display: block;
  width: 600px;
  border-collapse: collapse;
  border: 2px solid #000;
}
.scrolltbody th {
  border: 1px solid #000;
  background: pink;
}
.scrolltbody td {
  border: 1px solid #000;
  border-top: 0;
}
.scrolltbody tbody {
  display: block;
  height: 200px;
  overflow: auto;
}
.scrolltbody th:nth-of-type(1),
.scrolltbody td:nth-of-type(1) {
  width: 40px;
}
.scrolltbody th:nth-of-type(2),
.scrolltbody td:nth-of-type(2) {
  width: 80px;
}
.scrolltbody th:nth-of-type(3),
.scrolltbody td:nth-of-type(3) {
  width: 100px;
}
.scrolltbody th:last-child {
  width: 100px;
}
.scrolltbody td:last-child {
  width: calc(100px - 19px);
}
</style>
