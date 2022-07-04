<script>
export default {
  mounted() {
    console.log(this.$attrs);
  },
  render(h) {
    return h("div", {
      class: {
        btn: true,
        success: this.type === "success",
        error: this.type === "error",
        warm: this.type === "warm",
        default: this.type === "default"
      },
      domProps: {
        innerHTML: this.$slots.default[0].text
      },
      on: {
        click: this.clickHandle
      }
    });
  },

  methods: {
    clickHandle() {
      console.log("click handle");
    }
  },

  props: {
    type: {
      type: String,
      default: "default"
    },
    text: {
      type: String,
      default: "default"
    }
  }
};
</script>
