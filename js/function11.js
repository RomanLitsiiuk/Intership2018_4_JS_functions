'use strict';

const complexFunction = function (number1, number2) {
  if (!isFinite(number1) || !isFinite(number1)) {
    return new Error('Arguments are invalid');
  }
  return +number1 + +number2;
};

const cache = (fn) => {
  const memory = [];
  return function (number1, number2) {
    if (number1 === memory[0] && number2 === memory[1]) {
      console.log('Result from cache');
      return memory[2];
    }
    console.log('New result');
    const result = fn(number1, number2);
    memory[0] = number1;
    memory[1] = number2;
    memory[2] = result;
    return result;
  };
};

const cachedFunction = cache(complexFunction);
console.log(cachedFunction(250, 200));
console.log(cachedFunction(250, 200));
console.log(cachedFunction(250, 100));
console.log(cachedFunction(250, 100));

