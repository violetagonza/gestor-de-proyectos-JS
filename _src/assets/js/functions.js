'use strict';

const addListener = (selector, method, handler) => {
  document.querySelector(selector).addEventListener(method, handler);
};
const addListenerAll = (selector, method, handler) => {
  document.querySelectorAll(selector).forEach((item) => {
    item.addEventListener(method, handler);
  });
};
