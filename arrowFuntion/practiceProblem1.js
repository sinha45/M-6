// const multiplier = (a, b, c) => a * b * c;
// console.log(multiplier(2, 4, 6));


// const templateString = `I am a web developer. i love to code. I love to eat biriyani`;

// console.log(templateString);


// const add = (a, b = 5) => a + b;
// const result = add(3);
// console.log(result);



const array1 = [34, 456, 645, 44];
const array2 = [45, 458, 63, 96];
const array3 = [...array1, ...array2];
console.log(array3);
const maxOfarray3 = Math.max(...array3);
console.log(maxOfarray3);