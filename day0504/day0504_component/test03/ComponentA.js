export default {
  template: `

        <div>
        {{number}}
        </div>
    `,
  props: ["cup"],

  data() {
    return {
      number: 0,
    };
  },

  created() {
    this.cup.$on("hey", this.yes);
  },

  methods: {
    yes(tmp) {
      if (tmp == 0) {
        this.number = 0;
      } else {
        this.number += tmp;
      }
    },
  },
};
