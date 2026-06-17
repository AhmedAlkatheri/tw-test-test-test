import { css, LitElement } from 'lit';

type ProductsConfig = {
  title?: string | { ar?: string; en?: string };
  source?: string;
  source_value?: string;
  limit?: number;
};

export default class ProductsOnYourTaste extends LitElement {
  static properties = {
    config: { type: Object },
  };

  config?: ProductsConfig;

  private readonly defaultSourceValue = '[378518116,1812704498,381116901,832229535]';

  static styles = css`
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

  private getTitle() {
    const title = this.config?.title;

    if (typeof title === 'string') {
      return title;
    }

    return title?.[document.documentElement.lang] || title?.ar || 'منتجات على ذوقك';
  }

  render() {
    const section = document.createElement('section');
    section.className = 's-block s-block-products-on-your-taste';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h2');
    title.className = 's-block-products-on-your-taste__title';
    title.textContent = this.getTitle();

    const productsList = document.createElement('salla-products-list');
    productsList.setAttribute('source', this.config?.source || 'selected');
    productsList.setAttribute('limit', String(this.config?.limit || 4));
    productsList.setAttribute('source-value', this.config?.source_value || this.defaultSourceValue);

    container.append(title, productsList);
    section.append(container);

    return section;
  }
}
