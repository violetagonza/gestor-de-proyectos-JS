'use strict';

const handleListInput = (ev) => {
  console.log(ev.target.value);
};

const listenListInput = () => {
  document.querySelectorAll('.js-list').forEach((input) => {
    input.addEventListener('keyup', handleListInput);
  });
};
