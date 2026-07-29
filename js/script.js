alert("Welcome to NRIIT learning management system")
let heading=document.getElementById("welcome");
console.log("Heading element:",heading)
let msg=document.getElementById("message")
msg.innerHTML="Java script is fun"
console.log("message element :",msg)
function showmessage(){
    alert("Welcome to NRIIT Learning management system")
}
function changeHeading(){
    document.getElementById("welcome").innerHTML="Welcome Python fullstack developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading)
let button=document.getElementById("btnGreeting");
button.addEventListener("click",fuction(){
    alert("Welcome to javascript event handling");
});
fuction (event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if (!name||!email||!password){
        alert("please fill the felids.");
        return;
    }
    alert("Registration Successful")
}