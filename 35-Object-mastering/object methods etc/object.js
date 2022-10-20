// /Object literal syntex


const firstPerson = {
    name: "sk",
    age: 45
};

// ES6 classes
// class

class person {
    name = 'sks';
    address = 'dhanmondi';
    constructor(age) {
        this.age = age;
    }

}
const person1 = new person(45);
// console.log(person1);



// methods


const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }

};

console.log(person2);
person2.fullName();

