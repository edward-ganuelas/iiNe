import { computed as p, openBlock as d, createElementBlock as f, normalizeClass as i, unref as u, toDisplayString as I, createBlock as b, resolveDynamicComponent as m, withCtx as g, renderSlot as y } from "vue";
function c(t, e) {
  return {
    classes: p(() => [
      ...e,
      t.classes
    ])
  };
}
const h = ["aria-label", "data-test-id"], S = {
  __name: "IiButton",
  props: {
    label: {
      type: String,
      required: !0
    },
    ariaLabel: {
      type: String,
      required: !0
    },
    classes: {
      type: Array,
      default: () => []
    },
    dataTestId: {
      type: [String, Object],
      default: () => null
    }
  },
  emits: ["onClick"],
  setup(t, { emit: e }) {
    const l = e, a = t, s = Object.freeze([
      "py-2",
      "px-7",
      "rounded-full",
      "border-neutral-700",
      "border"
    ]), { classes: n } = c(a, s);
    return (o, r) => (d(), f("button", {
      "aria-label": a.ariaLabel,
      onClick: r[0] || (r[0] = () => l("onClick")),
      class: i(u(n)),
      "data-test-id": t.dataTestId
    }, I(a.label), 11, h));
  }
}, _ = {
  __name: "IiHeaders",
  props: {
    classes: {
      type: Array,
      default: () => []
    },
    headingType: {
      type: String,
      required: !0,
      default: "1",
      validator(t) {
        return ["1", "2", "3", "4", "5", "6"].includes(t);
      }
    },
    dataTestId: {
      type: [String, Object],
      default: () => null
    }
  },
  setup(t) {
    const e = t, l = p(() => {
      const n = ["font-bold"], o = {
        1: "text-3xl",
        2: "text-2xl",
        3: "text-xl",
        4: "text-lg",
        5: "text-base",
        6: "text-base"
      };
      return n.push(o[e.headingType]), n;
    }), a = p(() => `h${e.headingType}`), { classes: s } = c(e, l.value);
    return (n, o) => (d(), b(m(a.value), {
      class: i(u(s)),
      "data-test-id": t.dataTestId
    }, {
      default: g(() => [
        y(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-test-id"]));
  }
}, C = ["aria-labelledby", "type", "data-test-id"], $ = {
  __name: "IiInput",
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    classes: {
      type: Array,
      default: () => []
    },
    ariaLabelledById: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    dataTestId: {
      type: [String, Object],
      default: () => null
    }
  },
  emits: ["onChange"],
  setup(t, { emit: e }) {
    const l = t, a = e, s = Object.freeze([
      "border-black",
      "rounded",
      "border-solid",
      "border",
      "p-1"
    ]), { classes: n } = c(l, s);
    return (o, r) => (d(), f("input", {
      class: i(u(n)),
      "aria-labelledby": t.ariaLabelledById,
      type: t.inputType,
      onChange: r[0] || (r[0] = () => a("onChange")),
      "data-test-id": t.dataTestId
    }, null, 42, C));
  }
}, j = {
  __name: "IiList",
  props: {
    classes: {
      type: Array,
      default: () => []
    },
    listType: {
      type: String,
      required: !0,
      default: "ul",
      validator(t) {
        return ["ul", "ol"].includes(t);
      }
    },
    hideListStyle: {
      type: Boolean,
      default: !0
    },
    dataTestId: {
      type: [String, Object],
      default: () => null
    }
  },
  setup(t) {
    const e = t, l = p(() => {
      const s = [
        "text-base",
        "font-normal",
        "ml-2"
      ];
      return e.hideListStyle === !1 ? s.push(e.listType === "ul" ? "list-disc" : "list-decimal") : s.push("list-none"), [...s];
    }), { classes: a } = c(e, l.value);
    return (s, n) => (d(), b(m(t.listType), {
      class: i(u(a)),
      "data-test-id": t.dataTestId
    }, {
      default: g(() => [
        y(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-test-id"]));
  }
}, T = ["data-test-id"], B = {
  __name: "IiParagraph",
  props: {
    classes: {
      type: Array,
      default: () => []
    },
    dataTestId: {
      type: [String, Object],
      default: () => null
    }
  },
  setup(t) {
    const e = t, l = Object.freeze([
      "mb-1",
      "text-base",
      "font-normal"
    ]), { classes: a } = c(e, l);
    return (s, n) => (d(), f("p", {
      class: i(u(a)),
      "data-test-id": t.dataTestId
    }, [
      y(s.$slots, "default")
    ], 10, T));
  }
};
export {
  S as IiButton,
  _ as IiHeaders,
  $ as IiInput,
  j as IiList,
  B as iiParagraph
};
