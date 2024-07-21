import { computed as i, openBlock as c, createElementBlock as p, normalizeClass as d, toDisplayString as y } from "vue";
const b = ["aria-label"], C = {
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
      type: Array
    },
    primary: {
      type: Boolean
    }
  },
  emits: ["onClick"],
  setup(a, { emit: n }) {
    const s = n, e = a, l = [
      "py-2",
      "px-7",
      "rounded-lg"
    ], r = i(() => {
      const t = [
        ...l
      ];
      return (e == null ? void 0 : e.primary) === !0 ? t.push("bg-blue") : t.push("bg-orange"), t;
    }), o = i(() => [
      ...r.value,
      e.classes
    ]);
    return (t, u) => (c(), p("button", {
      "aria-label": e.ariaLabel,
      onClick: u[0] || (u[0] = () => s("onClick")),
      class: d(o.value)
    }, y(e.label), 11, b));
  }
}, m = ["aria-labelledby", "type"], f = {
  __name: "iiInput",
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    classes: {
      type: Array
    },
    ariaLabelledById: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  emits: ["onChange"],
  setup(a, { emit: n }) {
    const s = a, e = n, l = [
      "border-black",
      "rounded",
      "border-solid",
      "border",
      "p-1"
    ], r = i(() => [
      ...l,
      s == null ? void 0 : s.classes
    ]);
    return (o, t) => (c(), p("input", {
      class: d(r.value),
      "aria-labelledby": a.ariaLabelledById,
      type: a.inputType,
      onChange: t[0] || (t[0] = () => e("onChange"))
    }, null, 42, m));
  }
};
export {
  C as IiButton,
  f as iiInput
};
