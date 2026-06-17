import { LitElement as l, css as u } from "lit";
const o = class o extends l {
  constructor() {
    super(...arguments), this.defaultSourceValue = "[378518116,1812704498,381116901,832229535]";
  }
  getTitle() {
    var e;
    const t = (e = this.config) == null ? void 0 : e.title;
    return typeof t == "string" ? t : (t == null ? void 0 : t[document.documentElement.lang]) || (t == null ? void 0 : t.ar) || "منتجات على ذوقك";
  }
  render() {
    var r, c, a;
    const t = document.createElement("section");
    t.className = "s-block s-block-products-on-your-taste";
    const e = document.createElement("div");
    e.className = "container";
    const i = document.createElement("h2");
    i.className = "s-block-products-on-your-taste__title", i.textContent = this.getTitle();
    const s = document.createElement("salla-products-list");
    return s.setAttribute("source", ((r = this.config) == null ? void 0 : r.source) || "selected"), s.setAttribute("limit", String(((c = this.config) == null ? void 0 : c.limit) || 4)), s.setAttribute("source-value", ((a = this.config) == null ? void 0 : a.source_value) || this.defaultSourceValue), e.append(i, s), t.append(e), t;
  }
};
o.properties = {
  config: { type: Object }
}, o.styles = u`
    .container {
      width: calc(100% - 2rem);
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .s-block-products-on-your-taste {
      padding: 2.5rem 0;
    }

    .s-block-products-on-your-taste__title {
      margin: 0 0 1.5rem;
      font-size: 1.875rem;
      font-weight: 700;
      line-height: 1.4;
    }
  `;
let n = o;
typeof n < "u" && n.registerSallaComponent("salla-products-on-your-taste");
export {
  n as default
};
