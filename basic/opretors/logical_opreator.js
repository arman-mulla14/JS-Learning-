//logical operators are used to combine two or more conditions/expressions

/*

AND opreator (&&): returns true if both operands are true.
     true && true = true
     true && false = false
     false && true = false
     false && false = false

     */

     console.log("---------------------------------------------------");
console.log("Examples of AND operator:");

console.log(true && true);  // true
console.log(true && false);
console.log(false && true);
console.log(false && false);


let email = true;
let passworda = true;
if(email && passworda){
console.log("Login Successful");
}else
{
console.log("Login Failed");
}

//here both condtions are true that's why its logged in !!!!!



    /*

OR operator (||): returns true if at least one operand is true.

true || true = true
true || false = true
false || true = true
false || false = false



*/

console.log("---------------------------------------------------");
console.log("Examples of OR operator:");

console.log(true|| true); 
console.log(true || false);
console.log(false || true);
console.log(false || false);

let admin = true ; 
let user = false ;
if(admin || user){
console.log("Login Successful");
}else
{
console.log("Login Failed");
}



/*
NOT operator (!): returns true if the operand is false and vice versa.
!true = false 
!false = true

*/
console.log("---------------------------------------------------");
console.log("Examples of NOT operator:");


console.log(!true);
console.log(!false); 


let islogin = true; 

if(!islogin){
    console.log("Login is please "); 

}else{
    console.log("logged in "); 
}

