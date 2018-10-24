function checkNumber(num) {
  const resultArray = [];
  let prime = true;
  if (typeof num !== 'number' || (num ^ 0) !== num) {
    return new Error('Input number is invalid. Please input a correct integer');
  }
  for (let i = 2; i < num || num < 2; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  resultArray.push(prime);
  resultArray.push(num % 2 === 0);
  resultArray.push(num % 10 === 0);
  return resultArray;
}

console.log(checkNumber(7));
console.log(checkNumber(-10));
