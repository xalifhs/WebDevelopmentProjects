// the array with the colours
var buttonColours = ["red","blue","green","yellow"];

//the pattern
var gamePattern = [];


//click pattern
var userClickedPattern =[];

                                                                                                // started toggle variable
                                                                                                var started = true;
                                                                                            
// handler
$(".btn").click(function handler(){
    // the button id
    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})
//the function that activates sound on click
function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}
                                                                                                        $(document).keydown(function(started){
                                                                                                            
                                                                                                            if (started = true) {
                                                                                                                nextSequence();
                                                                                                                started =false;
                                                                                                            }
                                                                                                        });

//the next sequence function
function nextSequence(){
    
    //random number 0-3
    var randomNumber = Math.floor(Math.random()*4);

    //random colour
    var randomChosenColour = buttonColours[randomNumber];

    //pattern creation
    gamePattern.push(randomChosenColour);
    
    //flash
    $("#"+randomChosenColour).fadeOut(100).fadeIn(1);

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









