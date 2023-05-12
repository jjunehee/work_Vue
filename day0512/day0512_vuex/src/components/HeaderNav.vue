<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/book">도서관리</router-link> |
    <router-link to="/naver">Naver</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
