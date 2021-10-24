import Vue from "vue";

export default {
  install(): void {
    // eventlistenerを使うときは
    // mixinで実装したほうがよさそう。
    Vue.directive("pseudo-lazy-load", {
      inserted(el: HTMLElement): void {
        el.style.opacity = "0";

        const handler = () => {
          const { top, bottom } = el.getBoundingClientRect();
          // handlerをライフサイクル跨いで渡すことができないため、
          // elementが消えたとき(以下の条件)に、removeEventListenerする
          if (top === 0 && bottom === 0) {
            window.removeEventListener("scroll", handler);
            return;
          }

          const height = document.documentElement.clientHeight;
          if (0 < top && bottom < height) {
            el.style.transition = "opacity .6s .1s";
            el.style.opacity = "1";
            window.removeEventListener("scroll", handler);
          }
        };
        handler();
        window.addEventListener("scroll", handler);
      },
      //   bind(el: HTMLElement): void {},
      //   update(el: HTMLElement): void {},
      unbind(): void {
        // handlerをライフサイクル跨いで渡すことができない
        // window.removeEventListener("scroll", );
      },
    });

    Vue.filter("date", (date: Date): string => {
      const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][
        date.getDay()
      ];
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日(${dayOfWeek})`;
    });
  },
};
