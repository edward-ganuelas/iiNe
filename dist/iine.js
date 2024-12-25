import { computed as b, openBlock as i, createElementBlock as d, normalizeClass as o, unref as u, toDisplayString as y } from "vue";
function c(e, t) {
  return {
    classes: b(() => [
      ...t,
      e.classes
    ])
  };
}
const m = ["aria-label", "data-test-id"], C = {
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
  setup(e, { emit: t }) {
    const n = t, a = e, r = Object.freeze([
      "py-2",
      "px-7",
      "rounded-full",
      "border-neutral-700",
      "border"
    ]), { classes: l } = c(a, r);
    return (p, s) => (i(), d("button", {
      "aria-label": a.ariaLabel,
      onClick: s[0] || (s[0] = () => n("onClick")),
      class: o(u(l)),
      "data-test-id": e.dataTestId
    }, y(a.label), 11, m));
  }
}, f = ["aria-labelledby", "type", "data-test-id"], I = {
  __name: "iiInput",
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
  setup(e, { emit: t }) {
    const n = e, a = t, r = Object.freeze([
      "border-black",
      "rounded",
      "border-solid",
      "border",
      "p-1"
    ]), { classes: l } = c(n, r);
    return (p, s) => (i(), d("input", {
      class: o(u(l)),
      "aria-labelledby": e.ariaLabelledById,
      type: e.inputType,
      onChange: s[0] || (s[0] = () => a("onChange")),
      "data-test-id": e.dataTestId
    }, null, 42, f));
  }
};
export {
  C as IiButton,
  I as iiInput
};
