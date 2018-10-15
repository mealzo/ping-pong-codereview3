

var pingPong = function(countTo){
for (var i = 1; i <= countTo; i++) {
  if (i%3===0 && i%15!=0) {
    $(".numbers").append("<li>Ping</li>");
  }
  else if (i%5===0 && i%15!=0) {
    $(".numbers").append("<li>Pong</li>");
  }
  else if (i%15===0) {
    $(".numbers").append("<li>Ping Pong!</li>");
  }
  else {
    $(".numbers").append("<li>" + i + "</li>");
  }
}
}

$(document).ready(function(){
  $("#form").submit(function(event){
    $(".numbers").empty();
    var countTo = $("input#count-to").val();
    pingPong(countTo);
    


    event.preventDefault();
  });
});
