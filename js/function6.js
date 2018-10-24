function findTitle(arr, str) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input data is not array. Please, enter valid array');
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object' || arr[i] === null) {
      throw new TypeError('Array objects are invalid. Please, enter valid objects array');
    }
  }
  const result = [];
  const keyName = 'title';
  const userString = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    for (const key in arr[i]) {
      if (arr[i][key].toLowerCase().indexOf(userString) > -1 && key === keyName) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

const arr = [{
  title: 'Some title1'
}, {
  title: 'I like JS'
}, {
  user: 'This obj doesn\'t have key title'
}, {
  title: 'Js - is the best!'
}
];

console.log(findTitle(arr, 'js'));
