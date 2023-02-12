$(document).ready(function() {
  // List of quotes to display
  var quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "If you want to achieve greatness stop asking for permission.", author: "Unknown"},
    {text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill"},
    {text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis"},
    {text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett"},
    {text: "If you can't explain it to a six year old, you don't understand it yourself.", author: "Albert Einstein"},
    {text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb"},
    {text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar"}
  ];

  // Function to generate a random quote
  function getQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  // Function to update the quote and author elements with new values
  function updateQuote() {
    var quote = getQuote();
    $('#text').text(quote.text);
    $('#author').text('- ' + quote.author);
  }

  // On page load, display a random quote
  updateQuote();

  // On click of "New Quote" button, update the quote
  $('#new-quote').click(function() {
    updateQuote();
  });

  // On click of "Tweet Quote" button, open a new window to tweet the current quote
  $('#tweet-quote').click(function() {
    var text = $('#text').text();
    var author = $('#author').text().substr(2); // remove leading "- "
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + text + '" ' + author);
    window.open(tweetUrl, '_blank');
  });
});
