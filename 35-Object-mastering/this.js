const goruAli = {
    name: 'Mr goru',
    money: 5000,
    study: 'everything',
    subject: ['calculas', 'algebra', 'geometry'],
    exam: function () {
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    examArrow: () => {
        console.log(this);
    }
};
goruAli.exam();