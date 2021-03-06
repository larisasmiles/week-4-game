// start game 
$(document).ready(function() {
  // create global variables... 
  crystals = ['assets/images/blue.jpeg', 'assets/images/diamond.jpeg', 'assets/images/Emerald_Gem.png', 'assets/images/Ruby-stone.jpg'];
 
}
// The player will have to guess the answer. This time, though, the player will guess with numbers instead of letters. 
// There will be four crystals displayed as buttons on the page.
for (var i = 0; i < numberOptions.length; i++) {


var imageCrystal = $('<img>');
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", )
}
$("#crystal-image").on("click", function() {

}

// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

// generate random number between 19-120
var winCount;
var lossCount;
var crystalsArray = ['assets/images/blue.jpeg', 'assets/images/diamond.jpeg', 'assets/images/Emerald_Gem.png', 'assets/images/Ruby-stone.jpg'];
var score;
var target;

function randomNumber() {
  return Math.floor(Math.random() * 120 + 19);

}

//each crystal needs random number between 1-12
function randomCrystal() {
  return Math.floor(Math.random() * 12 + 1);
}

function initializeGame() {
  winCount = 0;
  lossCount = 0;
  score = 0;
  target = randomNumber();
  for (i = 0; i < crystalsArray.length; i++) {
    crystalsArray[i] = randomCrystal();
    $(".randomNum").html(target);
    $("#scoreTracker").text(score);
  }
  console.log(crystalsArray);
  $("#blue").on("click", function() {
    score = score + crystalsArray[0];
    $("#scoreTracker").text(score);
    checkScore();  
  });
  $("#diamond").on("click", function() {
    score = score + crystalsArray[1];
    $("#scoreTracker").text(score);
    checkScore();  
  });
  $("#Emerald_Gem").on("click", function() {
    score = score + crystalsArray[2];
    $("#scoreTracker").text(score);
    checkScore();  
  });
  $("#Ruby-stone").on("click", function() {
    score = score + crystalsArray[3];
    $("#scoreTracker").text(score);
    checkScore();  
  });
  console.log(score);
  function checkScore() {
    if (score === target) {
      winCount++;
      alert("You Win!");
      $("#win_count").text(winCount);
      initializeGame();
    } else if (score > target) {
      alert("You Lose!");
      lossCount++;
      $("#losses_count").text(lossCount);
      initializeGame();
    }
  };

  //if totalScore === random number wins++
  
  //if totalscore > random number losses++
  
  //reset game if win or lose

