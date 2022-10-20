const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const forKeys = Object.keys(bottle);
console.log(forKeys);
const forValues = Object.values(bottle);
console.log(forValues);

const pair = Object.entries(bottle);
console.log(pair);


// const twoDimensional = [
//     ['color', 'yellow'], ['price', 50], ['isCleaned', ture], ['capacity', 1]
// ];
// Object.seal(bottle);//if you seal, things cant be add or remove but can be modify.
Object.freeze(bottle);//cant add , cant remove , cant modify.

delete bottle.isCleaned;
bottle.price = 500;
bottle.height = 5;//cant add
console.log(bottle);
