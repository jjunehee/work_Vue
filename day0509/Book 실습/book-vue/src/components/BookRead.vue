<template>
  <div>
    <hr />
    <h2>책 상세보기</h2>

    <h3>책번호</h3>
    <input type="text" v-model="book.isbn" :disabled="disabled" /><br />
    <h3>제목</h3>
    <input type="text" v-model="book.title" :disabled="disabled" /><br />
    <h3>작가</h3>
    <input type="text" v-model="book.author" :disabled="disabled" /><br />
    <h3>가격</h3>
    <input type="text" v-model="book.price" :disabled="disabled" /><br />
    <h3>내용</h3>
    <input type="text" v-model="book.content" :disabled="disabled" /><br />

    <button @click="updateBook">수정</button>
    <button @click="deleteBook">삭제</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookRead",
  components: {},
  data() {
    return {
      book: [],
      disabled: true,
    };
  },
  props: {
    readKeyword: String,
  },
  watch: {
    readKeyword() {
      axios.get("http://192.168.214.40:9999/vuews/book/" + this.readKeyword).then((resp) => {
        this.book = resp.data;
      });
    },
  },
  created() {},
  methods: {
    updateBook() {
      if (this.disabled) {
        this.disabled = false;
      } else {
        axios
          .put("http://192.168.214.40:9999/vuews/book/" + this.book.isbn, this.book)
          .then((resp) => {
            if (resp.status == 200) {
              this.disabled = true;
            }
          });
      }
    },

    deleteBook() {
      axios.delete("http://192.168.214.40:9999/vuews/book/" + this.book.isbn).then((resp) => {
        console.log(resp);
        alert("삭제 성공");
      });
    },
  },
};
</script>

<style scoped></style>
