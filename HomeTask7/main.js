//Task 1 *****************************************************

/*  let arr = [
        function openWin() {
            myWindow = window.open("", "", "width=300, height=300");
        },

        function resizeWin() {
            myWindow.resizeTo(500, 500);
        },

        function changePosition() {
            myWindow.moveTo(200, 200);
        },

        function closeWindow() {
            myWindow.close();
        }
    ]

    let timer = 0;
    for (let func of arr) {
        setTimeout(func, timer += 2000);
    }
*/

//Task 2 *****************************************************

/*    changeStyle.onclick = changeCSS
    function changeCSS(){
      // document.head.insertAdjacentHTML("afterbegin",`<style>#text {color: red;font-size: 20px;font-family: Comic Sans MS}</style>`);
      document.head.insertAdjacentHTML("afterbegin",`<link rel="stylesheet" href="styles.css">`);
    }

*/

//Task 3 *****************************************************
/*
function oneClickMouse() {
    document.body.style.backgroundColor = '#cce6ff';
}

function doubleClickMouse() {
    document.body.style.backgroundColor = '#ffe6f2';
}

function mouseHold() {
    document.body.style.backgroundColor = '#86592d';
}

function hrefOver() {
    document.body.style.backgroundColor = '#ffff99';
}

function defaultColor() {
    document.body.style.backgroundColor = '#ffffff';
}

oneClickMe.addEventListener("click", oneClickMouse);
doubleClickMe.addEventListener("dblclick", doubleClickMouse);
holdMe.addEventListener("mousedown", mouseHold);
holdMe.addEventListener("mouseup", defaultColor);
hoverOverMe.addEventListener("mouseover", hrefOver);
hoverOverMe.addEventListener("mouseout", defaultColor);*/


//Task 4 *****************************************************

/*function deleteElement() {

    for (let opt of document.querySelectorAll('option')) {
        if (opt.value == document.querySelector('#mySelect').value) {
            opt.remove();
            break;
        }
    }
}

delElement.addEventListener("click", deleteElement);*/


//Task 5 *****************************************************

/*function clickMouse() {
    result.insertAdjacentHTML('beforeend', '<div>I was pressed!</div>')
}

function onMe() {
    result.insertAdjacentHTML('beforeend', '<div>Mouse is not on me!</div>')
}

function notOnMe() {
    result.insertAdjacentHTML('beforeend', '<div>Mouse on me!</div>')
}

document.getElementById('live').addEventListener("click", clickMouse);
document.getElementById('live').addEventListener("mouseover", onMe);
document.getElementById('live').addEventListener("mouseout", notOnMe);*/


//Task 6 *****************************************************

/*function changeWindow(event) {
    document.body.innerHTML = `width: ${event.target.innerWidth} height: ${event.target.innerHeight} `;
}

window.addEventListener("resize", changeWindow);*/

//Task 7 *****************************************************
let country = {
    'Czech Republic': ['Prague', 'Brno', 'Ostrava', 'Liberec'],
    'USA': ['Los Angeles', 'New York', 'Washington', 'Springfield', 'Chicago'],
    'Ukraine': ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa', 'Dnipro'],
};


(function(country) {
    let newOption = '';
    let valueCount = 0;
    for (let obj in country) {
        newOption += `<option value="${obj}">${obj}</option>`;
    }
    idCountry.insertAdjacentHTML('beforeend', newOption)
}(country))



function createSelectCity() {

    if (document.getElementById('idCity') != null) {
        idCity.remove();
    }
    result.innerHTML = '';
    for (let obj in country) {
        if (obj == document.querySelector('#idCountry').value) {
            let newSelect = `<select id="idCity" style="width: 150px">`;
            for (let city of country[obj]) {
                newSelect += `<option value="${city}">${city}</option>`;
            }
            newSelect += `</select>`;
            idCountry.insertAdjacentHTML('afterend', newSelect);
            idCountry.insertAdjacentText('afterend', ' ');
            idCity.onclick = idCityListener;
            result.innerHTML = idCountry.value + ', ' + idCity.value;
            

        }
    }
};

function idCityListener(){
    result.innerHTML = idCountry.value + ', ' + idCity.value;
}

idCountry.addEventListener("click", createSelectCity);
