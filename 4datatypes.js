//                                                                           DATA STRUCTURE AND DATATYPES
/*js is weak type and dynamic language, dynamic means that Variables in JavaScript are not directly associated 
with any particular value type, and any variable can be assigned (and re-assigned) values of all types: for example
This means that the same variable can be used to hold different data types*/
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

/*JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves
 mismatched types, instead of throwing type errors. */
 const fooo = 42; // foo is a number
const result = fooo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421

//there are mainly two types of data types in js primitive and non-primitive                                               //PRIMITIVE
//primitive are directly stored in memory in stack and immutable in nature also there is certain value in this type and they are pre-built 
//Number: Represents numeric values, both integers and floating-point numbers.
let age = 30;                                                                            //type of()         //object wrapper
let pi = 3.14159;                                                                        //"number"            number                                       
//String: Represents a sequence of characters.
let name = "Alice";
let greeting = "Hello, world!";                                                          //"string"            string
//Boolean: Represents a logical value, either true or false.
let isStudent = true;
let isRaining = false;                                                                   //"boolean"           boolean
//Null: Represents the intentional absence of any object value.
let x = null;                                                                            //"object"             N/A
//Undefined: Represents a variable that has been declared but not yet assigned a value.   
let y; // y is undefined                                                                 //"undefined"          N/A
//Symbol: Represents a unique and immutable identifier.
let id = Symbol("uniqueID");                                                             //"symbol"             symbol
//BigInt: Represents arbitrarily large integers.
let largeNumber = BigInt("9007199254740991");                                            //"bigint"             bigint


/*The Object Datatype---------------------------------------------------------------------------------
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more. */
console.log("------------------------------------important-points-read-comments------------------------------------------");
/* all data types in JavaScript except for Object are immutable 
and directly represented at the lowest level of the language.
 This means that once a primitive value is assigned to a variable,
 its value cannot be changed directly. Any operation that appears 
 to modify a primitive value actually creates a new value. for example*/
 let xx = 5;
xx = 10; 
/*In this code, the variable xx is first assigned the value 5. When we assign 10 to xx,
 we're not actually changing the value of the original 5. 
Instead, we're creating a new value 10 and assigning it to the variable xx. The old value 5 still exists in memory,
 but it's no longer accessible through the variable xx.

This immutability of primitive values helps to prevent accidental modification and makes JavaScript code more predictable and reliable. */

//null is a keyword, but undefined is a normal identifier that happens to be a global property. 
// In practice, the difference is minor, since undefined should not be redefined or shadowed.

