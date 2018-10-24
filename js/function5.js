function getNumber(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input data is not array. Please, enter valid array');
  }
  for (let i = 0; i < array.length; i++) {
    if (!isFinite(array[i]) || Math.round(array[i]) !== array[i]) {
      throw new TypeError('Array numbers are invalid. Please, enter valid array');
    }
  }
  let result;
  const arrayCoefficient = array.reduce(function (sum, element) {
    return sum + Math.abs(element % 2) / array.length;
  }, 0);
  if (arrayCoefficient === 0.5) {
    return 'Input array contains equal parts even and odd numbers!';
  } else if (arrayCoefficient === 0) {
    return 'Input array contains only one number!';
  }
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] % 2) !== Math.round(arrayCoefficient)) {
      result = array[i];
    }
  }
  return result;
}

console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));
