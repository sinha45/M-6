// const array1 = [3, 4, 5, 6].map(x => x * 2);
// console.log(array1);





const numbers = [34, 45, 47, 43];

// function getDouble() {
//     const output = [];
//     for (const number of numbers) {
//         const doubled = number * 2;
//         output.push(doubled);
//     }
//     return output;
// }
// const result = getDouble(numbers);
// console.log(result);



const friends = ['Mr. goru', 'johirul', 'Omi', 'uilla'];
const firstLetters = friends.map(x => x[0]);
const lengthMap = friends.map(x => x.length);
console.log(lengthMap);
console.log(firstLetters);