<template>
  <div>
    <h2>네이버 검색화면 뷰</h2>

    <select v-model="category">
      <option value="blog">블로그 검색</option>
      <option value="shop">쇼핑 검색</option>
      <option value="news">뉴스 검색</option>
    </select>
    <router-link :to="`/naver/${category}`">선택</router-link>
    <br /><br />

    <router-link :to="{ name: 'NaverBlogView' }">블로그 검색 </router-link> |
    <router-link :to="{ name: 'NaverShopView' }">쇼핑 검색 </router-link> |
    <router-link :to="{ name: 'NaverNewsView' }">뉴스 검색 </router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NaverView",
  components: {},
  data() {
    return {
      category: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
