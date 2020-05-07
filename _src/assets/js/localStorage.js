'use strict';
const getFromLs = () => {
  const LSData = localStorage.getItem('data');
  if (LSData !== null) {
    data = JSON.parse(LSData);
    paintList();
  } else {
    getData();
  }
};

const setInLS = () => {
  localStorage.setItem('data', JSON.stringify(data));
};

getFromLs();
