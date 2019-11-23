//Task 1 *****************************************************

/*test.innerHTML = 'Last';
document.querySelector('div').innerHTML = 'Last';
document.body.firstElementChild.innerHTML = 'Last';
document.getElementById('test').innerHTML = 'Last';
document. getElementsByTagName('div')[0].innerHTML = 'Last';
document. querySelectorAll('div')[0].innerHTML = 'Last';
*/

//Task 2 *****************************************************

/*var imgElem = document.querySelector('img');
setTimeout(() => { imgElem.src = 'cat.jpg';
    confirm(imgElem.outerHTML); }, 1000);*/

/*setTimeout(() => {
    confirm(document.querySelector('img').outerHTML)
    document.querySelector('img').setAttribute('src', 'cat.jpg');
}, 1000);*/

setTimeout(() => {
    confirm(document.querySelector('img').outerHTML = `<img class="image" src="cat.jpg">`);
}, 1000)


//Task 3 *****************************************************

/*let elem = document.getElementById('text').querySelectorAll('p');
//for (let i = 0; i < elem.length; i++) {
//    console.log(`Selector text ${i}: ${elem[i].innerHTML}`);
//}

let count = 0;
for (let element of elem) {
    console.log(`Selector text ${count}: ${eslement.innerHTML}`);
    count++;
}*/


//Task 4 *****************************************************

/*let elem = document.getElementById('list').querySelectorAll('li');
let arr =[0, 4, 1, 3, 2];
for (let i of arr){
    confirm(elem[i].innerHTML);
}*/


/*var ulElements = document.getElementById('list').children;
confirm(ulElements[0].innerHTML);
confirm(ulElements[4].innerHTML);
confirm(ulElements[1].innerHTML);
confirm(ulElements[3].innerHTML);
confirm(ulElements[2].innerHTML);*/


//Task 5 *****************************************************

/*document.querySelector('h1').style.background = 'green';
document.querySelector('p').style.fontWeight = 'bold';
document.querySelector('p').nextElementSibling.style.color = 'red';
document.querySelector('p').nextElementSibling.nextElementSibling.style.textDecoration = 'underline ';
document.querySelector('div').lastElementChild.style.fontStyle = 'italic';

document.getElementById('myList').style.fontSize = '0px';
let elements = document.getElementById('myList').querySelectorAll('li');
for (let elem of elements) {
    elem.style.cssText = `display:inline-block; font-size: 14px;`;
}
document.querySelector('span').style.display = 'none';*/

//-----------------------------------

/*document.querySelector('h1').style.background = 'green';
myDiv.firstElementChild.style.fontWeight = 'bold';
myDiv.firstElementChild.nextElementSibling.style.color = 'red';
myDiv.lastElementChild.previousElementSibling.style.textDecoration = 'underline ';
myDiv.lastElementChild.style.fontStyle = 'italic';

document.getElementById('myList').style.fontSize = '0px';
let elements = document.getElementById('myList').querySelectorAll('li');
for (let elem of elements) {
    elem.style.cssText = `display:inline-block; font-size: 14px;`;
}
document.querySelector('span').hidden=true

//document.querySelector('span').style.display = 'none';

*/

// Task 6 v.1 *****************************************************

/*input1.value = prompt('First');
input2.value = prompt('Second');
setTimeout(function() {
    let firstInput = input1.value;
    input1.value = input2.value;
    input2.value = firstInput;
}, 1000);*/

// Task 6 v.2 *****************************************************

/* let firstInput = prompt('Enter value');
let secondInput = prompt('Enter value');

input1.setAttribute('value', firstInput);
input2.setAttribute('value', secondInput);
setTimeout(() => {
    input1.removeAttribute('value');
    input2.removeAttribute('value');

    input1.setAttribute('value', secondInput);
    input2.setAttribute('value', firstInput);
}, 1000);*/

// Task 6 v.3 *****************************************************

/*input1.setAttribute('value', prompt('Enter value'));
input2.setAttribute('value', prompt('Enter value'));

setTimeout(() => {
    let tmp = input1.getAttribute('value');
    input1.setAttribute('value', input2.getAttribute('value'));
    input2.setAttribute('value', tmp);
}, 1000);*/

// Task 7 v.1 *****************************************************

/*if (document.body.firstChild==null){
document.body.innerHTML +=`<main class="mainClass check item">  
                <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main>`
}*/


// Task 7 v.2 *****************************************************

/*document.body.insertAdjacentHTML("afterbegin",`<main class="mainClass check item">
<div id="myDiv">
<p>First paragraph</p>           
</div>
</main>`);*/


// Task 7 v.3 *****************************************************

/*let a = document.createElement('main');
a.setAttribute('class', 'mainClass check item');
let b = document.createElement('div');
b.setAttribute('id', 'myDiv');
let c = document.createElement('p');
c.innerHTML = 'First paragraph';
document.body.prepend(a);
document.querySelector('main').prepend(b);
document.querySelector('div').prepend(c);*/