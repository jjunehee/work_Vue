<template>
  <tr>
    <td>
      <img :src="ii.image" width="200px" />
    </td>
    <td v-html="ii.title"></td>
    <td>{{ ii.lprice }}</td>
    <td><a :href="ii.link">[바로가기]</a></td>
  </tr>
</template>

<script>
export default {
  name: "NaverSearchViewItem",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  props: {
    // 나는 상품 하나를 보여주는 컴포넌트
    ii: Object,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
