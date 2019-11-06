// Task 2
/*let surname = "Bokachov";
console.log(surname);*/

// Task 3 
/*let first, second;
first = "ECMAScript";
second = 2015;
alert(first + second);

second = first;*/
/*alert(first + " " + second);*/

// Task 3 
// let isAdult = confirm("Do you adult?");

//Task 5 
/*let myName = "Viktor",
    mySurname = "Bokachov",
    myGroup = "JS.Core",
    myAge = 35,
    isMaried = true;
console.log(typeof(myAge) + " " + typeof(isMaried) + " " + typeof(myName) + " " + typeof(mySurname) + " " + typeof(myGroup));
console.log(myAge + " " + isMaried + " " + myName + " " + mySurname + " " + myGroup);

let a = null,
    b;
console.log(typeof(a) + " " + typeof(b));*/

//Task 6
/*let userLogin = prompt("Your login?", "User"),
    userEmail = prompt("Your login?", "user@gmail.com"),
    userPas = prompt("Your pas?", "password");

alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPas}`);*/

//Task 7
let secInHour = 60 * 60;
let secInDay = secInHour * 24;
let secInMonth = prompt('How many days in month?', 30) * secInDay;

console.log(secInHour + " " + secInDay + " " + secInMonth);