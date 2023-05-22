<template>
  <div>
    <h2>쇼핑</h2>
    <input type="text" v-model="keyword" @keyup.enter="search" />

    <table border="1" style="margin: 0 auto">
      <tr>
        <td>이미지</td>
        <td>상품명</td>
        <td>가격</td>
        <td>사러가기</td>
      </tr>

      <tr v-for="item in shopItems" :key="item.productid">
        <td><img :src="item.image" style="width: 200px" alt="" /></td>
        <td v-html="item.title"></td>
        <td>{{ item.lprice }}</td>
        <td>
          <a :href="item.link">[바로가기]</a>
        </td>
      </tr>
    </table>

    <h3>최저가 3인방</h3>
    <table border="1" style="margin: 0 auto">
      <tr v-for="(item, index) in top3Items" :key="index">
        <td><img :src="item.image" style="width: 200px" alt="" /></td>
        <td v-html="item.title"></td>
        <td>{{ item.lprice }}</td>
        <td>
          <a :href="item.link">[바로가기]</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "NaverShopView",
  components: {},
  data() {
    return {
      keyword: "",
    };
  },

  created() {},
  methods: {
    search() {
      //vuex한테 부탁하는 거임. 액션에 searchNaverShop 얘 좀 실행시켜달라고.
      // this.$store.dispatch("searchNaverShop", this.keyword)

      this.$store.dispatch("searchNaverShop", this.keyword);
    },

    ...mapActions(["searchNaverShop"]),
  },
  computed: {
    shopItems() {
      // 내 로컬 data로 저장안하고 항상 vuex에서 꺼내다 쓰는 데이터
      return this.$store.state.shopList;
    },
    // 이렇게 state에 있는거 일일히 들고오기 귀찮...

    // 이렇게 해결
    ...mapState(["shopList", "newsList"]),
    ...mapGetters(["top3Items"]),
  },
};
</script>

<style scoped></style>
