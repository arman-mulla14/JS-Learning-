// camparsion operators is used to compare two values and return a boolean result

let age = 20 ;

console.log("is age is " + age == 20);


// ==  : equal to operator
console.log("Equal to operator:", age == 20); // true

// === : strict equal to operator
console.log("Strict Equal to operator:", age === 20); // true

// != : not eaqual to oprerator
console.log("Age is not equal to 25 ", age != 25);

// !== : strict not equal to operator
console.log("Age is strict not equal to 25 ", age !== 25);

// > : greater than  and less than operator

console.log("age is 18+" , age > 18); 

//< : less than operator 
console.log("age is less than 25", age < 25);


// >= greater than equal opreator
console.log("age is greater than equal ", age >= 20);


// <= less than equal operator
console.log("age is less than equal ", age <= 25);

//
console.log("---------------------------------------------------");
console.log("Examples of less than and greater than operators:"); 

console.log(5>3);
console.log(5<3);
console.log(5>=5);
console.log(5<=3);
console.log(5==5);

console.log("---------------------------------------------------");
//example 









//problems facing to it loose equality with == operator
console.log("Loose Equality Check:", 0 == false);

console.log( "Check It : "+ "5" == 5); 

console.log(false == true);
console.log("" == 0);
console.log(true == 1);

console.log(null == undefined);


//solution use strict equality operator ===
console.log(":", 0 === false);
console.log(":", false === true);
console.log(":", "" === 0);
console.log(":", true === 1);
console.log(": ", null === undefined);

// use type conversion to avoid loose equality issues
console.log("5"!= 5);
console.log("5"!== 5);
