export default function Hoc() {
  return {
    props: {
      isHoc: {
        //用于查找节点时本层节点的识别
        type: Boolean,
        default: true
      },
      fixed: {
        //用于组合类组件，为true时不可修改内部子节点的结构
        type: Boolean,
        default: false
      },
      schema: {
        type: Object,
        default: function() {
          return {};
        }
      },
      id: {
        type: Number
      },
      type: {
        type: String
      },
      filterType: {
        type: String
      },
      params: {
        //用于初始filter值传递(非联动)
        type: Object,
        default: function() {
          return {};
        }
      },
      attrs: {
        //绑定数据的属性map
        type: Object,
        default: function() {
          return null;
        }
      },
      filters: {
        //依赖filter的map
        type: Object,
        default: function() {
          return null;
        }
      },
      bindings: {
        //双向绑定的map
        type: Object,
        default: function() {
          return null;
        }
      },
      filterScope: {
        //filter局部作用域
        type: Array
      },
      condition: {
        type: Array
      }
    },
    data() {
      return {
        realComponent: null,
        ready: true,
        show: true,
        value: null
      };
    },
    watch: {
      type(val) {
        if (val) {
          this.getComp(val);
        }
      }
    },
    created() {},
    mounted() {
      console.log("hoc mounted");
      if (this.type && !this.realComponent) {
        this.getComp(this.type);
      }
    },
    methods: {
      getComp(type) {
        console.log("hoc getComp", type);
        import(`@/lego/${type}`).then(res => {
          this.realComponent = res.default;
          console.log("hoc getComp complete", this.realComponent);
        });
      },
      renderComponent() {
        let slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])
          .map(vnode => {
            vnode.context = this._self;
            return vnode;
          });
        let $props = Object.assign(this.$props, { value: this.value });
        return this.realComponent
          ? {
              comp: this.realComponent,
              attrs: {
                on: this.$listeners,
                props: $props,
                scopedSlots: this.$scopedSlots,
                attrs: this.$attrs,
                ref: "childComp"
              },
              slots: slots
            }
          : null;
      }
    },
    render(h) {
      let component = this.renderComponent();
      let { comp, attrs, slots } = component || {};
      console.log("hoc render", comp, comp == null);
      return h(comp, attrs, slots);
    }
  };
}
