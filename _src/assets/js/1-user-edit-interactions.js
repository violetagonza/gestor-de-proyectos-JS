'use strict';
let changedEl;
const handleListInput = (ev) => {
  //Find changed list
  changedEl = ev.currentTarget.id;
  for (const item of data) {
    if (item.id === parseInt(changedEl)) {
      //change array info with value
      item.title = ev.currentTarget.value;
    }
  }
  console.log(data);
  setInLS();
};

const listenListInput = () => {
  document.querySelectorAll('.js-list').forEach((input) => {
    input.addEventListener('keyup', handleListInput);
  });
};
