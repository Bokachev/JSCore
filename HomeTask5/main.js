/*function testThrow(exception) {
    try {
        throw exception;
    } catch (err) {
        console.log('Caught: ' + error.name);
    }
}


testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));*/



/*function calcRectangleArea(width, height) {
    try {
        if (Number.isFinite(width) && Number.isFinite(height)) {
            console.log(width * width);
        } else if (!Number.isFinite(width)) {
            throw new Error('value width is not number');
        } else 
        		throw new Error('value height is not number');

    } catch (error) {
        console.log(error);
    }
}

try {
    calcRectangleArea(5,'5');
} catch (error) {
    console.log(error);
}*/

//Task 4 v.1 ******************************************************

/*class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(num) {
    try {
        if (num >= 1 && num <= 12) {
            let date = new Date();
            date.setMonth(num - 1);
            //return date.toUTCString().substr(8, 3);
            return date.toLocaleString("en-US", { month: 'long' });
        } else {
            throw new MonthException('Incorrect month number')
        }

    } catch (e) {

        return e.name + " " + e.message;

    }
}
console.log(showMonthName(5));
console.log(showMonthName(14));
*/
//Task 4 v.2 ******************************************************

/*class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(num) {
    if (num >= 1 && num <= 12) {
        let date = new Date();
        date.setMonth(num - 1);
        //return date.toUTCString().substr(8, 3);
        return date.toLocaleString("en-US", { month: 'long' });
    } else {
        throw new MonthException('Incorrect month number')
    }
}


try {
		console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (e) {
    console.log(e.name + " " + e.message);
}*/

//Task 3 ******************************************************

function checkAge() {
    let age = prompt('How old are you?');
    try {
        if (age === null) {
            return;
        } else if (!isFinite(age)) {
            throw new Error('The field is not numeral.');
        } else if (age === '') {
            throw new Error('The field is empty! Please enter your age.');
        } else if (age < 18) {
            throw new Error('You are too young. You do not have acces to this page.');
        } else 
        		window.open('http://example.com');
    } catch (error) {
        confirm(error);
    }
}


checkAge();
