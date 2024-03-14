import { Component } from './component';

export class Header extends Component {
  title;
  constructor(selector, title) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="main-header">
      <h1 class="header__title">${this.title}</h1>
    </header>
    `;
  }
}
