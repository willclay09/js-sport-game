let shotsTaken = document.querySelector(".goals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneShots = document.querySelector("#teamone-numshots")
let teamtwoShots = document.querySelector("#teamtwo-numshots")
let resets = document.querySelector("#reset-button")
let resetNumber = document.querySelector("num-resets")
let teamOneShoots = 0
let teamTwoShoots = 0
let totalResets = 0
teamoneShootButton.addEventListener("click", function() {
    teamoneShots.innerHTML = teamOneShoots += 1
    var random = Math.random( ) * 10; 
    if (random > 2){
        return "1";
     }
     else{ 
        return "0";
     } 
    
    console.log(random)
})
teamtwoShootButton.addEventListener("click", function()  {
    teamtwoShots.innerHTML = teamTwoShoots += 1
    var random = Math.random( ) * 10;
    if (random > 1){

    }
    else{

    }
    console.log(random)
})
resets.addEventListener("click", function(){
    resetNumber.innerHTML = totalResets += 1
})