const student = {
    name: 'goru',
    money: 5000,
    study: 'math',
    subject: ['calculas', 'algebra', 'geometry'],

    exam: function () {
        return this.name + ' is participating in an exam';
    },

    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }

};
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(900, 50);
console.log(remaining);



