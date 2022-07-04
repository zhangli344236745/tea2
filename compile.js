const fs = require("fs");
const postcss = require("postcss");
const compiler = require("vue-template-compiler");
const less = require("postcss-less-engine");
const clean = require("postcss-clean");
const rem2rpx = require("postcss-rem2rpx");

const vueFileContent = fs.readFileSync("./src/App.vue", "utf8");
const sfc = compiler.parseComponent(vueFileContent);

console.log(sfc);
const styleStr = sfc.styles.reduce((pre, cur) => {
  return pre + cur.content.trim() + "\n";
}, "");

postcss([less({ strictMath: true }), rem2rpx({ rootFontSize: 50 }), clean()])
  .process(styleStr, { parser: less.parser, from: "res-styles-ast.less" })
  .then(
    result => {
      console.log(result.css);
      fs.writeFileSync("./dist/test.wxss", result.css);
    },
    err => {
      console.log(err);
    }
  );
