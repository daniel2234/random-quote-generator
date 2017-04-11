function randomQuote(){
  $.ajax({
    url:"http://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response){
      $(".quote-message").html("<p class='random_quote' class='lead text-center'>" + response.quoteText);
      $(".author").html("<p class='author'>" + "&dash; "+ response.quoteAuthor + "</p>");
    }
  });
}

$(function() {
  randomQuote();
});

$(document).ready(function(){
    $("button").click(function(){
          randomQuote();
    });
});