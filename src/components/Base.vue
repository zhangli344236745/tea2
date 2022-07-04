<template>
  <div>
    <span @click="handleClick">props: {{ test }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Base",
  props: {
    test: Number
  },
  mounted() {
    var ws = new WebSocket("wss://echo.websocket.org");
    ws.onopen = function() {
      console.log("connnection open ...");
      ws.send("hello world");
      ws.send("hello world222");
      setTimeout(function() {
        ws.close();
      }, 20000);
    };

    ws.onmessage = function(event) {
      console.log("recived message:" + event.data);
    };

    ws.onclose = function() {
      console.log("connection closed");
    };

    ws.onerror = function() {
      console.log("error");
    };
  },
  methods: {
    handleClick() {
      this.$emit("Base-click", {
        msg: "子组件emit"
      });
    }
  }
};
</script>
