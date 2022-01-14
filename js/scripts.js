$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    const input1 = parseInt($("input#q1").valueOf());
    const input2 = ("input#q2").valueOf();
    const input3 = ("input#q3").valueOf();
    const input4 = $("#q4").valueOf();
    const input5 = $("#q5").valueOf();

    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#invalid").hide();

    if (){
      $("#lang1").show();
    } else if () {
      $("#lang2").show();
    } else if () {
      $("#lang3").show();
    } else if () {
      $("#invalid").show();
  });
});