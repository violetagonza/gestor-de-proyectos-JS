'use strict';
let data;

const getData = () => {
  fetch('../../api/board.json')
    .then((response) => response.json())
    .then((result) => {
      data = result;
      console.log(data);
      paintMenuList();
      return data;
    });
};

getData();
