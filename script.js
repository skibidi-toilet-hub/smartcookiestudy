const timer = {
   startBtn: document.getElementById("startButton"),
   resetBtn: document.getElementById("resetButton"),
   display: document.getElementById("timerDisplay"),
};

let studyTime = 1500;

function updateDisplay() {
   let hrs = Math.floor(studyTime / 3600);
   let mins = Math.floor((studyTime % 3600) / 60);
   let secs = studyTime % 60; 
   timer.display.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
   
}

timer.startBtn.onclick = function() {
   if (timer.startBtn.textContent === "Start") {
      timer.startBtn.textContent = "Pause";
      countdown = setInterval(() => {
         studyTime--;
         updateDisplay();
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

