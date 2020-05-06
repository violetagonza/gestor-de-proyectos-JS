'use strict';

// menu
const toggleMenu = () => {
  document.querySelector('.js-menu').classList.toggle('show');
};

document.querySelectorAll('.js-menu-btn').forEach((btn) => {
  btn.addEventListener('click', toggleMenu);
});

// paint menu data
const getMenuList = document.querySelector('.js-menu-list');
let htmlCode;
const paintMenuList = () => {
  for (const item of data.board.list) {
    console.log(item.cards);
  }
};
