document.addEventListener('DOMContentLoaded', function() {
    const timer = {
        timerDisplay: document.getElementById('timerDisplay'),
        startButton: document.getElementById('startButton'),
        resetButton: document.getElementById('resetButton'),
    }
})

let countdown = null
let currentSession = 1
let studyInput = 0
let breakInput = 0
let studyTime = 0 
let breakTime = 0 
let isBreak = false

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

//determining variabless...
let studyInput = (hrAmount * 3600) + (minAmount * 60); //backup times for inputting 
let breakInput = (brkMinAmount * 60) + brkSecondsAmount;

let studyTime = studyInput
let breakTime = breakInput

//solely just updating the clock display
function updateDisplay(time)  {
  let hoursLeft = Math.floor(time / 3600);
  let minutesLeft = Math.floor((time % 3600) / 60);
  let secondsLeft = time % 60;
  document.getElementById("timerDisplay").textContent =
    `${hoursLeft.toString().padStart(2,'0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
}

function startTimer(time, callback) {
  if (countdown === null) {
    countdown = setInterval(function() {
      updateDisplay(time);
      time--;
      if (time <= 0) {
         clearInterval(countdown)
         countdown = null
         if (callback) callback();
       }
      }, 1000);
    }
}

function loopStudy() {
    if (currentSession > sessionNumber) {
        document.getElementById("notifBox").textContent = "all sessions done! :D GREAT WORK!"
        currentSession = 0
        return;
    }
    
    if (!isBreak) {
        studyTime = studyInput;
        //not break, so therefore is study
        document.getElementById("notifBox").textContent = `session ${currentSession} starting! get ready!`;
        startTimer(studyTime, function() {
            isBreak = true;
            loopStudy();
        });
  }
    else {
        breakTime = breakInput;
        //must be breaktime now...
        document.getElementById("notifBox").textContent = "study time over! break time!";
        startTimer(breakTime, function() {
            isBreak = false;
            currentSession += 1;
            loopStudy();
        });
    }
}

function resumeTimer() {
    if (isBreak) {
        startTimer(breakTime, function() {
            isBreak = false;
            currentSession += 1;
            loopStudy();
        });
    }
    else {
        startTimer(studyTime, function() {
            isBreak = true;
            loopStudy();
        });
    }
}
          

      
 document.getElementById("startButton").onclick = function timer() {
  if (countdown === null) { 
      //if countdown is null, this indicates it's inactive, so we start it. (2 options: resume/start over)
      startButton.textContent = "pause";
      
      if (currentSession > 0) {
          //values already entered, timer already active on a session 
          resumeTimer();
      } else { //no existing session yet. 
          //need to start a new session lol
            const hoursInput = document.getElementById('hoursInput').value.trim();
            const minutesInput = document.getElementById('minutesInput').value.trim();
            const breakMinutesInput = document.getElementById('breakMinutesInput').value.trim();
            const breaSecondsInput = document.getElementById('breakSecondsInput').value.trim();
            const sessionInput = document.getElementById("sessionCountInput").value.trim();
            //study
            sessionNumber = sessionInput === "" ? 4 : parseInt(sessionInput, 10);
            let hrAmount =  hoursInput === "" ? 0 : parseInt(hoursInput, 10);
            let minAmount = minutesInput === "" ? 25 : parseInt(minutesInput, 10);
            //break
            let brkMinAmount = breakMinutesInput === "" ? 5 : parseInt(breakMinutesInput, 10);
            let brkSecondsAmount = breakSecondsInput === ""? 0 : parseInt(breakSecondsInput, 10);
            //quotes
            getRandomQuote();
            const quoteInterval = setInterval(getRandomQuote, 5 * 60 * 1000)
            currentSession = 1
            loopStudy();
    
    } 
  } else { 
      //countdown is NOT null, therefore it is active. this means we should pause it.
         clearInterval(countdown);
         countdown = null;
         startButton.textContent = "start"; //need to wait until unpaused again
     }
 }
 

document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  document.getElementById("timerDisplay").textContent = `${hrAmount}:${minAmount.toString().padStart(2, '0')}:00`;
  alert("Timer reset. Click the Start button to continue.")
}





 



