const timer = {
  startBtn: document.getElementById("startButton"),
  resetBtn: document.getElementById("resetButton"),
  settingsBtn0: document.getElementById("closeButton"),
  settingsBtn1: document.getElementById("openButton"),
  display: document.getElementById("timerDisplay"),
  notifBox: document.getElementById("messageBox"),
  toDo: document.getElementById("todoList")
};

let studyInput = 25 * 60;
let breakInput = 5 * 60;
let studyTime = studyInput;
let breakTime = breakInput;
let hoursElement = document.getElementById("hoursInput");
let minutesElement = document.getElementById("minutesInput");
let brkMinsElement = document.getElementById("breakMinutesInput");
let brkSecsElement = document.getElementById("breakSecondsInput");
let isBreak = false;

updateDisplay(studyInput);

function updateDisplay(time) {
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let secs = time % 60;
  timer.display.textContent = `${hrs
    .toString()
    .padStart(1, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function runTimer(time, callback) {
  countdown = setInterval(() => {
    time--;
    updateDisplay(time);
    if (!isBreak) {
      studyTime = time; //sync studyTime with countdown time
    } else {
      breakTime = time;
    }

    if (time <= 0) {
      clearInterval(countdown);
      isBreak = !isBreak;
      if (callback) callback();
    }
  }, 1000);
}

timer.resetBtn.onclick = function () {
  timer.startBtn.textContent = "Start";
  if (!isBreak) {
    updateDisplay(studyInput);
    studyTime = studyInput;
  } else {
    updateDisplay(breakInput);
    breakTime = breakInput;
  }
};

let sidebar = document.getElementById("mySettings");

timer.settingsBtn1.onclick = function () {
  //1 = open, or ON to open settings
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};

timer.settingsBtn0.onclick = function () {
  //0 = closed, or OFF to close settings
  let hrsInput =
    hoursElement.value.trim() === ""
      ? 0
      : parseInt(hoursElement.value.trim(), 10);
  let minsInput =
    minutesElement.value.trim() === ""
      ? 25
      : parseInt(minutesElement.value.trim(), 10);
  let brkMinsInput =
    brkMinsElement.value.trim() === ""
      ? 5
      : parseInt(brkMinsElement.value.trim(), 10);
  let brkSecsInput =
    brkSecsElement.value.trim() === ""
      ? 0
      : parseInt(brkSecsElement.value.trim(), 10);
  studyInput = hrsInput * 3600 + minsInput * 60;
  breakInput = brkMinsInput * 60 + brkSecsInput;
  updateDisplay(studyInput);
  studyTime = studyInput;
  breakTime = breakInput;
  sidebar.style.display = "none";
};


let buttons = document.getElementsByTagName('button');
let display = document.getElementById('timerDisplay');

document.getElementById("glass").onclick =
  function() {
  let buttonColor = window.getComputedStyle(buttons[0]).getPropertyValue("background-color");
  let newColor = buttonColor === "rgb(255, 255, 255)" ? "rgba(245, 245, 255, 0.5)" : "rgb(255, 255, 255)";

      
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = newColor;
  }
  
  if (buttonColor === "rgb(255, 255, 255)") { //glass mode inactive
     display.style.color = "rgba(245, 245, 255, 0.5)";
     display.style.textShadow = "4px 4px 16px rgba(0, 0, 0, 0.2)";
     display.style.mixBlendMode = "overlay";
  } else { //glass mode active
     display.style.color = "rgb(255, 255, 255)";
     display.style.textShadow = "none";
     display.style.mixBlendMode = "normal";
  }
  
  };
  
  
//actual click 

timer.startBtn.onclick = function () {
  if (timer.startBtn.textContent === "Start") {
    timer.startBtn.textContent = "Pause";
    runTimer(studyTime, function () {
      studyTime = studyInput; //reset values
      breakTime = breakInput;
      isBreak = true;
      updateDisplay(breakInput);
      runTimer(breakTime, function () {
        alert("One session done! Please return and start a new session, or exit.");
        timer.startBtn.textContent = "Start";
      });
    });
  } else {
    timer.startBtn.textContent = "Start";
    clearInterval(countdown);
  }
};


let backgroundOptions = document.querySelectorAll(".background > img");

for (let i = 0; i < backgroundOptions.length; i++) {
    backgroundOptions[i].addEventListener("click", function() {
        let imageUrl = this.getAttribute("src");
        document.body.style.backgroundImage = `url(${imageUrl})`;
    });
}

