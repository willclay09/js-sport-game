//let shotsTaken = document.querySelector(".goals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneShots = document.querySelector("#teamone-numshots")
let teamtwoShots = document.querySelector("#teamtwo-numshots")
let resets = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
let teamOneGoals = document.querySelector("#teamone-numgoals")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
let teamOneShoots = 0
let teamTwoShoots = 0
let tg1 = 0
let tg2 = 0
let resetNum = 0
teamoneShootButton.addEventListener("click", function() {
    teamoneShots.innerHTML = teamOneShoots ++ 
    
   
    if (Math.random() > .5 ){
    
        teamOneGoals.innerHTML = tg1 +=1
     }
    
    console.log(tg1)
})
teamtwoShootButton.addEventListener("click", function()  {
    teamtwoShots.innerHTML = teamTwoShoots ++
    
    
    if (Math.random() > .5){
    
      teamTwoGoals.innerHTML = tg2 +=1
    }
    
    console.log(tg2)

   
      
    })
resets.addEventListener("click", function()
{
   if (teamOneGoals > teamTwoGoals){
    console.log("Team 1 wins");}
else if (teamOneGoals === teamTwoGoals){
     console.log("tie");}
else{
   console.log("Team 2 wins");}
   
  teamOneGoals.innerHTML = tg1 = 0
  teamTwoGoals.innerHTML = tg2 = 0
  teamoneShots.innerHTML = teamOneShoots = 0
  teamtwoShots.innerHTML = teamTwoShoots = 0
  resetNumber.innerHTML = resetNum  += 1

  })
 