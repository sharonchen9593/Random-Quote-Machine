//Random Quote Machine
var loadQuote = $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
  var quote = "" + json.quoteText + ""
  $(".quote").html(quote)
  var author = "~" + json.quoteAuthor + "";
  $(".author").html(author)
  })





$(document).ready(function() {
  loadQuote;

  $('.newQuote').on('click', function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
  var quote = "" + json.quoteText + ""
  $(".quote").html(quote)
  var author = "~" + json.quoteAuthor + "";
  $(".author").html(author)
  })
  })
})


  /*$('.newQuote').on('click', function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    $(".quote").html(JSON.stringify(json));
    })
  })*/

