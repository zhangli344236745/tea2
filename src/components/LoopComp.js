export default {
  name: "LoopComp",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    LoopH(h, list) {
      return h(
        "div",
        {
          attrs: {
            class: "list-item"
          },
          props: {
            list: list
          }
        },
        [
          h(
            "div",
            {
              attrs: {
                class: "list-name"
              }
            },
            [h("span", list.name)]
          ),
          (() => {
            if (!list.children || !list.children.length) {
              return [];
            }
            return list.children.map(item => {
              return this.LoopH(h, item);
            });
          })()
        ]
      );
    }
  },
  mounted() {},
  render(h) {
    return this.LoopH(h, this.list[0]);
  }
};
