console.log("EVENT HANDLING++++++++++++++++++++++++++++++++++")
//inline event handling 
function fun1(){
    alert("hey i am a alert box ")
}
function fun2(){
    document.body.classList.toggle('yellowBG') //here css selection through class name and then toggle method which used to active if inactive and inactive if active
}

//event handling using dom event property
const a1 = document.getElementById("mydiv1")
a1.onmouseover=()=>{
    a1.style.backgroundColor = "aqua"
}
a1.onmouseout=()=>{
    a1.style.backgroundColor = "fuchsia"
}

//event hagdling using addEventListener
const a2 = document.getElementById('mydiv2')
const a3 = document.getElementById('but1')
const a4 = document.getElementById('but2')
a3.addEventListener('click',function(){
    a2.style.backgroundColor = "yellow"
})
a4.addEventListener('click',()=>{
    a2.style.backgroundColor = "white"
})
