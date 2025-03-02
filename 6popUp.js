//                                                   POP UPS IN JS
// these are the dialogue boxes which are shown up in the browser to interact with the user
const userName = prompt("what is your name buddy","guest001");
if (userName !== null){
    const planetName = confirm("DO YOU LIVE IN EARTH");
    if (planetName == true){
        alert("save your planet men before its to late");
    }    
    else {
        alert("how do you even exist pal");
    }        
}
else{
    alert("i will find you ");
}


// first one is alert()
alert("hello there welcome to our website"); 
// second one is confiem()
confirm("would you like us to navigate you");
//third one is prompt()
prompt("hey can you enter you name please","user001");