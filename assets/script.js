$(document).ready(function() {
  
  // variable to hold data from json file
  var quote;
  var author;
  
  // ajax request
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      // on ajax success set variables for quote and author
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
          $('#author').text('- ' + author);
        // if there is no author, set to unknown
        } else {
          $('#author').text('- unknown');
        
        }
      }
    });
  }
  // populates first quote upon page load
  getNewQuote();
  
  // makes a new ajax request upon button click
  $('.newQuote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });
  
  // shares quote via twitter upon button click
  $('.shareQuote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' --- ' + author))
  });
});
  

