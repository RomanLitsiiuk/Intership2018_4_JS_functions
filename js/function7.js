'use strict';

function validatePerson(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input data is invalid. Please, enter valid array');
  }
  for (let i = 0; i < arr.length; i++) {
    if (!isFinite(arr[i]) || typeof arr[i] !== 'number') {
      throw new TypeError('Input data is invalid. Please, enter valid array');
    }
    if (Math.round(arr[i]) !== arr[i]) {
      throw new TypeError('There isn\'t coins in cashRegister. Please, give 25, 50, or 100$');
    }
  }
}

function firstClient(cash, price) {
  return cash === price;
}

function giveChange(change, cashRegister) {
  let remainder = change;
  const moneyRating = Object.keys(cashRegister).sort((a, b) => b - a);
  console.log('moneyRating' + moneyRating);
  for (let i = 0; i < moneyRating.length; i++) {
    while (cashRegister[moneyRating[i]] > 0 && remainder > 0 &&
      remainder / moneyRating[i] >= 1) {
      remainder = remainder - moneyRating[i];
      --cashRegister[moneyRating[i]];
    }
  }
  return remainder === 0;
}

function takeMoney(cash, cashRegister) {
  for (const key in cashRegister) {
    if (+key === cash) {
      ++cashRegister[+key];
    }
  }
}

function tickets(person) {
  validatePerson(person);
  const bank = {
    25: 0,
    50: 0,
    100: 0
  };
  const ticketPrice = 25;
  let changeAbility = true;
  if (firstClient(person[0], ticketPrice)) {
    ++bank[person[0]];
  } else {
    changeAbility = false;
    return changeAbility ? 'YES' : 'NO';
  }
  for (let i = 1; i < person.length; i++) {
    const change = person[i] - ticketPrice;
    changeAbility = giveChange(change, bank);
    takeMoney(person[i], bank);
  }
  return changeAbility ? 'YES' : 'NO';
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 25, 100, 25]));
console.log(tickets([25, 50, 100]));
