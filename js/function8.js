'use strict';

function validateNumbers(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'string' || !isFinite(numbers[i]) ||
      numbers[i].trim() === '' || Math.round(+numbers[i]) !== +numbers[i]) {
      throw new TypeError('Incorrect types of numbers. Please enter \'string\' numbers');
    }
  }
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function sum(number1, number2, result = '', tenPart = 0) {
  if (number1.length === 0 && number2.length === 0 && !tenPart) {
    return result;
  }
  const firstNumeral = parseInt(number1.pop() || '0', 10);
  const secondNumeral = parseInt(number2.pop() || '0', 10);
  const partOfSum = firstNumeral + secondNumeral + tenPart;
  const addNumber = (result + partOfSum).slice(-1);
  return sum(number1, number2, addNumber + result, partOfSum > 9 ? 1 : 0);
}

function getSum(number1, number2) {
  validateNumbers(number1, number2);
  const flippedNumber2 = reverseString(number2);
  return sum(number1.split(''), flippedNumber2.split('')).toString();
}

console.log(getSum('123', '324'));
console.log(getSum('11111111111111111111111111111111111111111111111111111',
  '23333333333333333333333333333333333333333333333333333'));
