$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentenceInput").val();
    var reversed = sentence.split("").reverse().join("");
  
    if (sentence === reversed) {
      alert("Yep");
    }   else
      alert("Nope");
    

    console.log(reversed)

  });
});