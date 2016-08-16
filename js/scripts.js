//<!-- Back End -->

function createPuzzle(puzzleString) {
  var returnString = "";
  for (var i = 0; i < puzzleString.length; i++) {
    if(puzzleString.charAt(i) === "a" || puzzleString.charAt(i) === "e" || puzzleString.charAt(i) === "i" || puzzleString.charAt(i) === "o" || puzzleString.charAt(i) === "u") {
      // console.log(puzzleString.charAt(i));
      returnString += "-";
    } else {
      returnString += puzzleString.charAt(i);
    }
  }
  return returnString;
}

function checkGuess(guessString, puzzleString) {
  if (guessString.toUpperCase() === puzzleString.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

//<!-- Front End  -->
$(document).ready(function(){
  var puzzleString;
  $("form#puzzleInput").submit(function(event) {
    event.preventDefault();
    $("#puzzleInput div").removeClass("has-error");
    puzzleString = $("input#toPuzzle").val();
    if(!puzzleString) {
      $("#puzzleInput div").addClass("has-error");
    } else {
      var outputString = createPuzzle(puzzleString);
      $(".well").show().text(outputString);
      $("form#puzzleInput").hide();
      $("form#guessInput").show();
    }
  });
  $("form#guessInput").submit(function(event) {
    event.preventDefault();
    guessString = $("input#guess").val();
    if (checkGuess(guessString, puzzleString)) {
      alert("You're right!! Congratulations!!!");
      $("form#guessInput, .well").hide();
      $("form#puzzleInput").show()
      $("form#puzzleInput")[0].reset();
      $("form#guessInput")[0].reset();
    } else {
      alert("Sorry, that is not correct! Try Again!")
    }
  });
});
