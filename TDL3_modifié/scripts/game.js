// Compteur de points
var pointCounter = 0;

// red car image
var player = $("#player");

// ids for the blue cars
var currentId = 0;

// booleen definissant si l'on est game over
var gameOver = false;

$(document).ready(function(){

  // Positionner le hamster
  player.css({"left": "375px", "top": "650px"});

  // Controler le hamster
  $(document).keydown(function(e){
    console.log(e.keyCode);
	
	// sinister
    if (e.keyCode == 37){
	  var newPos = player.position().left - 50;
	  if (newPos > 0){
	    $("#player").css("left", newPos + "px");
	  }
	}
	// dexter
	else if (e.keyCode == 39){
	  var newPos = player.position().left + 50;
	  if (newPos < 750){
	    $("#player").css("left", newPos + "px");	
	  }
	}
  });

  // start the game
  addCar();
});

/**
 * Ajoute un element au hasard, un piege ou un cookie
 *(Add a car to the game, let it move until the bottom and check for collisions.)
 */
function addCar(){
  // Choose a position at random
  var posBlue = 25 + Math.floor(Math.random() * 15) * 50;
  
  // Put the car on the road
  var road = $("#road");
  road.append("<img id='car" + currentId + "' class='car' src='images/cookie.png' alt='blue-car' />");
  var car = $("#car" + currentId);
  car.css("left", posBlue + "px");
  
  // Move the car until the bottom
  car.animate({top: "+=650px"}, 2000, "linear", function(){
    // check for collisions
    if (player.position().left < car.position().left + 50 && player.position().left + 50 > car.position().left){	
      // Stop all cars
	  road.children().stop();
	
	  // Game over
	  gameOver = true;
	}
	else{
      // No collision
	  
      // increment points
	  pointCounter++;
	  console.log(pointCounter);
	
	  // Update points in the corresponding box
	  $("#counter").html(pointCounter);
	}
	
    // Remove the car
    car.remove();
  });
  
  // Next car id
  currentId++;

  // if no collision  
  if (!gameOver){	
    // add a new car	
    setTimeout(addCar, 300);
  }
  else{
    // display "Game over"
	road.empty();
	road.append("<div id='gameover'>Game Over</div><br/><div id='retry'><a href='game.html'>Try again !</a></div>");
  }
}