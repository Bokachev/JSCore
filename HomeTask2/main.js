//  Task 5

let date = new Date();
let hour = date.getHours();


(hour > 5 && hour <= 11) ? alert('Доброго ранку'):
    (hour > 11 && hour <= 17) ? alert('Доброго дня') :
    (hour > 17 && hour <= 23) ? alert('Доброго вечора') : alert('Доброї ночі');

/*if (hour > 5 && hour <= 11) {
    alert('Доброго ранку');
} else if (hour > 11 && hour <= 17) {
    alert('Доброго дня');
} else if (hour > 17 && hour <= 23) {
    alert('Доброго вечора');
} else {
    alert('Доброї ночі');
};
*/

// Task 4


/*let sideA = Number(prompt('Введіть розмір сторони А', '1'));
let sideB = Number(prompt('Введіть розмір сторони B', '2'));
let sideC = Number(prompt('Введіть розмір сторони C', '3'));


if ((sideA <= 0) || (sideB <= 0) || (sideC <= 0)) {
    console.log('Incorrect data');
} else if ((sideA < sideB + sideC) && (sideB < sideA + sideC) && (sideC < sideA + sideB)) {
    let p = (sideA + sideB + sideC) / 2;
    let space = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    // let space = (p * (p - sideA) * (p - sideB) * (p - sideC))**(1/2);
    console.log(space.toFixed(3));

    (((Math.pow(sideA,2) + Math.pow(sideB,2)) == Math.pow(sideC,2)) ||
        ((Math.pow(sideB,2) + Math.pow(sideC,2)) == Math.pow(sideA,2)) ||
        ((Math.pow(sideC,2) + Math.pow(sideA,2)) == Math.pow(sideB,2))) ? console.log('Прямокутний'): console.log('Usual');

} else {
    console.log('Трикутник з такими сторонами неможливий');
};*/

// Task 3 

/*let isAdult = confirm('Are you adult?') ? true : false;
isAdult == true ? console.log('Ви досягли повнолітнього віку') : console.log('Ви ще надто молоді');*/

//Task 2 

/*let num = prompt('Введіть число', '');

(num > 0) ? ((num % 2 == 0) ? console.log('Парне додатне') : console.log('не парне')) : console.log('не додатне');
//(num > 0 && num % 2 == 0) ? console.log('Парне додатне') : false ;
(num % 7 == 0) ? console.log('кратне числу 7'): console.log('не кратне 7');*/

//Task 1

/*
var x = 1;
var y = 2;

var res1 = x + "" + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = !!x + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = !!(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = (x + " " + y) * y;
console.log(res4); // NaN
console.log(typeof res4); // "number"
*/


//Task 1 rus
/*let sideSquare = prompt('Розмір сторони квадрату =', 3);
let spaceSquare = sideSquare ** 2;
console.log(spaceSquare);*/

//Task 2 rus
/*let num = prompt('Введіть двозначне число =', 33);
console.log(Math.trunc(num/10));
console.log(parseInt(num/10));
console.log(num%10);*/

//Task 3 rus
/*let a =3, b = 2; 
console.log (a > 2 && b <= 3);
*/

//Task 4 rus
/*let a = 1, b = 3, c = 5;
console.log(b>a && b<c);
*/

//Task 5 rus
/*let a = 107;
console.log((a > 99 && a < 1000) && (a % 2 != 0));*/