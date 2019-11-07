// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$('document').ready(function() {

$("#shoot").click(function(){
    let box = $("#input").val();

    $("#userChoice").text(box);

    var generator = Math.random();
    var computerchoices;
    
    if (generator > .3 ) {
        $("#text").append("Scissors");
    }
      else if (generator > .6 ) {
        $("#text").append("Rock")
      }
      else{
        $("#text").append("Paper")
      }
      $("#computerChoice").text(computerchoices);
          console.log("work?"); 

});
});
// DOCUMENT READY FUNCTION BELOW

