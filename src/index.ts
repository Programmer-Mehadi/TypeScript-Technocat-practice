// problem 1

let userInfo: [number, string, string, boolean, string] = [
  101,
  "emma",
  "john",
  true,
  "2023",
];
console.log(userInfo);

// problem 2

type ArrayFunctionType = (array1: number[], array2: number[]) => number[];

const findMatchToTwoArray: ArrayFunctionType = (array1, array2) => {
  let matchArray: number[] = [];
  for (let i = 0; i < array1.length; i++) {
    for (let index = 0; index < array2.length; index++) {
      const element = array2[index];
      if (element === array1[i] && matchArray.indexOf(element) < 0) {
        matchArray.push(element);
      }
    }
  }
  return matchArray;
};

const result = findMatchToTwoArray([1, 2, 3, 4, 5], [2, 4, 6, 8]);
console.log(result);

// problem 3

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const array: Product[] = [
  {
    id: 1,
    name: "name1",
    price: 100,
    category: "A",
  },
  {
    id: 2,
    name: "name2",
    price: 200,
    category: "B",
  },
  {
    id: 3,
    name: "name3",
    price: 300,
    category: "C",
  },
];

function identityProduct<T, U, V>(array: T, criterion: U, value: V): T {
  return array;
}

console.log(identityProduct(array, "", ""));

// Problem 4

type GenericTupleType<T> = {
  product: T;
};

type AliasType = {};

const pArray: [object[]] = [[{}]];

// problem 5

type arrayType = number[];

function evenSum(array: arrayType): number {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 == 0) {
      sum += element;
    }
  }
  return sum;
}

const numberArray: arrayType = [10, 11, 14, 34, 21, 57];
console.log(evenSum(numberArray));
// problem 6

interface Person {
  name: string;
  age: number;
  email: string;
}

const personArray: Person[] = [
  { name: "Mehadi", age: 23, email: "m@gmail.com" },
  { name: "Mehadi2", age: 24, email: "m2@gmail.com" },
  { name: "Mehadi3", age: 25, email: "m3@gmail.com" },
];

const findPerson = (array: Person[], pEmail: string): Person | null => {
  let person = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.email === pEmail) {
      return element;
    }
  }
  return null;
};

console.log(findPerson(personArray, "m3@gmail.com"));
console.log(findPerson(personArray, "m5@gmail.com"));
// problem 7

type numberArrayType7 = number[];

const numberArray7: numberArrayType7 = [34, 54, 27, 83, 45];

const findMinMax = (...numArray: number[]) => {
  const minValue = Math.max(...numArray);
  const maxValue = Math.min(...numArray);
  console.log("Min Value: ", minValue);
  console.log("Max Value: ", maxValue);
};

findMinMax(...numberArray7);
