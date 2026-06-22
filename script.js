const timer = {
   startBtn: document.getElementById("startButton"),
   resetBtn: document.getElementById("resetButton"),
   display: document.getElementById("timerDisplay"),
};

let studyInput = 60;
let breakInput = 30;
let studyTime = studyInput;
let breakTime = breakInput;
let isBreak = false;
timer.display.textContent = "00:01:00";


function updateDisplay(time) {
   let hrs = Math.floor(time / 3600);
   let mins = Math.floor((time % 3600) / 60);
   let secs = time % 60; 
   timer.display.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


function runTimer(time, onFinish) {
countdown = setInterval(() => {
   time--;
   updateDisplay(time);
   if (!isBreak) {
      studyTime = time;
   }
   else {
      breakTime = time;
   }
   
   if (time <= 0) {
      clearInterval(countdown);
      isBreak = !isBreak;
      if (onFinish) onFinish;
         }
      }, 1000);
   
}

timer.startBtn.onclick = function() {
   if (timer.startBtn.textContent === "Start") {
      timer.startBtn.textContent = "Pause";
      runTimer(studyTime, function() {
         runTimer(breakTime, function() {
            studyTime = studyInput; //reset values
            breakTime = breakInput;
            isBreak = false;
            updateDisplay(studyTime);
         });
      });
   }
   else {
      timer.startBtn.textContent = "Start";
      clearInterval(countdown);
   }
   
}



















