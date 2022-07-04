<style scoped></style>
<template>
  <li class="n-li">
    <span class="n-span" v-if="options.title">{{ options.title }}：</span>
    <i class="n-i">{{ model }}</i>
  </li>
</template>
<script>
export default {
  name: "lg-text",
  props: {
    schema: {
      type: Object,
      default: function() {
        return {};
      }
    },
    value: {
      defualt: ""
    }
  },
  computed: {
    options() {
      let { options } = this.schema;
      return Object.assign({}, this.defaultOptions, options || {});
    },
    model() {
      return this.getShow(this.value, this.options.formatter);
    }
  },
  data() {
    return {
      defaultOptions: {}
    };
  },
  mounted() {
    this.$emit("mounted", this);
  },
  methods: {
    getShow(value, formatter) {
      let { type, params } = formatter,
        result = value;
      switch (type) {
        case "FV":
          if (params) result = this.FV(value, params);
          break;
        case "date":
          if (value) result = this.formatDate(value, params);
          break;
        default:
          break;
      }
      return result;
    }
  }
};
</script>
