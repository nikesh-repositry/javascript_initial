console.log("EVENT HANDLING++++++++++++++++++++++++++++++++++")
function fun1(){
    alert("hey i am a alert box ")
}
function fun2(){
    document.body.classList.toggle('yellowBG')
}

const a1 = document.getElementById("mydiv1")
a1.onmouseover=()=>{
    a1.style.backgroundColor = "aqua"
}
a1.onmouseout=()=>{
    a1.style.backgroundColor = "fuchsia"
}

const a2 = document.getElementById('mydiv2')
const a3 = document.getElementById('but1')
const a4 = document.getElementById('but2')
a3.addEventListener('click',function(){
    a2.style.backgroundColor = "yellow"
})
a4.addEventListener('click',()=>{
    a2.style.backgroundColor = "white"
})
