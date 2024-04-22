document.addEventListener('DOMContentLoaded', () => {

let playername=""
let greet = document.querySelector("#greet")
if(localStorage.minename && localStorage.minename != null){
    greet.innerText = "Welcome Back, " + localStorage.getItem("minename")
}
else{
    playername = prompt("Enter Your Name")
    localStorage.setItem("minename",playername)
    greet.innerText = "Welcome, " + playername
}
})
