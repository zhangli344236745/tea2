<template>
  <ul>
    <li v-for="(item, index) in todoLists" :key="item.id">
      <slot :itemValue="item" name="content" :index="index">
        {{ item.test }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todoList",
  props: {
    todos: Array
  },
  data() {
    return {
      todoLists: this.todos
    };
  }
};
</script>
