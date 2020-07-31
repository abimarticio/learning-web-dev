const names = document.querySelector("#names");
const winner = document.querySelector("#winner");
const addNames = document.querySelector("#add-names")
const msg = document.querySelector(".msg");
const nameList = document.querySelector("#name-list");
const pplJoined = document.querySelector("#pplJoined");

addNames.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
   

    if(names.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter the names.";

        setTimeout(() => msg.remove(), 2000);
    }

    else{
        let inputNames = names.value,
            splitIN = inputNames.split(","),
            lengthOfIN = splitIN.length,
            chooseWinner = Math.floor(Math.random()* lengthOfIN),
            luckyWinner = splitIN[chooseWinner],
            html = "";

            splitIN.forEach(function(x) {
                html += "<li>" + x + "</li>";
            });

            html = "<ul>" + html + "</ul>";
        
            nameList.innerHTML = html;
            pplJoined.innerHTML = "Number of people who joined the random name picker: " + lengthOfIN;
            winner.innerHTML = "Congratulations!!! The lucky winner is " + luckyWinner.toUpperCase() + "!!!";
    }   
}







        

    


//function myFunction(){
  
    
  //  var inputLength= inputNames.length;
   // var randomWinner= Math.floor(Math.random()*inputLength);

   // document.getElementById("winner").innerHTML= randomWinner;
//}
//var names = ["abi", "lara", "gab"];

