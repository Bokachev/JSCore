/*
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    group:"JS406",
    name:"add"
};

function showProps(obj) {
    let arrVal = [];
    let arrKey = [];

    for (let key in obj) {
        arrKey.push(key);
        arrVal.push(obj[key]);
    }
console.log(arrVal);
console.log(arrKey);
}

showProps(mentor);*/

//Task 3
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    set setExp(value) {
        if (value < 0) throw new Error("Negative value");
        this.#experience = value;
    }

    get showExp() {
        return this.#experience;
    }

    showSalary() {
        let salaryWorker = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salaryWorker}`);
    }

    showSalaryWithExperience() {
        let salaryWorker = (this.dayRate * this.workingDays * this.#experience).toFixed();
        console.log(`${this.fullName} salary: ${salaryWorker}`);
    }

    getSalaryValue() {
        return (this.dayRate * this.workingDays * this.#experience).toFixed();
    }

    static compare(workerA, workerB) {
                if (workerA.#experience === workerB.#experience) {
                    return workerA.getSalaryValue() - workerB.getSalaryValue();
                }
        return workerA.#experience - workerB.#experience;
    }

}

let worker1 = new Worker("John Johnson", 20, 23);//1.5 690
let worker2 = new Worker("Boris John", 19, 20);//1.5 570
let worker3 = new Worker("Tailor Mars", 18, 17);//1.8 551
let worker4 = new Worker("Margo Robi", 25, 15);//2 750

console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
worker2.setExp = 1.5;
worker3.setExp = 1.8;
worker4.setExp = 2;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();


let arrObj = [worker1, worker2, worker3, worker4];

console.log('');
console.log('arrObj.sort before sorting');
for (const element of arrObj) {
    console.log(`${element.fullName}: ${element.getSalaryValue()}`);
}

arrObj.sort(Worker.compare);

console.log('');
console.log('Result arrObj.sort and Worker.compare');

for (const element of arrObj) {
    console.log(`${element.fullName}: ${element.getSalaryValue()}`);
}


//Task 4
/*class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}

class Student extends Person {

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName = '') {
        this.midleName = midleName;
        return this.name + " " + this.surname + " " + this.midleName;
    }

    showCourse() {
        if (this.getStudentCourse() === undefined) throw new Error("getStudentCours undefined asdasd");
        return this.getStudentCourse();
    }

    getStudentCourse() {

        let dateToday = new Date();
        /!*
        let year = dateToday.getFullYear();
        let month = dateToday.getMonth() + 4;
        let day = dateToday.getDate();
        *!/
        let dateTodayPlusMonths = new Date(dateToday.getFullYear(), dateToday.getMonth() + 4, dateToday.getDate());
        let course = dateTodayPlusMonths.getFullYear() - this.year;

        if (!(course < 0 || course > 6)) {
            if (course == 0) {
                return ++course;
            }
            return course;
        }
        return;
    }
}

var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4*/


// Task 5 
/*class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(side, altitude) {
        super();
        this.side = side;
        this.altitude = altitude;
    }

    getArea() {
        return (this.side * this.altitude) / 2;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }
}

class Circle extends GeometricFigure {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];*/

/*function handleFigures(arr) {
    let sumSquare = 0;
    for (const element of arr) {

        if (element instanceof GeometricFigure) {
            sumSquare += element.getArea();
            console.log(`Geometric figure: ${element.toString()} - area: ${element.getArea()}`);
        }
    }
    console.log(sumSquare);
}

 handleFigures(figures);*/


/*function handleFigures(arr) {
    var result = arr.reduce(function (accumulator, currentValue) {

        if (currentValue instanceof GeometricFigure) {
            console.log(`Geometric figure: ${currentValue.toString()} - area: ${currentValue.getArea()}`);
            return accumulator + currentValue.getArea();
        }
    },0);
  console.log(result);
}

handleFigures(figures);*/








