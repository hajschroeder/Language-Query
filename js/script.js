$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    $("button").click(function(){
      $("p.result").toggle();
    })
    
    let qOneAnswer=parseInt($("#question1").val());
    let qTwoAnswer=parseInt($("#question2").val());
    let qThreeAnswer=parseInt($("#question3").val());
    let qFourAnswer=parseInt($("#question4").val());
    let qFiveAnswer=parseInt($("#question5").val());
    
    $("#question1").text(qOneAnswer);
    $("#question2").text(qTwoAnswer);
    $("#question3").text(qThreeAnswer);
    $("#question4").text(qFourAnswer);
    $("#question5").text(qFiveAnswer);
    
    let result= qOneAnswer+qTwoAnswer+qThreeAnswer+qFourAnswer+qFiveAnswer
    if(result<=203 && result !=140 && result!=131 && result!=122 && result!=50 && result!=41 && result!=32 && result !=0){
      $("#resultA").show();
    } else if (result<=230 && result !=221){
      $("#resultB").show();    
    }else if (result>230) {
      $("#resultC").show();
    } else {}
  });
  
});