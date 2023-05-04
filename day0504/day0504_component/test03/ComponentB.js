export default {
  //   template: `
  //         <div>
  //             <button v-on:click="plus">+</button>
  //             <button v-on:click="minus">-</button>
  //             <button v-on:click="reset">RESET</button>
  //         </div>

  //     `,

  props: ["cup"],

  template: `
    <div>
        <button v-on:click="send(+1)">+</button>
        <button v-on:click="send(-1)">-</button>
        <button v-on:click="send(0)">RESET</button>
    </div>
    `,
  methods: {
    send(tmp) {
      // this.$emit("send-num", tmp);
      this.cup.$emit("hey", tmp);
    },
  },
};
