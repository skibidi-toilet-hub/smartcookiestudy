document.addEventListener('DOMContentLoaded', function() {
    const timer = {
        timerDisplay: document.getElementById('timerDisplay'),
        startButton: document.getElementById('startButton'),
        resetButton: document.getElementById('resetButton'),
        pauseButton: document.getElementById('pauseButton')
    }
let isPaused = true;
let isBreak = false;
})

function getRandomQuote() {
    const quotes = [
      "Every minute you study is a brick in the foundation of your future.",
      "To win the year, win the months. To win the months, win the days. To win the day, win every minute.",
      "Time is money; the time you spend working is an investment in your future.",
      "Chase your dreams so later you can live your dream life 24/7, not just when you sleep.",
      "Don't limit your challenges, challenge your limits.",
      "We all make choices, but in the end our choices make us.",
      "Do the best you can until you know better. Then when you know better, do better.",
      "Life is about making an impact, not just an income.",
      "To fail to prepare is to prepare to fail.",
      "You have the chance to move towards your perfect life every day.",
      "If mind gives up, but don't let your heart give up.",
      "Prove everyone wrong."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  // QUOTES ⬆️  CONTROLS + REST ⬇️
function openNav() {
    sidebar.style.visibility = 'visible' ;
  }
 
function closeNav() {
  sidebar.style.visibility = 'hidden';
}

document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;

let countdown = null
let studyTime = (hrAmount * 3600) + (minAmount * 60);
let breakTime = (brkMinAmount * 60) + brkSecondsAmount;

//solely just updating the clock display
function updateDisplay(time)  {
  let hoursLeft = Math.floor(time / 3600);
  let minutesLeft = Math.floor((time % 3600) / 60);
  let secondsLeft = time % 60;
  document.getElementById("timerDisplay").textContent =
    `${hoursLeft.toString().padStart(2,'0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
}

function startTimer(time) {
  if (countdown === null || isPaused === true) {
    countdown = setInterval(function() {
      updateDisplay(time);
      time--;
      if (time <= 0) {
         clearInterval(countdown);
         alert("Timer done!")
       }
      }, 1000);
    }
    else {
      alert("Timer already active!")
    }
}

function loopTimer() {
  for (i = 1; i < sessionNumber ; i++) {
    document.getElementById("notifBox") = "session " + i + " starting! get ready!"
    startTimer(studyTime)
    document.getElementById("notifBox") = "study time over! break time!"
    startTimer(breakTime)
    document.getElementById("notifBox") = "break time over!"
  }
  document.getElementById("notifBox") = "all sessions done! :D GREAT WORK"
}

 document.getElementById("startButton").onclick = function TIMER() {
  const hoursInput = document.getElementById('hoursInput').value.trim();
  const minutesInput = document.getElementById('minutesInput').value.trim();
  const breakMinutesInput = document.getElementById('breakMinutesInput').value.trim();
  const sessionInput = document.getElementById("sessionCountInput").value.trim();
  let sessionNumber = sessionInput === "" ? 4 : parseInt(sessionInput, 10);
  let hrAmount =  hoursInput === "" ? 0 : parseInt(hoursInput, 10);
  let minAmount = minutesInput === "" ? 25 : parseInt(minutesInput, 10);
  let brkMinAmount = breakMinutesInput === "" ? 5 : parseInt(breakminutesInput, 10);
  let brkSecondsAmount = breakSecondsInput === ""? 0 : parseInt(breakSecondsInput, 10)
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

document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;
  let isPaused = true;
  alert("Timer reset. Click the Resume or Start button to continue.")
}

  function getRandomQuote() {
    const quotes = [
      "Every minute you study is a brick in the foundation of your future.",
      "To win the year, win the months. To win the months, win the days. To win the day, win every minute.",
      "Time is money; the time you spend working is an investment in your future.",
      "Chase your dreams so later you can live your dream life 24/7, not just when you sleep.",
      "Don't limit your challenges, challenge your limits.",
      "We all make choices, but in the end our choices make us.",
      "Do the best you can until you know better. Then when you know better, do better.",
      "Life is about making an impact, not just an income.",
      "To fail to prepare is to prepare to fail.",
      "You have the chance to move towards your perfect life every day.",
      "If mind gives up, but don't let your heart give up.",
      "Prove everyone wrong."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  document.getElementById("quoteBox").textContent = getRandomQuote();


 



