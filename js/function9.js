const listOfPosts1 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov'
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov'
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

function getQuantityPostsByAuthor(postsList, name) {
  if (!Array.isArray(postsList)) {
    return new Error('Input data is not array. Please, enter valid array');
  }
  for (let i = 0; i < postsList.length; i++) {
    if (typeof postsList[i] !== 'object' || postsList[i] === null) {
      return new Error('Array objects are invalid. Please, enter valid objects array');
    }
  }
  const keyWord = name;
  const keyField = 'author';
  const type = 'post';
  let counter = 0;
  return postsList.reduce((quantity, currentPost) => {
    for (const key in currentPost) {
      if (currentPost[key] === keyWord && key === keyField && currentPost.hasOwnProperty(type)) {
        counter++;
      }
    }
    return counter;
  }, 0);
}

console.log(getQuantityPostsByAuthor(listOfPosts1, 'Ivanov'));
