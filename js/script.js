// this is a commend
// console.log('Hello World');
// console.log('Hello JS');

let idNumber = 123;
let firstName = 'Kareem';
let lastName = 'Ali';
let isSubmit = true;

var n =3;

const pi = 3.141592;


let orderNumber = 21;
let orderId =22;


// variable name should not be a keyword of JS
// variable name should not start with a number
// variable name should be meaningful 

idNumber = true;

// console.log(p);
console.log(firstName);
console.log(isSubmit);


// let cbtn = documentg.getElementById('btn');






let htxt = document.getElementById('hText');
function changeText() {
    htxt.innerText = Date();
    console.log('Button Clicked');

}

// Day 2

z = multi(3,49);

console.log(z);

function multi(x,y) {
    let c = x*y;
    return c;
}

greeting()

let x = 21;

greeting(x);

function greeting(a) {
    // const time = new Date().getHours();

    if (a<10) {
        console.log('a is under 0 to 10')
    } 
    else if (a<20) {
        console.log('a is under 10 to 20')
    }
    else{
        console.log('Greter then 20')
    }
}

