function lettersCheck(char, firstSymbol, lastSymbol) {
  return char.charCodeAt() >= firstSymbol.charCodeAt() &&
    char.charCodeAt() <= lastSymbol.charCodeAt();
}

function symbolsCheck(symbol, allowedSymbols) {
  for (let i = 0; i < allowedSymbols.length; i++) {
    if (symbol.charCodeAt() === allowedSymbols[i].charCodeAt()) {
      return true;
    }
  }
  return false;
}

function validateTitle(value) {
  let validStatus = 'INVALID';
  const allowedSymbols = ['!', ':', '-', '?', '.', ','];
  const inputTitle = String(value).trim();
  const firstLetter = inputTitle.charAt(0);
  if (firstLetter.toUpperCase() !== firstLetter ||
    inputTitle.length < 3 || inputTitle.length > 19) {
    return validStatus;
  }
  for (let i = 0; i < inputTitle.length; i++) {
    if (isFinite(inputTitle.charAt(i))) {
      return validStatus;
    }
  }
  for (let i = 0; i < inputTitle.length; i++) {
    validStatus = 'INVALID';
    if (lettersCheck(inputTitle[i], 'A', 'Z') ||
      lettersCheck(inputTitle[i], 'a', 'z') ||
      lettersCheck(inputTitle[i], 'А', 'ё')) {
      validStatus = 'VALID';
      continue;
    }
    if (i > 0 && symbolsCheck(inputTitle[i], allowedSymbols)) {
      validStatus = 'VALID';
      continue;
    }
    return validStatus;
  }
  return validStatus;
}

console.log(validateTitle('Title!'));
console.log(validateTitle('s'));
console.log(validateTitle('12title'));
