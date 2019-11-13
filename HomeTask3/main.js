// Task 1

/*let arr = [2, 3, 4, 5];
let result = 1;
let lengthArr = arr.length;

for (let i = 0; i < lengthArr; i++) {
    result *= arr[i];
}

while (lengthArr > 0) {
   --lengthArr;
   result *= arr[lengthArr];    
}

console.log(result);*/

// Task 1 v.2
/*let arr = [, , ,];

function getProduct(n) {
    if (n < 0) {
        return 'Array is empty';
    }else if(n == 0) {
        return arr[0];
    }
    else {
        return arr[n] * getProduct(n - 1);
    }
}
let result = getProduct(arr.length - 1);
console.log(result);*/

/*
function checkArray(){
    можна вписати додаткові перевірки масиву на числа, символи і т.д.
}*/




//Task 2 

/*console.log(0/2);

for (let i=0; i<=15; i++){
    if (i%2!=0)
    console.log(`${i} is odd`);
else
    console.log(`${i} is even`);
}*/




//Task 3 v.1
/*let arr = [];

function randArray(k) {
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 501) + 1);
    }
}
randArray(5)
console.log(arr);*/

//Task 3 v.2
/*let arr = [];
function randArray(k, min, max) {
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * (max + 1) + min));
    }
}
randArray(5, 1, 500)
console.log(arr);*/




//Task 4 

/*function setInteger(str = '') {
    let num;
    do {
        if (num === null) break;
        num = prompt(`Enter integer ${str}`, 3);
    }
    while (!(Number.isInteger(Number(num)) && num > 0));
    return num;
}

function raiseToDegree(a, b) {
    if (b == 1) {
        return a;
    } else
        return a * raiseToDegree(a, b - 1);
}

let n = setInteger('Number'),
    d = setInteger('Degree');

if (n === null || d === null) {
    alert('Exit');
} else {
    console.log(raiseToDegree(n, d));
}*/




//Task 5
/*function lastElem(a, b) {
    let arr = [];
   
    if (b === undefined) {
        arr.push(a[a.length - 1]);
    } else if (b < 0 || b > a.length) {
        b = a.length;
    }
    for (let i = a.length - b; i < a.length; i++) {
        arr.push(a[i]);
    }
    return arr;
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));
console.log(lastElem([3, 4, 10, -5], -8));*/




//Task 6 v.1

/*let str = 'i love java script';

function LetterToUpperCase(str) {
    let arrStr = str.split(' ');
    
    for (let i = 0; i < arrStr.length; i++) {
        let arr = [];
        
        for (let j = 0; j < arrStr[i].length; j++) {
            if (j == 0) {
                arr.push(arrStr[i][j].toUpperCase());
            } else {
                arr.push(arrStr[i][j]);
            }
        }
        arrStr[i] = arr.join('');
    }
   
    return arrStr.join(' ');
}

console.log(LetterToUpperCase(str));*/


//Task 6 v.2

let str = 'i love java script';
let inputArrString = str.split(' ');
let outputArrString = inputArrString.map(function(item) {
    let arrLetters = item.split('');
    let upperLetter = arrLetters[0].toUpperCase();
    arrLetters.shift();
    arrLetters.unshift(upperLetter);
    return arrLetters.join('');
});
str = outputArrString.join(' ');
console.log(str);
 