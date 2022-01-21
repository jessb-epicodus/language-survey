$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    const lucky = parseInt($("input#question1").val());
    const sib = parseInt($("input#question2").val());
    const dayNi = parseInt($("#question3").val());
    const fight = parseInt($("#question4").val());
    const speak = parseInt($("#question5").val());

    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#invalid").hide();

//functions result in #invald when a1 = 0
    if ((dayNi === 1) || (fight === 1) || (speak === 1)) {
      $("#invalid").show();
    } else if (((dayNi === fight) && (dayNi === speak)) && ((lucky >= 0) && (sib >= 0)) {
      $("#lang1").show();
    } else if (((lucky + sib + dayNi + fight + speak) % 2 == 0) && (lucky && sib >= 0)) {
      $("#lang2").show();
    } else if (((lucky + sib + dayNi + fight + speak) % 2 !== 0) && (lucky && sib >= 0)) {
      $("#lang3").show();
    } else {
      $("#invalid").show();
    }
  });
});