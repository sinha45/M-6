const numbers = [23, 34, 54, 59, 46, 39, 94, 84];

const findTwo = numbers.find(number => number % 2 === 0);
console.log(findTwo);

const products = [

    { id: 01, name: 'iphone', price: 30000 },
    { id: 02, name: 'samsung', price: 40000 },
    { id: 03, name: 'huawei', price: 50000 }
]

const expensiveThing = products.find(product => product.price > 45000)
console.log(expensiveThing);