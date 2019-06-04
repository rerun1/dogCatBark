$(document).ready (function(){
  $("div#cat").click (function(){
      $("div#meow").prepend("<img src='img/meow.png' alt='meow thought bubble'>");
      $("div#meow").children("img").first().click(function(){
        $(this).remove();
      });
  });
  $("div#dog").click (function(){
      $("div#bark").prepend("<img src='img/bark.png' alt='bark thought bubble'>");
      $("div#bark").children("img").first().click(function(){
        $(this).remove();
      });
  });
});
