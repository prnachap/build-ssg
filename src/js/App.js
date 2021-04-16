const quotes = ["you are awesome", "you are very good", "you are wonderful"];
const random = Math.floor(Math.random() * Math.floor(quotes.length));

document.querySelector(".vibe").textContent = quotes[random];
