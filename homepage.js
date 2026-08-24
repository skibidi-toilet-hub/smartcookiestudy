
 const lifeTime = Number(localStorage.getItem('lifeTime')) || 0;
 const dailyTime = Number(localStorage.getItem('todayTime')) || 0;


function displayTime(time) {
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let timeStatement = `${hrs.toString()} h ${mins.toString()} m`;
  return timeStatement
}

document.getElementById("dailyTime").textContent = `🌞 Today's study time: ${displayTime(dailyTime)}`;
document.getElementById("lifeTime").textContent = `⏰Total study time ever: ${displayTime(lifeTime)}`;


const day = new Date();
let dayTime = day.getHours();
if (dayTime < 12) {
document.getElementById("heading").textContent = "Good morning, let's start the day well!" 
} else if (dayTime >= 12 && dayTime < 18) {
document.getElementById("heading").textContent = "Good afternoon, let's keep going!" 
} else {
document.getElementById("heading").textContent = "Good evening, let's finish off the day well!" 
}

//----------quotes------------
  

function getRandomQuote() {
  const quotes = [
  "We make choices, but in the end, our choices make us.",
   "To have a successful year, have successful months. For successful months, seize the days. To seize the day, seize every moment.",
  "Pressure is a privilege - Billie Jean King",
  "When your mind gives up, don't let your heart give up.",
  "You can choose to keep dreaming in your sleep, or wake up and work to live your dream 24/7.",
  "Time is money, because time you spend working hard is an investment in your future.",
  "Everyone wanted to know what I would do if I didn't win...I guess we'll never know - Kanye West",
  "Work hard, then play hard. Make sure to also work smart.",
  "Don't limit your challenges, challenge your limits.",
  "One day or day one?",
  "Every minute studying is another brick in the foundation of your future.",
  "Do what's best for the cells in your brain and body.",
  "Dreams don't work unless you do,",
  "However bad life may seem, there is always something you can do and succeed at. While there is life, there is hope. - Stephen Hawking",
]

  const quoteIndex = Math.floor(quotes.length * Math.random());
  return quotes[quoteIndex];
}

document.getElementById("newQuote").onclick = function() {
  document.getElementById("quote").textContent = getRandomQuote();
};
