// ********************** Task 1 **********************
/*function upperCase(text) {
    var re = /^[A-Z]/;
    console.log(re.test(text));
    if (re.test(text))
        console.log(`String's starts with uppercase character`);
    else
        console.log(`String's not starts with uppercase character`);
}*/

// ********************** Task 2 **********************
/*
function chekEmeil(emeil) {
    return /^([a-z0-9]+\.)*[a-z0-9_]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil);
}*/

/*function chekEmeil(emeil) {
    return /\w+@{1}\w+\.\w+/.test(emeil);
}
console.log(chekEmeil('aasda-sa@mail.ru'));
*/

// ********************** Task 3 **********************
/*let reg = /d(b+)(d)/i;
let arr = reg.exec("cdbBdbsbz");
console.log(arr);

let result = 'cdbBdbsbz'.match(/d(b+)(d)/i);
console.log(result);*/

// ********************** Task 4 **********************
/*function replacer(match, p1, p2, offset, string) {
  return [p2, p1].join(', ');
}
var newstr = 'Java Script'.replace(/(\w+)\s(\w+)/, replacer);
console.log(newstr);*/

/*var newstr = 'Java Script'.replace(/(\w+)\s(\w+)/, '$2, $1');
console.log(newstr);*/

// ********************** Task 5 **********************

/*function creditCard(num) {
    return /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/.test(num);
}

console.log(creditCard('8888-8888-8888-8888'));
console.log(creditCard('8888-8888-8888-aaaa'));
console.log(creditCard('8888-8888-8888-8888-8888'));*/


// ********************** Task 6 **********************

/*function checkEmail(emeil) {
    let result = /^([a-z0-9_]+)(\-{0,1})[a-z0-9_]*@[a-z0-9_]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil);
    ///^([a-z0-9]+\.)*[a-z0-9_]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil);
    if (result) {
        console.log('Email is correct!');
    } else
        console.log('Email is not correct!');


}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');*/


// ********************** Task 7 **********************

/*function checkLogin(login) {
    // console.log(`Перевірка логіну "${login}"`)
    let re = /^[a-z]+[a-z0-9]+$/
    if (login.length > 1 && login.length < 11) {
        console.log(re.test(login));
        for (let el of login.match(/\d/g)) {
            console.log(el);

        }
    }
    else console.log('Логін не відповідає по кількості символів')
}

checkLogin('ee11ret3');
checkLogin('ee1*1ret3');
checkLogin('ee1*1retasad3--');*/