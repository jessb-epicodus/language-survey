$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    const ans1 = parseInt($("input#question1").val());
    const ans2 = parseInt($("input#question2").val());
    const ans3 = parseInt($("#question3").val());
    const ans4 = parseInt($("#question4").val());
    const ans5 = parseInt($("#question5").val());

    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#invalid").hide();

    if ((ans3 === 1) || (ans4 === 1) || (ans5 === 1)) {
      $("#invalid").show();
    } else if (((ans3 === ans4) && (ans3 === ans5)) && ((ans1 >= 0) && (ans2 >= 0))) {
      $("#lang1").show();
    } else if (((ans1 + ans2 + ans3 + ans4 + ans5) % 2 === 0) && (ans1 && ans2 >= 0)) {
      $("#lang2").show();
    } else if (((ans1 + ans2 + ans3 + ans4 + ans5) % 2 !== 0) && (ans1 && ans2 >= 0)) {
      $("#lang3").show();
    } else {
      $("#invalid").show();
    }
  });
});