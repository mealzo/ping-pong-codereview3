// var pingPong = function(countTo){
//   for (var i = 1; i < countTo; i++) {
//     if (i%3===0) {
//       $(".numbers").text("ping");
//     }
//     else if (i%5===0) {
//       $(".numbers").text("pong");
//     }
//     else if (i%15===0) {
//       $(".numbers").text("ping pong!");
//     }
//     else {
//       $(".numbers").text(i);
//     }
//   }
// }
//

$(document).ready(function(){
  $("#form").submit(function(event){
    var countTo = $("input#count-to").val();

      for (var i = 1; i <= countTo; i++) {
        if (i%3===0 && i%15!=0) {
          $(".numbers").append("<li>ping</li>");
        }
        else if (i%5===0 && i%15!=0) {
          $(".numbers").append("<li>pong</li>");
        }
        else if (i%15===0) {
          $(".numbers").append("<li>ping pong!</li>");
        }
        else {
          $(".numbers").append("<li>" + i + "</li>");
        }
      }

    event.preventDefault();
  });
});
