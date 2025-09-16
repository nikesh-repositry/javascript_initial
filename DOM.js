

//HOW TO SELECT ANY HTML ELEMENT THROUGH JS===================================================================
//using document.queryselector()
let a = document.querySelector("h1")
console.log(a)

//HOW TO CHANGE AND MANIPULATE HTML THROUGH JS=================================================================
//using .innerHTML property
let b = document.querySelector("p")
console.log(b)
b.innerHTML="yes buddy this is a paragraph which is just got changed"

//HOW TO CHANGE THE CSS THROUGH JS============================================================================
//using .style property 
b.style.color="white"
b.style.backgroundColor="green"

//EVENT LISTENER IN JS==========================================================================================
//syntax is: addEventListener(action,function)
b.addEventListener('click',()=>{
    b.innerHTML="yhh dude now this paragraph get changed again"
    b.style.color="orange"
    b.style.backgroundColor="pink"
    b.style.border="2px solid black"
})