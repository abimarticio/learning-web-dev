const enterQstn = document.querySelector("#enter-qstn");
const myInput = document.querySelector("#myInput");
const msg = document.querySelector(".msg");
const qstn = document.querySelector("#qstn");
const ans = document.querySelector("#ans");

enterQstn.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(myInput.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter your question.";

        setTimeout(() => msg.remove(), 2000);
    }
    else{
        var choices = Math.floor(Math.random()*2);
        var answer = (choices == 1) ? "YES" : "NO";
       
        qstn.innerHTML = myInput.value;
        ans.innerHTML = answer;  
        
        myInput.value = "";
    }
}