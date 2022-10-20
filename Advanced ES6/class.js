class Instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    //method//
    startSupportSession(time) {
        console.log(`please create support session at ${time}`)
    }
    //method//
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }

}
const aamir = new Instructor('goru', 'Dhanmondi');
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz(60);

const johir = new Instructor('johirul', 'Mymensingh');
console.log(johir);