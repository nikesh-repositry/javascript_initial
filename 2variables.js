//                                                                     VARIABLE IN JS
//In JavaScript, objects and functions are also variables.
/* variables is used to store values
there are four ways to declare a variable in js
1. automatically
2.var
3.let
4.const
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

in general try not use the var variable and 
Variables declared with var are function-scoped*/



// Variables declared with let are block-scoped
let varr=1;
varr=2;                   //25 here i have changed the value assingned to varr and it works also here i didnt put any prefix before varr but js 
                         //25 understand and declare it in let variable
console.log(varr+2);
console.log(55+6)
const one=33
//one=22                  29 but if i try to change one value then it will throw error 
console.log(one+100)
console.log("--------------------------------------------------------------------")
//we can also declare multiple variable in one line of code
let firstname="NIKESH" ,middleName="KUMAR", LastName="SINGH";
console.log(firstname, middleName, LastName);
//A declaration can span multiple lines:
//which means •	you can break down the declaration of a variable, function, or class into multiple lines for example the below one
let longVariableName = 
  "This is a very long string " +
  "that is broken into multiple lines " +
  "for better readability.";
let Firstname="NIKESH",  //here firstname and Firstname both are different variables because js is case-sensitive                  
lastname="KUMAR";             
console.log(Firstname,lastname);
