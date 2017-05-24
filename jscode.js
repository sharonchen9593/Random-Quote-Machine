//Random Quote Machine






$(document).ready(function() {
  //initial quote
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    currentQuote = json.quoteText;
    currentAuthor = json.quoteAuthor;
    var quote = '' + currentQuote + ''
    $(".quote").html(quote)
    var author = "~" + currentAuthor + "";
    $(".author").html(author)
    $('.twitterbutton').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + currentQuote + currentAuthor + '')
  })

  $('.newQuote').on('click', function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    currentQuote = json.quoteText;
    currentAuthor = json.quoteAuthor;
    var quote = '' + currentQuote + ''
    $(".quote").html(quote)
    var author = "~" + currentAuthor + "";
    $(".author").html(author)
    $('.twitterbutton').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + currentQuote + currentAuthor + '')
    })
    })


})

