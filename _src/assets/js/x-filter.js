'use strict';
let filteredData = [];
const handleFilter = (ev) => {
  for (const item of data) {
    console.log(item.cards);
    filteredData = item.cards.filter((item) => {
      return item.cards.title.includes(ev.currentTarget.value);
    });
  }

  // filteredData = data.filter((item) => {
  //   return item.cards.title.includes(ev.currentTarget.value);
  // });
  console.log(filteredData);
};

addListener('.js-filter-input', 'keyup', handleFilter);
