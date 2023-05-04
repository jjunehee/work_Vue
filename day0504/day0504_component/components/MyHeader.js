export default {
  // instance 에서 el : "#app" 이였던 부분 대신 template임.
  template: `
    <div>
        <h1> 여기가 우리 사이트 헤더 부분 입니다. </h1>
        <input type="number" v-model="amount">
        <button v-on:click="mom"> 나도!!!!!!!!!!!!!!!!!!</button>
    </div>
  `,

  data() {
    // template에 보여줄 데이터 있으면 여기 설정.
    return {
      amount: 0,
    };
  },
  methods: {
    mom() {
      this.$emit("mother", this.amount); // this.emit('이벤트이름',보낼 데이터)
    },
  },
  created() {},
};
