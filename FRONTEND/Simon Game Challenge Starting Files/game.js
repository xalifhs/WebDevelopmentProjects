// the array with the colours
var buttonColours = ["red","blue","green","yellow"];

//the pattern
var gamePattern = [];


//click pattern
var userClickedPattern =[];

// started toggle variable
var started = false;

//level
var level = 0;

//start game
$(document).keydown(function(){
    
  if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
  }
});
                                                                                            
// handler
$(".btn").click(function(){
    // the button id
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
})
//the function that activates sound on click
function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}



//the next sequence function
function nextSequence(){
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    
    level++

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);
    
    //random number 0-3
    var randomNumber = Math.floor(Math.random()*4);

    //random colour
    var randomChosenColour = buttonColours[randomNumber];

    //pattern creation
    gamePattern.push(randomChosenColour);
    
    //flash
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //sound
    playSound(randomChosenColour);
    
    
}

//the animate press function
function animatePress(currentColour){

    $("#"+ currentColour).addClass("pressed");

    setTimeout(function () {
      $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        playSound("wrong");

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
  
      }

      
    
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}









