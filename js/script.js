$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    $("button").click(function(event){
      event.preventDefault();
      $("h2.result").fadeToggle();
    })
    
    const qOneAnswer=parseInt($("#question1").val());
    const qTwoAnswer=parseInt($("#question2").val());
    const qThreeAnswer=parseInt($("#question3").val());
    const qFourAnswer=parseInt($("#question4").val());
    const qFiveAnswer=parseInt($("#question5").val());
    
    $("#question1").text(qOneAnswer);
    $("#question2").text(qTwoAnswer);
    $("#question3").text(qThreeAnswer);
    $("#question4").text(qFourAnswer);
    $("#question5").text(qFiveAnswer);
    
    let result= qOneAnswer+qTwoAnswer+qThreeAnswer+qFourAnswer+qFiveAnswer
    if(result<=203 && result !=140 && result!=131 && result!=122 && result!=50 && result!=41 && result!=32){
      $("#resultA").fadeIn();
    } else if (result<=230 && result !=221){
      $("#resultB").fadeIn();   
    }else if (result>230) {
      $("#resultC").fadeIn();
    } else {
      $("#resultD").show();
    }
  });
});