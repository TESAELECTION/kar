
// Importing prompt-sync for taking input from the user
const prompt = require('prompt-sync')();

// Function to print multiplication table using a for loop
function forLoopTable(num) {
    console.log(`Multiplication Table of ${num} (using For loop):`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Function to print multiplication table using a while loop
function whileLoopTable(num) {
    console.log(`\nMultiplication Table of ${num} (using While loop):`);
    let i = 1;
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}

// Function to print multiplication table using a do-while loop
function doWhileLoopTable(num) {
    console.log(`\nMultiplication Table of ${num} (using Do-While loop):`);
    let i = 1;
    do {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    } while (i <= 10);
}

// Prompt user for a number
let number = prompt("Enter a number to print its multiplication table: ");

// Validate input to ensure it's a number
if (!isNaN(number) && number.trim() !== "") {
    number = parseInt(number);
    forLoopTable(number);
    whileLoopTable(number);
    doWhileLoopTable(number);
} else {
    console.log("Please enter a valid number.");
}
