const timer = {
   startBtn: document.getElementById("startButton"),
   resetBtn: document.getElementById("resetButton"),
   display: document.getElementById("timerDisplay"),
};

let studyTime = 25 * 60 

function updateDisplay(time) {
   hrs = Math.floor(studyTime / 3600);
   mins = Math.floor((studyTime % 3600) / 60);
   secs = studyTime % 60; 
   timer.display.textContent = `${hrs.padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
   
}

timer.startBtn.onclick = function() {
   if (timer.startBtn.textContent === "Start" || studyTime <= 0) {
      timer.startBtn.textContent = "Pause";
      countdown = setInterval(() => {
         studyTime--;
         updateDisplay(studyTime);
         if (studyTime <= 0) {
            clearInterval(countdown);
            alert("Time's up! Take a break.");
         }
      }
      , 1000);
   }
   else {
      timer.startBtn.textContent = "Start";
      clearInterval(countdown);
   }
}

