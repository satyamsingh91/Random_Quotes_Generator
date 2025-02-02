const quotes = [
    { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
    { text: "Happiness depends on what you can give, not on what you can get.", author: "Mahatma Gandhi" },
    { text: "You may never know what results come of your actions. But if you do nothing, there will be no result.", author: "Mahatma Gandhi" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Gautama Buddha" },
    { text: "An ounce of practice is worth more than tons of preaching.", author: "Mahatma Gandhi" },
    { text: "All power is within you; you can do anything and everything.", author: "Swami Vivekananda" },
    { text: "Change yourself and you have done your part in changing the world.", author: "Paramahansa Yogananda" },
    { text: "The mind is everything. What you think, you become.", author: "Gautama Buddha" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Ratan Tata" },
    { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "The purpose of education is to make good human beings with skill and expertise.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "It is health that is real wealth and not pieces of gold and silver.", author: "Mahatma Gandhi" },
    { text: "A person who never made a mistake never tried anything new.", author: "Chanakya" },
    { text: "Education is the best friend. An educated person is respected everywhere.", author: "Chanakya" }
];
 

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
    const randomQuote = quotes[randomIndex]; // Get the quote object
    document.getElementById("quote").textContent = `"${randomQuote.text}"`; // Set quote text
    document.getElementById("author").textContent = `— ${randomQuote.author}`; // Set author
}

// Event listener for the Generate Quote button
document.getElementById("generate").addEventListener("click", getRandomQuote);

// Event listener for the Tweet button
document.getElementById("tweet").addEventListener("click", () => {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' ' + author)}`;
    window.open(tweetUrl, "_blank"); // Open Twitter with the quote pre-filled
});

// Load the first quote when the page loads
getRandomQuote();
