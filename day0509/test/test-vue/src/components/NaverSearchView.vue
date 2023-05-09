<template>
  <div>
    {{ naverKeyword }}
    <table border="1">
      <tr>
        <td>상품이미지</td>
        <td>상품명</td>
        <td>최저가</td>
        <td>링크</td>
      </tr>
      <naver-search-view-item
        v-for="(item, idx) in items"
        :ii="item"
        :key="idx"
      ></naver-search-view-item>
    </table>
  </div>
</template>

<script>
import axios from "axios"; // npm i axios해서 다운받아놨다.
import NaverSearchViewItem from "./NaverSearchViewItem.vue";
export default {
  name: "NaverSearchView",
  components: { NaverSearchViewItem },
  data() {
    return {
      items: [],
    };
  },
  props: {
    // 부모의 data중 momkeyword가 변경되면 받아오는 이쪽도 자동 반영
    naverKeyword: String,
  },
  watch: {
    // 지켜보다가 데이터가 변경되면 백엔드한테 검색결과 달라고.
    naverKeyword() {
      //axios.get('url').then((resp) => {do something})
      axios.get("http://192.168.214.40:7777/bookcafe/naver/" + this.naverKeyword).then((resp) => {
        console.log(resp);
        this.items = resp.data.items;
      });
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
