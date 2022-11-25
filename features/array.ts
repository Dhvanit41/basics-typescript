const carmakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['ford'], ['gg']];

/// help with infrence when extracting values

const car = carmakers[1];
const mycar = carsByMake.pop();

/// prevent incompitible values

// carmakers.push(1);

// flexible types:

const importantDates: (string | Date)[] = [new Date(), 'gg'];
