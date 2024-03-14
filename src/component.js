export class Component {
  constructor(selector) {
    this.selector = selector;
    this.template = '';
  }

  render(position = 'beforeend') {
    const targetElement = document.querySelector(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'beforeend') {
      this.element = targetElement.lastElementChild;
    } else if (position === 'afterbegin') {
      this.element = targetElement.firstElementChild;
    } else if (position === 'beforebegin') {
      this.element = targetElement.previousElementSibling;
    } else if (position === 'afterend') {
      this.element = targetElement.nextElementSibling;
    }
  }

  replace() {
    this.element.outerHTML = this.template;
  }

  unRender() {
    if (this.element) {
      this.element.outerHTML = '';
    }
  }
}
