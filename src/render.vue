<template functional>
  <comp v-bind="data.attrs" :key="data.attrs.id" v-on="listeners">
    <template v-if="data.attrs.children">
      <template v-for="item in data.attrs.children">
        <render
          v-bind="item"
          :schema="item"
          :key="item.id"
          v-on="listeners"
          :slot="item.slotName"
        >
        </render>
      </template>
    </template>
  </comp>
</template>

<script>
import hoc from "./hoc";
const comp = hoc();

export default {
  name: "render",
  components: {
    comp
  }
};
</script>
