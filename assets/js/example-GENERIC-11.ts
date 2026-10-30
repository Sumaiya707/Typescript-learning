const fruits: string[] = ["apple", "banana", "mango", "date"];
const numbers: number[] = [32, 4, 2, 1, 35, 12, 35, 64];

function getFirstItem<T>(items: T[]): T {
  return items[0];
}
const firstfruit = getFirstItem(fruits);
const firstNumber = getFirstItem(numbers);

console.log(firstfruit.toUpperCase());
console.log(firstNumber.toFixed());
