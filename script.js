// study timer: most updated version as of 8/5/2025
document.addEventListener('DOMContentLoaded', function() {
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const pauseButton = document.getElementById('pauseButton');
let hoursInput = document.getElementById('hoursInput').value;
let minutesInput = document.getElementById('minutesInput').value;
let breakMinutesInput = document.getElementById('breakMinutesInput').value;
let breakSecondsInput = document.getElementById('breakSecondsInput').value;
let timerInterval;
let isPaused = false;
let isBreak = false;
})

//these are the controls first for the collapsable sidebar of timer settings:

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document .getElementById("mySidebar").style.height = "0";
}

if (document.getElementById('gamifyCheckbox').checked) {
    // If game mode is checked, set the game mode variable to true
    let gameModeChecked = true;
    document.getElementById("taskLabel").textContent = "Quest List";
    //is it possible to change the text in the placeholder of the input field?
    //answer: yes, it is possible to change the text in the placeholder of the input field.
    document.getElementById("taskInput").placeholder = "enter the quests to complete for today";
}

//......this is just a barrier since my eyes always hurt when I look at code bunched up together ..................

if (document.getElementById('hoursInput').value= "") {
    hoursInput.value = 0;
}
if (document.getElementById('minutesInput').value === "") {
    // If minutes input is empty, set it to 25 minutes by default
    minutesInput.value = 25;
    let studyTime = 25 * 60; // Default study time in seconds
}
else {
    let studyTime = hoursInput.value * 3600 + minutesInput.value * 60
}

if (document.getElementById('breakMinutesInput').value === "") {
    // If break minutes input is empty, set it to 5 minutes by default
    breakMinutesInput.value = 5;
}
if (document.getElementById('breakSecondsInput').value === "") {
    // If break seconds input is empty, set it to 0 seconds by default
    breakSecondsInput.value = 0;
    let breakTime = 5 * 60; // Default break time in seconds
}
else{
    let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
}

//function to update the timer display...

document.getElementById("timerDisplay").textContent = hoursInput.value + ":" + minutesInput.value + ":00";
let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
let countdown = null

document.getElementById("startButton").onclick = function startTimer() {
  if (!countdown) {
    countdown = setInterval(function() {
      time--;
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
      document.getElementById("timerDisplay").textContent = hours.value + ":" + minutes.value + ":" + seconds.value;

    }, 1000);
  }
};

 if (studyTime <= 0) {
        clearInterval(countdown);
        countdown = null;
        let studyTime = hoursInput.value * 3600 + minutesInput.value * 60; //resetting study time back to normal
        if (gameModeChecked) {
          alert("LEVEL UP!! Level 1 Completed" + (sessionNumber.value - 1) + "levels left to go!");
        }
        else {
          alert("Amazing! First session done! " + (sessionNumber.value - 1) + " sessions left to go!");
        }
        isBreak = true
      }

if (isBreak) {
          // Start break timer
          let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
          document.getElementById("timerDisplay").textContent = "Break Time!";
          document.getElementById("timerDisplay").textContent = breakMinutesInput.value + ":" + breakSecondsInput.value;
          startTimer();
          if (breakTime <= 0) {
            clearInterval(countdown);
            countdown = null;
            isBreak = false;
            continueStudying = confirm("Nice, first full cycle, would you like to continue? You can quit at any time by closing the tab or clicking reset.");
          }
        }

if (continueStudying) {
            // Reset study time, now count 2nd, 3rd, etc. study sessions/cycles.
            for (let i = 1; i < 5; i++) {
            let studyTime = hoursInput.value * 3600 + minutesInput.value * 60;
            document.getElementById("timerDisplay").textContent = "Study Time!";
            document.getElementById("timerDisplay").textContent = hoursInput.value + ":" + minutesInput.value + ":00";
            startTimer();

            if (studyTime <= 0) {
                clearInterval(countdown);
                countdown = null;
                isBreak = true;
                //a notification to the user that they have finished studying for this session
                if (gameModeChecked) {
                  alert("Level " + i + "Complete!" + (sessionNumber.value - 1) + " levels! Let's chill a bit before we LOCK IN for the next level.");
                }
                else {
                  alert("Session" + i + " done! " + (sessionNumber.value - 1) + " sessions left to go, but a break first before this cycle is over!");
                }
              }

if (isBreak) {
          // Start break timer

         let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
          document.getElementById("timerDisplay").textContent = "Break Time!";
          document.getElementById("timerDisplay").textContent = breakMinutesInput.value + ":" + breakSecondsInput.value;
          startTimer();
            if (breakTime <= 0) {
                clearInterval(countdown);
                countdown = null;
                isBreak = false;
                
              }


            }
        }
    }

    //reset button functionality: it resets one level/study session, not the whole game.
document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  resetConfirmed = confirm("Are you sure you want to reset the timer? This will reset the current study session and break time.");
  if (resetConfirmed) {
    countdown = null;
    isPaused = false;
    isBreak = false;
    document.getElementById("timerDisplay").textContent = hoursInput.value + ":" + minutesInput.value + ":00";
    let studyTime = hoursInput.value * 3600 + minutesInput.value * 60; // Resetting study time back to normal
    let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value; // Resetting break time back to normal
    }
}

  // pause button functionality: it pauses the timer, but does not reset it.
document.getElementById("pauseButton").onclick = function pauseTimer() {
  if (!isPaused) {
    clearInterval(countdown);
    countdown = null;
    let isPaused = true;
  }
}
  // when the start button is clicked again, it will run the timer countdown function, right?
  //Answer = yes, it will continue from where it left off.
   
  
    //confirm if the "motivational quotes" checkbox is checked, then present a motivational quote every 5 minutes in the html box.
if (document.getElementById("motivationalQuotes").checked) {
   if (gameModeChecked) {
     setInterval(function getRandomQuote() {
        const quotes = [
            "In everything, you must learn the rules of the game, and then play better than anyone else.",
            "Failure isn't game over, it's just try again with more experience.",
            "Get that XP, and level up!",
            "When life gets hard it means you've reached a new level.",
            "You can't win if you don't play.",
            "We all make choices, but in the end, our choices make us.",
            "...the harder you have to try, the more points you deserve!"
        ]
         return quotes[Math.floor(Math.random() * quotes.length)]}, 1000 * 60 * 5)
      }
      else {
        getQuote = setInterval(function getRandomQuote() {
        const quotes = [
            "The one who works is the talented one.",
            "Every minute you study is a brick in the foundation of your future.",
            "To win the year, win the months. To win the months, win the days. To win the day, you gotta win every minute.",
            "Opportunites don't happen, you create them.",
            "Time is money, because the time you spend working is an investment in your future.",
            "Work hard chasing your dreams so in the future you can live your dream life 24/7, not just when you sleep.",
            "Show up as the person you want to be.",
            "Study as if you're an idiot, and solve problems as if you're a genius.",
            "Your life is the average of how you spend every waking moment.",
        ]
         return quotes[Math.floor(Math.random() * quotes.length)]}, 1000 * 60 * 5)
      }
    }

// to do list portion...


    
