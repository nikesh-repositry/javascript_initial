//                                 difference between typeof() and object wrapper 
//                                                     node js_essentials/5typeof.js
/* baically the typeof() function is used to check the type of the data type but 
object wrapper is the temporary object which is created by js on primitive data types so 
that one can do object like action on that */

let num = 10;
let numObj = new Number(num); // numObj is now a Number object
console.log(typeof num);    // "number"
console.log(typeof numObj); // "object
// this is the example that we can create it explicitly by ourselves but js can also automatically create and destroy object wrapper for instance

let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
/* What happens behind the scenes:

JavaScript sees str.toUpperCase(). str is a primitive string.
JavaScript temporarily creates a String object wrapper around the primitive value "hello".
The toUpperCase() method is called on this temporary String object.
The toUpperCase() method returns the new string "HELLO".
The temporary String object is discarded.
"HELLO" is logged to the console.*/