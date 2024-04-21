document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch the CSV and parse it
    function fetchQuotes() {
      return fetch('js/quotes.csv')
        .then(response => response.text())
        .then(csvContent => {
          const lines = csvContent.trim().split('\n');
          const quotes = lines.map(line => {
            const [quote, author] = line.split(',');
            return { quote: quote.replace(/"/g, ''), author: author.replace(/"/g, '') };
          });
          return quotes;
        });
    }
  
    // Function to select a random quote
    function getRandomQuote(quotes) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    // Function to display the quote in the header
    function displayQuote(quoteObj) {
      const quoteElement = document.querySelector('#random-quote');
      if (quoteElement) {
        quoteElement.innerHTML = `"${quoteObj.quote}" - ${quoteObj.author}`;
      }
    }
  
    // Fetch and display a random quote
    fetchQuotes().then(quotes => {
      const randomQuote = getRandomQuote(quotes);
      displayQuote(randomQuote);
    });
  });
  