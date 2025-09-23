
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++BASIC+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
b.addEventListener('mouseover',()=>{
    b.innerHTML="yhh dude now this paragraph get changed again"
    b.style.color="orange"
    b.style.backgroundColor="pink"
    b.style.border="2px solid black"
})
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")



//                                                             NODELIST

console.log("nodelist")

let jj = document.querySelectorAll("#mylist li")
console.log(jj)//this will print the nodelist in the console terminal

jj.forEach(item => {                   //this is the foreach loop applied in because of nodelist where each element can be access through and perform operation
    item.style.backgroundColor="blue"
    item.style.color="red"
});

console.log(jj[1].childNodes) //this is how you can access any childnode of the nodelist

const parent = document.getElementById('mylist') //41,42,43 these three line shows the execution of live nodelist 
const children= parent.childNodes;   //i have not used the queryselectorall because childnode is not the property of the wholelist
console.log(children) //The childNodes property is a feature of a single DOM element, not a collection of elements
//also in the console the output contains the word "text" because the  whitespace between HTML tags is also considered a text node by the browser's Document Object Model (DOM).
//nodelist can be convert into a array





console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                                        SELECTION OF HTML
//getElementId()
const aa = document.getElementById("first")
console.log(aa)
const a2 = document.getElementById("second")
console.log(a2)
//getElementByTagName()
const a3 = document.getElementsByTagName('h2')
console.log(a3)      
a3[0].style.backgroundColor='yellow'
console.log(a3[2].innerText) 
//getElementByClassName()
const a4 = document.getElementsByClassName('myclass')
console.log(a4)   
Array.from(a4).forEach(Element=>Element.style.backgroundColor='purple')  //here the htmlcollection first gets convert into an array then we applied the foreach loop otherwise we can do it via simple loop
//this foreach by converting into array can be done same for getelementbytagname
//querySelector()
const a5 = document.querySelector("input[type='email']")
console.log(a5)
a5.style.border="2px solid orange"
//document.querySelector can be implemented as using ID, class, tag, attribute, nested, pseudo-class
//documen.querySelectorAll()
const a6 = document.querySelectorAll(".mymy")
console.log(a6)
if(a6.length = 2){
    a6[2].style.backgroundColor="green"
}
const a7 = document.querySelectorAll(".mymy")[1]
console.log(a7)
a7.style.backgroundColor='orange'



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//                                    manipulating the html
//                                    tagname
//it just returns the tagname of the element 
const a8 = document.getElementById("mybutton")
console.log(a8.tagName)
const allelem  = document.body.children;
for(let child of allelem){
    if(child.tagName==="BUTTON"){
        console.log("found the button",child.id)
    }
}
//                                     nodename
//it just return the nodename of the element nodes all types
const a9 = document.getElementById('myhead2')
console.log(a9.nodeName)
let child = a9.firstChild;
while(child){
    console.log(child.nodeName);
    child = child.nextSibling;
}

