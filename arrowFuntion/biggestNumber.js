//spread operator;

const numbers = [12, 34, 45, 456];
const largest = Math.max(...numbers);
//console.log(largest);

const numbers2 = [...numbers];//also you can add number to this[123, ...numbers, 455];
numbers.push(133);
numbers2.push(934);
console.log(numbers);
console.log(numbers2);






