function getCookingTime(eggsAmount) {
  if (!isFinite(eggsAmount) || typeof eggsAmount !== 'number') {
    throw new TypeError('Incorrect eggs count');
  }
  let result;
  result = Math.ceil(eggsAmount / 5) * 5;
  return result;
}

console.log(getCookingTime(0));
console.log(getCookingTime(5));
console.log(getCookingTime(9));
