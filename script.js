// variable declaration

const fullName = "Amugumbi Davis";
const age = 27;
const country = "Kenya";

console.log( 'My name is ' + fullName + ', I am ' + age + ' and I live in ' + country + '.');

// string methods
const s ='JAVASCRIPT is amaizingly fun but challenging at times';
console.log(s.toLowerCase());
console.log(s.toUpperCase());

// arithmetic operations
console.log( 3+4);
console.log(12/3);
console.log(5*7);
console.log(10%3);

// conditional statements

let IQ= 97;

if (IQ > 120) {
    console.log("You are a genius");
}
else {
    console.log("You are not a genius");
}


// returnng values from functions
function multiply(numberOne, numberTwo, numberThree, numberFour) {
    const result = numberOne * numberTwo * numberThree * numberFour;
    return result;
}
console.log (multiply(20,3.5,40,60));
console.log (multiply(10,3,5,2));
console.log (multiply(5,2,4,3));


// retunrning by sum
function add(numberOne, numberTwo, numberThree, numberFour) {
    const result = numberOne + numberTwo + numberThree + numberFour;
    return result;
}
console.log (add(20,32,40,60));

// looping using foreach
let fruits = ["Peach", "Avocado", "Mango", "Tangerine"];
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
}); 

// looping using while
let count = 9;
while (count > 0) {
    console.log("While Loop Count: " + count);
    count--;
}

// function with multiple parameters
function sayHello(name,age,country) {
    return 'Hello ' + name + ', you are ' + age + '! You still live in ' + country + '?';
}
console.log(sayHello('Amugumbi Davis',27,'Kenya'));

// changing text using DOM
function changeText() {
    let title = document.getElementById("Title");
    title.textContent = "JavaScript is amaizing and fun but challenging at times";
    title.style.color = "darkgreen";
    let newDiv = document.createElement("div");
    newDiv.textContent = "Congratulations, you've Made it!";
    document.body.appendChild(newDiv);
}

