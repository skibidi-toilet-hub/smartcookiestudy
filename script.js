document.addEventListener('DOMContentLoaded', function() {
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const pauseButton = document.getElementById('pauseButton');
const taskList = document.getElementById("taskList");
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

document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;

let countdown = null
let studyTime = (hrAmount * 3600) + (minAmount * 60);

function updateDisplay(studyTime)  {
  let hours = Math.floor(studyTime / 3600);
  let minutes = Math.floor((studyTime % 3600) / 60);
  let seconds = studyTime % 60;
  document.getElementById("timerDisplay").textContent =
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer(studyTime, onEnd) {
  if (countdown === null || isPaused === true) {
      countdown = setInterval(function() {
        let isPaused = false;
        studyTime--;
        updateDisplay(studyTime);
         }, 1000);

     if (studyTime <= 0) {
      clearInterval(countdown)
      countdown = null
      if (onEnd) { 
        onEnd();
      }
   else {
    alert("You already have a timer open!") 
   }
  }
}
}

//fix these two....

function loopStudy() {
  let countdown = null;
  startTimer(studyTime, function() {
     clearInterval(countdown);
     alert(`Session ${currentSession} done! ${sessionNumber - currentSession} sessions left after our break!`);
     isBreak = true 
     document.getElementById("timerDisplay").textContent = `${brkMinAmount.toString().padStart(2, '0')}:00`;
  })
     startTimer(breakTime, function() {
       alert("Break timer over! Prep for the next session!!!")
       currentSession++;
       document.getElementById("timerDisplay").textContent = hoursInput + ":" + minutesInput + ":00";
       if (currentSession <= sessionCount) {
         loopStudy();
      } else {
          alert("All done! Great work!");
      }
  
  })
      }
  
 }

 document.getElementById("startButton").onclick = function TIMER() {
  const hoursInput = document.getElementById('hoursInput').value.trim();
  const minutesInput = document.getElementById('minutesInput').value.trim();
  const breakMinutesInput = document.getElementById('breakMinutesInput').value.trim();
  const sessionInput = document.getElementById("sessionCountInput").value.trim();
  let currentSession = 1
  let sessionNumber = sessionInput === "" ? 4 : parseInt(sessionInput, 10);
  let hrAmount =  hoursInput === "" ? 0 : parseInt(hoursInput, 10);
  let minAmount = minutesInput === "" ? 25 : parseInt(minutesInput, 10);
  let brkMinAmount = breakMinutesInput === "" ? 5 : parseInt(breakminutesInput, 10);
  loopStudy();
 }
 
//pause timer function: it pauses the timer, but does not reset it.

document.getElementById("pauseButton").onclick = function pauseTimer() {
  if (!isPaused) {
    clearInterval(countdown);
    countdown = null;
    isPaused = true;
  }
    
  
  else if (isPaused) {
     alert(`Session ${currentSession} resumed.`);
     startTimer(studyTime, function() {
       alert(`Session ${currentSession} done!`);
       startTimer(breakTime, function() {
         alert("Break timer over! Prep for the next session!")
         currentSession++;
         document.getElementById("timerDisplay").textContent = hoursInput + ":" + minutesInput + ":00";
         if (currentSession <= sessionCount) {
           loopStudy();
        } else {
            alert("All done! Great work!");
      }
  
  })
  })
}
}


// reset button functionality: it resets the timer back to the original user input time.
document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;
  let isPaused = true;
  alert("Timer reset. Click the Resume or Start button to continue.")
}
  
    //confirm if the "motivational quotes" checkbox is checked, then present a motivational quote every 5 minutes in the html box.
if (document.getElementById("motivationalQuotes").checked) {
  function getRandomQuote() {
    const quotes = [
      "Every minute you study is a brick in the foundation of your future.",
      "To win the year, win the months. To win the months, win the days. To win the day, win every minute.",
      "Time is money; the time you spend working is an investment in your future.",
      "Chase your dreams so later you can live your dream life 24/7, not just when you sleep.",
      "Work hard as if you're an idiot, and perform as if you're a genius.",
      "Don't limit your challenges, challenge your limits.",
      "We all make choices, but in the end our choices make us.",
      "Do the best you can until you know better. Then when you know better, do better.",
      "Life is about making an impact, not just an income.",
      "To fail to prepare is to prepare to fail.",
      "You have the chance to progress towards your perfect life every day.",
      "Maybe your mind gives up, but don't let your heart give up.",
      "Prove everyone wrong."
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

