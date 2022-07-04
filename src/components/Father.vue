<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <div class="tmpl">
      <span>菜单1</span>
      <span>菜单2</span>
      <span>菜单3</span>
      <span>菜单4</span>
      <span>菜单5</span>
      <span>菜单6</span>
    </div>
    <slot index="zhang"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 1
    };
  }
};
</script>
