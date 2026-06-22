const timer = {
   startBtn: document.getElementById("startButton"),
   resetBtn: document.getElementById("resetButton"),
   display: document.getElementById("timerDisplay"),
};

let studyTime = 60;
let breakTime = 30;
let isBreak = false;
timer.display.textContent = "00:01:00";


function updateDisplay(time) {
   let hrs = Math.floor(time / 3600);
   let mins = Math.floor((time % 3600) / 60);
   let secs = time % 60; 
   timer.display.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
   
}


function runTimer(time) {
countdown = setInterval(() => {
   time--;
   updateDisplay(time);
   if (time <= 0) {
      clearInterval(countdown);
      isBreak = !isBreak;
         }
      });
   
}

startBtn.onclick = function() {
   if (startBtn.textContent === "Start") {
      startBtn.textContent = "Pause";
      if (!isBreak) {
         runTimer(studyTime);
      }
      else {
         runTimer(breakTime);
      }

   }
   else {
      startBtn.textContent = "Start";
      clearInterval(countdown);
   }
   
}



















