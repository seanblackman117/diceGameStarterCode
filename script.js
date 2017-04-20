$(document).ready(function(){
  $("#rolldice").click(function() {
    
      /////$(".dice").empty();
      
      var dice1 = math.floor( math.random()*6 + 1);
      var dice2 = math.floor( math.random()*6 + 1);




  

  



      if (dice1 == 1) {
        $("#first-die").attr("class","dice-1");
}
      if (dice1 == 2) {
        $("#first-die").attr("class","dice-2");
}
      if (dice1 == 3) {
        $("#first-die").attr("class","dice-3");
}
      if (dice1 == 4) {
        $("#first-die").attr("class","dice-4");
}
      if (dice1 == 5) {
        $("#first-die").attr("class","dice-5");
}
      if (dice1 == 6) {
        $("#first-die").attr("class","dice-6");
}
      if (dice2 == 1) {
        $("#second-die").attr("class","dice-1");
}
      if (dice2 == 2) {
        $("#second-die").attr("class","dice-2");
}
      if (dice2 == 3) {
        $("#second-die").attr("class","dice-3"); 
}
      if (dice2 == 4) {
        $("#second-die").attr("class","dice-4");
}
      if (dice2 == 5) {
        $("#second-die").attr("class","dice-5");
}
      if (dice2 == 6) {
        $("#second-die").attr("class","dice-6");
}
 });
});