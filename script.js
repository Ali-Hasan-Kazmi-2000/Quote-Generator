let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let autorText = document.getElementById('autor-name');
let newQuoteBtn = document.getElementById('new-quote');
let twitterBtn = document.getElementById('twitter');

// Load quootes on quote container
function getQuotes() {
   let quotes = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    

    if(!quotes.author){
        autorText.textContent = 'Unknown';
    }else {
        autorText.textContent = quotes.author;
    }

    if(quotes.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quotes.text;
}

function tweet(){
    const twitterUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${autorText.textContent}`;
    window.open(twitterUrl, "_blank");
}


newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweet);

getQuotes();