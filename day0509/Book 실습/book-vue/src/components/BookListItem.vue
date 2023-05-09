<template>
  <tr>
    <td>{{ bb.isbn }}</td>
    <td>
      <a @click="transferBook">{{ bb.title }}</a>
    </td>
    <td>{{ bb.author }}</td>
    <td>{{ bb.price }}</td>
    <td>{{ bb.content }}</td>
  </tr>
</template>

<script>
export default {
  name: "BookListItem",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  props: {
    bb: Object,
  },
  created() {},
  methods: {
    transferBook() {
      console.log("ttt");
      this.$emit("Book", this.bb.isbn);
    },
  },
};
</script>

<style scoped></style>
