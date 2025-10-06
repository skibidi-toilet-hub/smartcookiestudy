document.addEventListener('DOMContentLoaded', function() {
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const pauseButton = document.getElementById('pauseButton');
 let taskList = document.getElementById("taskList");
let hoursInput = document.getElementById('hoursInput').value;
let minutesInput = document.getElementById('minutesInput').value;
let breakMinutesInput = document.getElementById('breakMinutesInput').value;
let breakSecondsInput = document.getElementById('breakSecondsInput').value;
let isPaused = false;
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

//......this is just a barrier since my eyes always hurt when I look at code bunched up together ..................

if (document.getElementById('hoursInput').value= "") {
    hoursInput.value = 0;
}
if (document.getElementById('minutesInput').value = "") {
    // If minutes input is empty, set it to 25 minutes by default
    minutesInput.value = 25;
    let studyTime = 25 * 60; // Default study time in seconds
}
else {
    let studyTime = hoursInput.value * 3600 + minutesInput.value * 60
}

if (document.getElementById('breakMinutesInput').value === "") {
    breakMinutesInput.value = 5;
}
if (document.getElementById('breakSecondsInput').value === "") {
    breakSecondsInput.value = 0;
    let breakTime = 5 * 60;
}
else{
    let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
}

//function to update the timer display...

document.getElementById("timerDisplay").textContent = hoursInput.value + ":" + minutesInput.value + ":00";
let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
let countdown = null

function startTimer(studyTime, onEnd) {
  if (!countdown) {
    countdown = setInterval(function() {
      studyTime--;
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
      document.getElementById("timerDisplay").textContent = hours.value + ":" + minutes.value + ":" + seconds.value;

    }, 1000);
  }
    if (studyTime <= 0) {
        clearInterval(countdown);
        countdown = null;
        let studyTime = hoursInput.value * 3600 + minutesInput.value * 60; 
          alert(`Amazing! Session ${i} done! ${sessionNumber.value - 1} sessions left after we take a break!`);
        isBreak = true
      }
      if (onEnd) onEnd();
    }

document.getElementById("startButton").onclick = 
function loopTimer() {
  for (let i = 0; i < 5; i++) {
    startTimer(studyTime, function() {
      alert(`Amazing, session ${i+1} done! Break time, then ${sessionNumber.value - (i+1)} more sessions left!`);
      clearInterval(countdown);
      let breakTime = breakMinutesInput.value * 60 + breakSecondsInput.value;
          document.getElementById("timerDisplay").textContent = "Break Time!";
          document.getElementById("timerDisplay").textContent = breakMinutesInput.value + ":" + breakSecondsInput.value;
      startTimer(breakTime, function() {
        alert("Break over! Back to study, you got this!")
         clearInterval(countdown);
            countdown = null;
          });
});

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
// reset button functionality: it resets the timer back to the original user input time.
document.getElementById("resetButton").onclick = function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  document.getElementById("timerDisplay").textContent = hoursInput.value + ":" + minutesInput.value + ":00";
  let isPaused = false;
}
  
    //confirm if the "motivational quotes" checkbox is checked, then present a motivational quote every 5 minutes in the html box.
if (document.getElementById("motivationalQuotes").checked) {
   setInterval(function getRandomQuote() {
        const quotes = [
            "The one who works is the talented one.",
            "Every minute you study is a brick in the foundation of your future.",
            "To win the year, win the months. To win the months, win the days. To win the day, you gotta win every minute.",
            "Time is money, because the time you spend working is an investment in your future.",
            "Work hard chasing your dreams so later you can live your dream life 24/7, not just when you sleep.",
            "Grind as if you're an idiot, and perform as if you're a genius.",
            "Don't limit your challenges, challenge your limits.",
            "We all make choices, but in the end our choices make us.",
        ]
         return quotes[Math.floor(Math.random() * quotes.length)]}, 1000 * 60 * 5)
         document.getElementById("quoteBox").textContent = getRandomQuote();
      }
    else{
      document.getElementById("quoteBox").textContent = `Session ${i+1}/${sessionNumber.value}`
    }

// to do list portion...enter in tasks in a list depending on user input
document.getElementById("todoBtn").onclick = openTodos();
document.getElementsById("closebtn").onclick = closeTodos();

function openTodos() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("mySidebar").style.height = "100%";
}

function closeTodos() {
  document.getElementById("mySidebar").style.width = "0";
  document .getElementById("mySidebar").style.height = "0";
}

document.getElementbyId("addTaskBtn").onclick = function addTask() {
  let listElement = document.createElement("ul");
  let listCheckBox = document.createElement("input");
  listCheckBox.type = "checkbox";
  taskLabel = document.createElement("span");
  taskLabel.textContent = document.getElementById("taskInput").value;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.id = "deleteBtn";
  let focusBtn = document.createElement("button");
  focusBtn.textContent = "Focus on this!"
  focusBtn.id = "focusBtn";
  if (taskInput.value === "") {
    alert("You must enter a task first!");
    return false; // Prevent form submission
  }

  taskList.appendChild(listCheckBox);
  taskList.appendChild(taskLabel);
  taskList.appendChild(listElement);
  taskList.appendChild(deleteBtn);
  taskList.appendChild(focusBtn);

   listCheckBox.addEventListener("change", function() {
    if (listCheckBox.checked) {
      taskLabel.style.textDecoration = "line-through";
      taskLabel.style.color = "grey";
      deleteBtn.disabled = false;
    } else {
      taskLabel.style.textDecoration = "none";
      taskLabel.style.color = "black";
      deleteBtn.disabled = true;
    }
  });

  taskInput.value = ""; // Clear input field after adding
  return false; // Prevent form submission
  const checked = listCheckBox.checked;
}

//if the number of checkboxes exceeds 5, then alert the user that no more tasks can be added until some are checked off.
if (taskList.children.length > 5) {
  alert("You can only enter a minimum of 5 tasks. Try deleting your tasks with the red X button next to each task after checking them off.");
  document.getElementById("addTaskBtn").disabled = true;
  document.getElementById("taskInput").placeholder = "no more missions for now!";
}

document.getElementById("deleteBtn").onclick = function deleteTask() {
  taskList.removeChild(listElement);
  document.getElementById("deleteBtn").disabled = true;
}

document.getElementById("focusBtn").onclick = function focusTask() {
  taskLabel.style.color = "green";
  taskLabel.style.fontWeight = "bold";
  taskLabel.style.fontSize = "larger";
  taskLabel.textContent = "‼️" + taskLabel.textContent + "‼️";
  let focusTask = taskLabel.textContent;
}




    

