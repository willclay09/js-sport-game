let shotsTaken = document.querySelector(".goals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
//let teamtwoShootButton = document.querySelector()
let teamoneShots = document.querySelector("#teamone-numshots")
let teamOneShoots = 0

teamoneShootButton.addEventListener("click", function() {
    teamoneShots.innerHTML = teamOneShoots += 1
    var random = Math.random( ) * 10; 
    if (random > 5){
        //if this true the score increases
    }
    
    console.log(random)
})