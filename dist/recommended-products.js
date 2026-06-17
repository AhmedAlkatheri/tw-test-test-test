import { LitElement as l, css as m } from "lit";
const r = class r extends l {
  constructor() {
    super(...arguments), this.defaultSourceValue = "[378518116,1812704498,381116901,832229535]";
  }
  getTitle() {
    var t;
    const e = (t = this.config) == null ? void 0 : t.title;
    return typeof e == "string" ? e : (e == null ? void 0 : e[document.documentElement.lang]) || (e == null ? void 0 : e.ar) || "منتجات نرشحها لك";
  }
  render() {
    var c, o, a;
    const e = document.createElement("section");
    e.className = "s-block s-block-recommended-products";
    const t = document.createElement("div");
    t.className = "container";
    const i = document.createElement("h2");
    i.className = "s-block-recommended-products__title", i.textContent = this.getTitle();
    const s = document.createElement("salla-products-list");
    return s.setAttribute("source", ((c = this.config) == null ? void 0 : c.source) || "selected"), s.setAttribute("limit", String(((o = this.config) == null ? void 0 : o.limit) || 4)), s.setAttribute("source-value", ((a = this.config) == null ? void 0 : a.source_value) || this.defaultSourceValue), t.append(i, s), e.append(t), e;
  }
};
r.properties = {
  config: { type: Object }
}, r.styles = m`
    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .s-block-recommended-products {
      padding: 2.5rem 0;
    }

    .s-block-recommended-products__title {
      margin: 0 0 1.5rem;
      font-size: 1.875rem;
      font-weight: 700;
      line-height: 1.4;
    }
  `;
let n = r;
typeof n < "u" && n.registerSallaComponent("salla-recommended-products");
export {
  n as default
};
