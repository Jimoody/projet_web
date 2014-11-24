

// red car image
var player = $("#player");

$(document).ready(function(){

  // Positionner le hamster
  player.css({"left": "400px", "top": "400px"});

  // Controler le hamster
  $(document).keydown(function(e){
    console.log(e.keyCode);
	
	// sinister
    if (e.keyCode == 37){
	  var newPos = player.position().left - 100;
	  if (newPos > -50){
	    $("#player").css("left", newPos + "px");
	  }
	}
	// dexter
	else if (e.keyCode == 39){
	  var newPos = player.position().left + 100;
	  if (newPos < 500){
	    $("#player").css("left", newPos + "px");	
	  }
	}
  });

  
});

