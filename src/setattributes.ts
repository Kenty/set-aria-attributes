// Adding attributes to Hamburger
interface Sample {
  el: string;
  key: string;
  ev: string;
}

interface Obj {
  [key: string]: string;
}

export module SA {
  export class SetAttributes {
    el: HTMLElement;
    key: string;
    ev: Event;

    public constructor(el: HTMLElement) {
      this.el = el;
    }

    init() {
      this.setAttributes({
        'aria-haspopup': 'true',
        'aria-expanded': 'false',
      });
      this.click();
    }

    setAttributes(attrs: Obj) {
      // Object.keys(attrs).forEach((key: string) => {
      //   // console.log(["this", this], ["key", attrs[key]]);

      //   let value = attrs[key];
      //   this.el.setAttribute(key, value);
      // });

      for (let key of Object.keys(attrs)) {
        let value: string = attrs[key];
        console.log('value:', [key, attrs[key]]);

        this.el.setAttribute(key, value);
      }
    }

    expand() {
      this.el.setAttribute('aria-expanded', 'true');
    }

    collapse() {
      this.el.setAttribute('aria-expanded', 'false');
    }

    toggle() {
      this.el.getAttribute('aria-expanded') === 'true' ? this.collapse() : this.expand();
    }

    click() {
      this.el.addEventListener('click', (ev: Event) => {
        let evt = ev || window.event;
        evt.stopPropagation();
        evt.preventDefault();
        this.toggle();
      }, false);
    }

    state = () => {

    }
  }
}
