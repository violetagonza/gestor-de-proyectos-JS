'use strict';

// menu

const toggleMenu = () => {
  document.querySelector('.js-menu').classList.toggle('show');
};
console.log(document.querySelector('.js-menu'));

document.querySelectorAll('.js-menu-btn').forEach((btn) => {
  btn.addEventListener('click', toggleMenu);
});
