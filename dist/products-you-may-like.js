import { LitElement as l, css as u } from "lit";
const n = class n extends l {
  constructor() {
    super(...arguments), this.defaultSourceValue = "[378518116,1812704498,381116901,832229535]";
  }
  getTitle() {
    var e;
    const t = (e = this.config) == null ? void 0 : e.title;
    return typeof t == "string" ? t : (t == null ? void 0 : t[document.documentElement.lang]) || (t == null ? void 0 : t.ar) || "منتجات قد تعجبك";
  }
  render() {
    var o, r, a;
    const t = document.createElement("section");
    t.className = "s-block s-block-products-you-may-like";
    const e = document.createElement("div");
    e.className = "container";
    const c = document.createElement("h2");
    c.className = "s-block-products-you-may-like__title", c.textContent = this.getTitle();
    const s = document.createElement("salla-products-list");
    return s.setAttribute("source", ((o = this.config) == null ? void 0 : o.source) || "selected"), s.setAttribute("limit", String(((r = this.config) == null ? void 0 : r.limit) || 4)), s.setAttribute("source-value", ((a = this.config) == null ? void 0 : a.source_value) || this.defaultSourceValue), e.append(c, s), t.append(e), t;
  }
};
n.properties = {
  config: { type: Object }
}, n.styles = u`
    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .s-block-products-you-may-like {
      padding: 2.5rem 0;
    }

    .s-block-products-you-may-like__title {
      margin: 0 0 1.5rem;
      font-size: 1.875rem;
      font-weight: 700;
      line-height: 1.4;
    }
  `;
let i = n;
typeof i < "u" && i.registerSallaComponent("salla-products-you-may-like");
export {
  i as default
};
