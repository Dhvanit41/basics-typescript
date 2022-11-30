type arr = Array<number>;
type arr1 = Array<string>;
// where can we use generics

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const last1 = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 4]);
const sl = last<string>(['a', 'b']);

const makeArray = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};

console.log(makeArray(5, 4));
console.log(makeArray('sd', 'g'));

const last12 = <T>(arr: T[]): T[] => {
  return arr;
};

console.log(last12([2, 3]));
console.log(last12<string | number>(['G', 'G', 1]));
/// makesure that genrics have firstname and last name atlest
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
): T => {
  return obj;
};

console.log(makeFullName({ firstName: 'gg', lastName: 'gg', age: 7 }));
