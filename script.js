const timer = {
   startBtn: document.getElementById("startButton"),
   resetBtn: document.getElementById("resetButton"),
   settingsBtn0: document.getElementById("closeButton"),
   settingsBtn1: document.getElementById("openButton"),
   display: document.getElementById("timerDisplay"),
};

let studyInput = 60 * 45;
let breakInput = 300 * 3;
let studyTime = studyInput;
let breakTime = breakInput;
let isBreak = false;

updateDisplay(studyInput);


function updateDisplay(time) {
   let hrs = Math.floor(time / 3600);
   let mins = Math.floor((time % 3600) / 60);
   let secs = time % 60; 
   timer.display.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
   
}


function runTimer(time, callback) {
countdown = setInterval(() => {
   time--;
   updateDisplay(time);
   if (!isBreak) {
      studyTime = time; //sync studyTime with countdown time
   }
   else {
      breakTime = time;
   }
  
   if (time <= 0) {
      clearInterval(countdown);
      isBreak = !isBreak;
      if (callback) callback();
         }
      }, 1000);
   
}


timer.resetBtn.onclick = function() {
  timer.startBtn.textContent = "Start";
  if (!isBreak) {
    updateDisplay(studyInput);
    studyTime = studyInput;
  }
  else {
    updateDisplay(breakInput);
    breakTime = breakInput;
  }
 
}


timer.startBtn.onclick = function() {
   if (timer.startBtn.textContent === "Start") {
      timer.startBtn.textContent = "Pause";
      runTimer(studyTime, function() {
         studyTime = studyInput; //reset values
         breakTime = breakInput;
         isBreak = true;
         updateDisplay(breakInput);
         runTimer(breakTime, function() {
            alert("All done!");
            timer.startBtn.textContent = "Start"
         });
      });
   }
   else {
      timer.startBtn.textContent = "Start";
      clearInterval(countdown);
   }
   
}


let sidebar = document.getElementById("mySettings");

timer.settingsBtn1.onclick = function() {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  }
  else {
    sidebar.style.display = "none"
  }
  
}

timer.settingsBtn0.onclick = function() {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  }
}
