let shotsTaken = document.querySelector(".goals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneShots = document.querySelector("#teamone-numshots")
let teamtwoShots = document.querySelector("#teamtwo-numshots")
let resets = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
let teamOneShoots = 0
let teamTwoShoots = 0
let tg
let teamOneGoals = document.querySelector("#teamone-numgoals")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
teamoneShootButton.addEventListener("click", function() {
    teamoneShots.innerHTML = teamOneShoots ++ 
    
   tg = Number(teamOneGoals.innerHTML)
    if (Math.random() > .5 ){
        tg ++
        teamOneGoals.innerHTML = tg
     }
    
    console.log(tg)
})
teamtwoShootButton.addEventListener("click", function()  {
    teamtwoShots.innerHTML = teamTwoShoots ++
    
    tg = Number(teamTwoGoals.innerHTML)
    if (Math.random() > .5){
      tg ++
      teamTwoGoals.innerHTML = tg
    }
    
    console.log(tg)

    if (teamOneGoals > teamTwoGoals){
           "Team 1 wins";}
    if (teamOneGoals = teamTwoGoals){
            "tie";}
    else{
          "Team 2 wins";}
      
})
resets.addEventListener("click", function()
{
  teamOneGoals.innerHTML = resets = 0
  teamTwoGoals.innerHTML = resets = 0
  teamoneShots.innerHTML = resets = 0
  teamtwoShots.innerHTML = resets = 0
   resetNumber.innerHTML = resets =+ 1
}) 
