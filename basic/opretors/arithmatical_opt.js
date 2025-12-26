/*
Arithmatical Operators in JavaScript
1. Addition (+): Adds two numbers.
2. Subtraction (-): Subtracts the second number from the first.
3. Multiplication (*): Multiplies two numbers.
4. Division (/): Divides the first number by the second.
5. Modulus (%): Returns the remainder of the division of two numbers.
6. power (**): Raises the first number to the power of the second.

*/

let a = 10 ;
let b = 3 ;

console.log("Addition:", a + b);           // 13
console.log("Subtraction:", a - b);        // 7
console.log("Multiplication:", a * b);     // 30
console.log("Division:", a / b);           // 3.3333
console.log("Modulus:", a % b);            // 1
console.log("Power:", a ** b);

// arithmatic with strings

console.log("String and Number Addition:"); // "105"
let str1 = "10";
str1 = String(str1);
let str2 = "3";
console.log("String Addition:", str1 + str2); // "103"
console.log("String Subtraction:", str1 - str2); // 7

// 13

console.log("String Multiplication:", str1 * str2); // 30
console.log("String Division:", str1 / str2);


// basic rules of arithmatic operations

console.log(5 + 10 * 2); 
console.log((5 + 10) * 2); 
console.log(20 / 5 + 3 * 2); 
console.log(20 / (5 + 3) * 2);  