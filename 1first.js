console.log("hello world");//console.log() used to print anything in the js                                     PRINT IN JS
//node D:\javascript_initials\js_essentials\first.js (this is the syntax to use when there is a code folder inside file inside a workspace)//
//PS D:\javascript_initials> node js_essentials/first.js {here this is the command is used in my terminal}


console.log("--------------------------------------------------------1");                                      //MULTI PRINT IN JS
var1="abs"
var2="124"
var3="?#@"
console.table([var1,var2,var3])  ;
//here if we want to print multiple variable then we can use console.table([]) for it and
// putting all the variable name inside of it
console.log("---------------------------------------------------------2");                                     //Template Literals and String Interpolation
/*Template Literals (`...`):
Template literals are a way to include variables or expressions directly within a string.
They are enclosed by backticks (`) instead of the usual quotation marks (' or ").
Template literals are the broader concept — they allow multi-line strings, embedded expressions, and even tagged templates.

String Interpolation with ${...}:
Inside a template literal, ${...} is used for string interpolation, allowing you to insert variables or expressions directly into the string.
JavaScript will replace ${...} with the value of the variable or expression inside it.*/

let middle_name="kumar";
let last_name="singh";
let vv=`hello ${middle_name}`

console.log(`Nikesh ${middle_name} ${last_name}\n${vv}`);
//here i used backtick ` inside the braket and used variable inside ${..} and \n i used to print the vv varible in next line
//vv is also inside the ${..}
console.log(`Hello ${middle_name.toUpperCase()}`);
//i can also add any function with it like above code line 

let second="there";
let first=`hello ${second}`;
console.log(first);
console.log(`${first} its a nice day`)


console.log("---------------------------------------------------------3");                                     //; IN JS 
a = 5; b = 6; c = a + b;
console.log(a,b,c);
//here multiple statement is accepted in js when separated by semicolon 
// this is a single line comment shortcut=ctrl+/
/* this 
is a multi line comment*/


console.log("---------------------------------------------------------4");                                    // ASSIGNMENT OPERATOR IN JS
/*JavaScript provides three primary equality operators to compare values:

Assignment Operator (=):                  The = operator assign value to variable there is no type Coercion
Assigns a value to a variable.*/
let xy = 10;
console.log(xy);

/*Equality Operator (==):                 The == operator performs loose equality, converting types if necessary 
Performs loose equality comparison.
Type coercion: Converts operands to a common type before comparison.*/
console.log(5 == "5"); // Output: true (coerces "5" to number 5)
console.log(0 == false); // Output: true (coerces false to number 0)

/*Strict Equality Operator (===):         The === operator performs strict equality, checking both value and type

Performs strict equality comparison.
No type coercion: Compares both value and type.*/
console.log(5 === "5"); // Output: false (different types)
console.log(0 === false); // Output: false (different types)


console.log("---------------------------------------------------------5");                                    // REDECLARE AND REASSIGNED
//we can redeclare and reassigned var but we can only reassigned the let 
var varr=2;
var varr=3;//here i have redeclare the varr with var variable and i can also reassinged it like varr=3
console.log(varr);

let y=9;
y=8;//here i can only reassigne the y cant use let y=8; 
console.log(y);
//With let, redeclaring a variable in the same block is NOT allowed:
// var x = 2;   // Allowed
// let x = 3;   // Not allowed

// {
// let xx = 2;   // Allowed
// let xx = 3;   // Not allowed
// }

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }
// //Redeclaring a variable with let, in another block, IS allowed:
// let x = 2;   // Allowed

// {
// let x = 3;   // Allowed
// }

// {
// let x = 4;    // Allowed
// }
// const x = 2;       // Allowed

// {
//   const x = 3;   // Allowed
// }

// {
//   const x = 4;   // Allowed
// }
console.log("----------------------------------------------------------6");                                                    //MULTILINE PRINT
// different ways to print more than one variables in js in different line
let z="1";
let q="2";
console.log(`${z}\n${q}`);
console.log(z,'\n',q);               //112 here in this line the print of q will have default space of one becz , , is counting a space 
console.log(z + '\n' + q,);          //113 to avoid the issue in the line 112 we can use this one 
console.log([z,q].join('\n'));
console.log(`${z}
${q}`)


console.log("hello jivan\nhello aahina");  //117 \n can put in between two string of expression inside the print statement to get a space in line

console.log("---------------------------------------------------------7");
//there is a concept of "use strict" in js  but for effective use case of it just put it top of the program
//like if we use this then the javascript will posses you to write clean and valid code by showing error if there is something found by js
b = "help"; // no error as use strict is written after this 
"use strict" // this only affect the code written after it
a = "hello"; //error x is not declared


console.log("----------------------------------------------------------8")
//It preserves escape sequences like \n, \t, \\, etc.
//this is code example for string.raw  for printing the raw text inside the variable
const k = String.raw`so thss is \n raw with no \${l}`
const n = String.raw`so this is \n raw with no ${l}`;
const m = `so this is \n raw with no ${l}`;
console.log(k)
console.log(n)
console.log(m)


console.log("----------------------------------------------------------9")
//tagged template literals 



