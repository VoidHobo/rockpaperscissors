// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$('document').ready(function() {

$("#shoot").click(function(){
    let box = $("#input").val();

    $("#userChoice").text(box);
    $("#computerChoice").text(box);
});
});
// DOCUMENT READY FUNCTION BELOW

