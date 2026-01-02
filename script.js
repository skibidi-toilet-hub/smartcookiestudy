document.addEventListener('DOMContentLoaded', function() {
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const pauseButton = document.getElementById('pauseButton');
const taskList = document.getElementById("taskList");
const hoursInput = document.getElementById('hoursInput').value.trim();
const minutesInput = document.getElementById('minutesInput').value.trim();
const breakMinutesInput = document.getElementById('breakMinutesInput').value.trim();
const sessionNumber = document.getElementById("sessionCountInput").value.trim();
let currentSession = 1
let isPaused = true;
let isBreak = false;
})
//these are the controls first for the collapsable sidebar of timer settings:

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("mySidebar").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document .getElementById("mySidebar").style.height = "0";
}

//........................

 hoursInput === "" ? 0 : parseInt(hoursInput, 10);
 minutesInput === "" ? 25 : parseInt(minutesInput, 10);
 breakMinutesInput === "" ? 5 : parseInt(minutesInput, 10);

let hrAmount = parseInt(hoursInput, 10);
let minAmount = parseInt(minutesInput, 10);
let brkMinAmount = parseInt(minutesInput, 10);


document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;
let countdown = null
let studyTime = (hrAmount * 3600) + (minAmount * 60);
let origStudyTime = studyTime;

function updateDisplay(studyTime)  {
  let hours = Math.floor(studyTime / 3600);
  let minutes = Math.floor((studyTime % 3600) / 60);
  let seconds = studyTime % 60;
  document.getElementById("timerDisplay").textContent =
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function startTimer(studyTime, onEnd) {
  if (countdown === null || isPaused = true) {
    countdown = setInterval(function() {
      let isPaused = false;
      studyTime--;
      updateDisplay(studyTime);
         }, 1000);
     if (studyTime <= 0) {
      clearInterval(countdown)
      countdown = null
      if (onEnd) onEnd();
      }
   else {
    alert("You already have a timer open!") 
   }
  }
   
function loopStudy() {
  let countdown = null;
  startTimer(studyTime, function() {
     clearInterval(countdown);
     alert(`Amazing! ${currentSession} done! ${sessionNumber - currentSession} sessions left after our break!`);
     isBreak = true 
     document.getElementById("timerDisplay").textContent = `${brkMinAmount.toString().padStart(2, '0')}:00`;
  startTimer(breakTime, function() 
   alert("Break timer over! Prep for the next study session!!!")
   currentSession++;
   document.getElementById("timerDisplay").textContent = hoursInput + ":" + minutesInput + ":00";
    if (currentSession <= sessionCount) {
        loopStudy();
      } else {
          alert("All sessions are complete! Great work!");
      }
  
  })
      }
  })
 }

 document.getElementById("startButton").onclick = function TIMER() {
  sessionNumber === "" ? 4 : parseInt(sessionNumber, 10);
  currentSession = 1;
  loopStudy();
 }
 
//pause timer function: it pauses the timer, but does not reset it.
document.getElementById("pauseButton").onclick = function pauseTimer() {
  if (!isPaused) {
    clearInterval(countdown);
    countdown = null;
   isPaused = true;
  }
  elif (isPaused) {
     startTimer(studyTime, function() {
     alert(`Session ${currentSession} resumed and completed!`);
     startTimer(breakTime, function() 
       alert("Break timer over! Prep for the next study session!!!")
       currentSession++;
       document.getElementById("timerDisplay").textContent = hoursInput + ":" + minutesInput + ":00";
       if (currentSession <= sessionCount) {
         loopStudy();
        } else {
            alert("All sessions are complete! Great work!");
      }
  
  })
  }

// reset button functionality: it resets the timer back to the original user input time.
document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  countdown = null;
 document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;
  let isPaused = true;
  alert("Timer reset. Click the Resume or Start button to set the timer again.")
}
  
    //confirm if the "motivational quotes" checkbox is checked, then present a motivational quote every 5 minutes in the html box.
if (document.getElementById("motivationalQuotes").checked) {
  function getRandomQuote() {
    const quotes = [
      "The one who works is the talented one.",
      "Every minute you study is a brick in the foundation of your future.",
      "To win the year, win the months. To win the months, win the days. To win the day, you gotta win every minute.",
      "Time is money, because the time you spend working is an investment in your future.",
      "Work hard chasing your dreams so later you can live your dream life 24/7, not just when you sleep.",
      "Grind as if you're an idiot, and perform as if you're a genius.",
      "Don't limit your challenges, challenge your limits.",
      "We all make choices, but in the end our choices make us.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  // Set first quote immediately
function showQuote {
  document.getElementById("quoteBox").textContent = getRandomQuote();
}; 

  // Update every 5 minutes
setInterval(() => showQuote(), 1000 * 60 * 5);

}  else {
     document.getElementById("quoteBox").textContent =
    `Session ${currentSession} / ${sessionNumber}`;
}

