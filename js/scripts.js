$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    const a1 = parseInt($("input#q1").val());
    const a2 = parseInt($("input#q2").val());
    const a3 = parseInt($("#q3").val());
    const a4 = parseInt($("#q4").val());
    const a5 = parseInt($("#q5").val());

    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#invalid").hide();

    if  ((a3 == 1) || (a4 == 1) || (a5 == 1)) {
      $("#invalid").show();
    } else if ((a1 + a2) >= (a3 + a4 +a5)){
      $("#lang1").show();
    } else {
      $("#invalid").show();
    }
  });
});