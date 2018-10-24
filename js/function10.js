const listOfPosts2 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus'
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle'
      }
    ]
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus'
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle'
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus'
      }
    ]
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus'
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
  }
];

function getQuantityPostsByAuthor(array, name, result = [[], []]) {
  if (!Array.isArray(array)) {
    return new Error('Input data is not array. Please, enter a valid array');
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object' || array[i] === null) {
      return new Error('Array objects are invalid. Please, enter a valid objects array');
    }
  }
  const keyName = 'author';
  const additionalKeyName = 'post';
  const additionalKeyName2 = 'comment';
  for (let i = 0; i < array.length; i++) {
    const object = array[i];
    const keysArray = Object.keys(object);
    for (let j = 0; j < keysArray.length; j++) {
      if (Array.isArray(object[keysArray[j]])) {
        getQuantityPostsByAuthor(object[keysArray[j]], name, result);
      }
      if (object[keysArray[j]] === name && keysArray[j] === keyName &&
        object.hasOwnProperty(additionalKeyName)) {
        result[0].push(object);
      }
      if (object[keysArray[j]] === name && keysArray[j] === keyName &&
        object.hasOwnProperty(additionalKeyName2)) {
        result[1].push(object);
      }
    }
  }
  return 'posts -> ' + result[0].length + '; comments -> ' + result[1].length;
}

console.log(getQuantityPostsByAuthor(listOfPosts2, 'Rimus'));

