function sum(value1, value2) {
  const firstNumber = value1;
  let secondNumber = value2;
  if (typeof firstNumber !== 'string' || !isFinite(firstNumber)) {
    return new Error('Incorrect first value type');
  }
  if (typeof secondNumber !== 'number') {
    return new Error('Incorrect second value type');
  }
  if (value2 % 15 === 0 || value2 % 5 === 0 || value2 % 3 === 0) {
    secondNumber = secondNumber * -1;
  }
  return +firstNumber + secondNumber;
}
console.log(sum('25', 15));
console.log(sum('3', 41));
console.log(sum('3', 45));
