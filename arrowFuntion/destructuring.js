// const fish = {
//     color: 'silver',
//     name1: 'Hilsha',
//     price: 4999
// }

// const { name1 } = fish;
// console.log(name1);


// const mrGoru = {
//     name: 'johirul',
//     age: 23,
//     height: 5.5,
//     address: 'Rosulpur'
// }

// const { height } = mrGoru;
// console.log(height);





// const jubayer = {
//     name: 'likhon',
//     address: 'cumilla',
//     behaviour: 'playboy',
//     height: 5.8,
//     age: 21
// }
// console.log(jubayer);
// const { behaviour } = jubayer;
// console.log(behaviour);
// const { age } = jubayer;
// console.log(age);
// const { address } = jubayer;
// console.log(address);


// Array destructuring


// const [first, second] = [45, 47, 32, 56];
// console.log(second);

// const numbers = [39, 45, 20, 450];
// const [thirtyNine, fourtyFive] = numbers;
// console.log(fourtyFive);


// const room = ['sk', 'johir', 'jubayer'];
// const [boss, goru, junior] = room;
// console.log(junior, goru);


// function babaChacha() {
//     return ['alim', 'halim'];
// }
// const [baba, chacha] = babaChacha();
// console.log(chacha, baba);


// const baapChacha = () => {
//     return ['alim', 'halim'];
// };
// const [baba, chacha] = baapChacha();
// console.log(chacha, baba);


// var arr = [1, 2, 3];
// var js = arr.reverse();
// console.log(js);


var s = "9123456 or 80000?";
var pattern = /\d{4}/;
var output = s.match(pattern);
console.log(output);