let shotsTaken = document.querySelector(".goals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneShots = document.querySelector("#teamone-numshots")
let teamtwoShots = document.querySelector("#teamtwo-numshots")
let resets = document.querySelector("#reset-button")
let resetNumber = document.querySelector("num-resets")
let teamOneShoots = 0
let teamTwoShoots = 0
let teamOneGoals = document.querySelector("teamone-numgoals")
let teamTwoGoals = document.querySelector("teamtwo-numgoals")
teamoneShootButton.addEventListener("click", function() {
    teamoneShots.innerHTML = teamOneShoots += 1
    var random = Math.random( ) * 1; 
    
    if (random > .5 );{
        teamOneGoals = + 1
     }
    
    console.log(random)
})
teamtwoShootButton.addEventListener("click", function()  {
    teamtwoShots.innerHTML = teamTwoShoots += 1
    var random = Math.random( ) * 1;
    if (random > .5){

    }
    
    console.log(random)

    if (teamOneGoals > teamTwoGoals){
           "Team 1 wins";}
    if (teamOneGoals = teamTwoGoals){
            "tie";}
    else{
          "Team 2 wins";}


})
resets.addEventListener("click", function(){
  resets.innerHTML = teamOneGoals +=0
  resets.innerHTML = teamTwoGoals +=0
  resets.innerHTML = teamoneShots +=0
  resets.innerHTML = teamtwoShots +=0
  resets.innerHTML = 1
})