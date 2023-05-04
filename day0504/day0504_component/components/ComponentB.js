export default {
  //   template: `
  //         <div>
  //             <button v-on:click="plus">+</button>
  //             <button v-on:click="minus">-</button>
  //             <button v-on:click="reset">RESET</button>
  //         </div>

  //     `,

  template: `
    <div>
        <button v-on:click="send(+1)">+</button>
        <button v-on:click="send(-1)">-</button>
        <button v-on:click="send(0)">RESET</button>
    </div>
    `,
  methods: {
    plus() {
      this.$emit("plus");
    },
    minus() {
      this.$emit("minus");
    },
    reset() {
      this.$emit("reset");
    },
    send(tmp) {
      this.$emit("send-num", tmp);
    },
  },
};
