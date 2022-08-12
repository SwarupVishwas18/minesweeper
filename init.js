document.addEventListener('DOMContentLoaded', () => {

let playername=""
let greet = document.querySelector("#greet")
if(localStorage.name && localStorage.name != null){
    greet.innerText = "Welcome Back, " + localStorage.getItem("name")
}
else{
    playername = prompt("Enter Your Name")
    localStorage.setItem("name",playername)
    greet.innerText = "Welcome, " + playername
}
})
