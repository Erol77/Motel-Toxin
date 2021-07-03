import $ from 'jquery';
//"use strict";
function createAnalytics() {//: object
  "use strict";
  let counter = 0;
  let destroyed = false;

  const listener =  counter++; //(): number =>

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    }
  };
}

window.analytics = createAnalytics();
