<template>
  <div id="app">
    <code-editor v-model="code" showTool :options="{ mode: 'markdown' }" @onCmBlur="onCmCodeChange">
    </code-editor>
    <!-- <div v-for="(item, index) in tempArr" :key="`index-${index}`">
      {{ item.id }}2
      <codemirror
        :options="cmOptions"
        @input="onCmCodeChange"
        ref="tcode"
      ></codemirror>
    </div> -->
    <div>
      <button @click="test">testarr</button>
    </div>
    <div class="list-detail">
      <loop-component :list="list"></loop-component>
    </div>
    <div class="list-detail">
      <loop-comp :list="list"></loop-comp>
    </div>
    <Funs
      v-for="(btn, index) in testData"
      :type="btn.type"
      :text="btn.text"
      :key="index"
      >{{ btn.text }}</Funs
    >
    <func name="faff"></func>
    <Father>
      <template v-slot="itemProps">{{ itemProps.index }}</template>
    </Father>
    <todo-list :todos="todosBefore">
      <template v-slot:content="slotProps">
        <!-- 打印itemvalue数据-->
        <div style="background:red; border-bottom:2px solid blue;">
          {{ slotProps.itemValue }}
        </div>
        <!-- 根据判断条件展示对号元素 -->
        <span v-if="slotProps.itemValue.isComplete">✓</span>
        <!-- 显示代办事项名称 -->
        {{ slotProps.itemValue.test }}
      </template>
    </todo-list>
    <p>-------</p>
    <todo-list :todos="todosBefore">
      <template v-slot:content="item">
        <!-- 打印itemvalue数据-->
        <div style="background:red; border-bottom:2px solid blue;">
          {{ item }}
        </div>
        <!-- 根据判断条件展示对号元素 -->

        <!-- 显示代办事项名称 -->
      </template>
    </todo-list>
  </div>
</template>

<script>
import Father from "./components/Father";
import TodoList from "./components/todoList";
import Funs from "./components/Funs.vue";
import func from "./components/func";
import loopComponent from "./components/loopComponent";
import LoopComp from "./components/LoopComp";
// require component
//import { codemirror } from "vue-codemirror";

// require styles
import "codemirror/lib/codemirror.css";
import CodeEditor from "./components/CodeEditor.vue";

export default {
  name: "App",
  components: {
    Father,
    TodoList,
    Funs,
    func,
    loopComponent,
    LoopComp,
    //codemirror,
    CodeEditor
  },
  data() {
    return {
      code: "var i = 11;",
      cmOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
      },
      tempArr: [{ id: "1" }, { id: "2" }],
      comp: {
        type: "text",
        options: {
          title: "客户名称",
          keyName: "customerName",
          formatter: {
            type: "text",
            params: ""
          }
        },
        id: 2
      },
      testData: [{ type: "error", text: "test" }],
      todosBefore: [
        {
          test: "询问时间",
          id: 12312313123,
          isComplete: true
        },
        {
          test: "代办1",
          id: 123123123423423
        },
        {
          test: "爱你地方年底见覅",
          id: 12312313123234234
        },
        {
          test: "时间2",
          id: 1231231312323333
        },
        {
          test: "师生情是行情",
          id: 12313333333
        }
      ],
      list: [
        {
          name: "广东",
          children: [
            {
              name: "广州",
              children: [
                {
                  name: "天河区"
                },
                {
                  name: "黄浦区"
                }
              ]
            },
            {
              name: "深圳",
              children: [
                {
                  name: "福田区"
                },
                {
                  name: "南山区"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
    test(msg) {
      console.log(msg, "msg");
      //this.tempArr.push({"id":3});
      // setTimeout(() => {
      //   console.log(this.$refs.tcode);
      // },200);
      for (var i = 0; i < this.$refs.tcode.length; i++) {
        const obj = this.$refs.tcode[i];
        console.log(obj);
      }
      // for(var i = 0; i < this.tempArr.length;i++){
      //   console.log(this.$refs[`t-${i}`].value);
      // }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
