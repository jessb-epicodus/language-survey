$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    const input1 = ("input#q1").valueOf();
    const input2 = ("input#q2").valueOf();
    const input3 = ("input#q3").valueOf();
    const input4 = ("input#q4").valueOf();
    const input5 = ("input#q5").valueOf();

    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#invalid").hide();
  });
});