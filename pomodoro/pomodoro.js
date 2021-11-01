const colon = document.querySelector(".colon");
const colorPicker = document.querySelector("#colorPicker");
const expand = document.querySelector(".expand");
const menuLi = document.querySelector(".menu-list");
const pauseBtn = document.querySelector(".pause-btn");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const resetSound = document.querySelector(".reset-sound");
const startSound = document.querySelector(".start-sound");
const pauseSound = document.querySelector(".pause-sound");
const minute = document.querySelector(".hour");
const second = document.querySelector(".minute");
const cycleCount = document.querySelector(".cycle-count");
const studyTime = document.querySelector(".study-time-left");
const breakTime = document.querySelector(".break-time-left");
const doneSound = document.querySelector('.done-sound')
let studyDuration = document.querySelector('.study-duration-time')
let breakDuration = document.querySelector('.break-duration-time')
const setTime = document.querySelector('.set-time-click')

let startTimer;
let studying = true
let setMinute = 25
let setSecond = 0;
let setBreakMinute = 10
let setBreakSecond = 0;

studyDuration.value = 25
breakDuration.value = 5
minute.textContent = studyDuration.value
second.textContent = 00


expand.addEventListener("click", function () {
  expand.classList.toggle("flipexpand");
  menuLi.classList.toggle("show");
});

pauseBtn.addEventListener('click', function() {
  pauseTime()
  startTimer = undefined
})
startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);
colorPicker.addEventListener("change", changeColor);
colorPicker.addEventListener("mousemove", changeColor);
setTime.addEventListener('click', resetTime)



function changeColor() {
  document.documentElement.style.setProperty("--color", this.value);
}

function startTime() {
  startSound.currentTime = 0;
  startSound.play();
  if (startTimer === undefined) {
    startTimer = setInterval(pomodoro, 1000);
  } else {
    alert("Timer already started");
  }
}

function pauseTime() {
  clearInterval(startTimer)
  pauseBtn.currentTime = 0;
  pauseSound.play();
}

function resetTime() {
  clearInterval(startTimer)
  startTimer = undefined
  resetBtn.currentTime = 0;
  resetSound.play();
  second.textContent = 0
  minute.textContent = studyDuration.value;
}

function pomodoro() {

  colon.classList.toggle("no-colon");
  if(studying){
    studyTime.classList.remove('study-time-hide')
  }
  if (second.textContent != 0) {
    second.textContent--;
  } else if (minute.textContent != 0 && second.textContent == 0) {
    second.textContent = 59;
    minute.textContent--;
  }
  
  if (minute.textContent == 0 && second.textContent == 0 && studying == true) {
    breakTime.classList.remove("break-time-hide");
    studyTime.classList.add("study-time-hide");
    second.textContent = 0;
    minute.textContent = breakDuration.value;
    studying = false
    doneSound.play()
  }
  if (minute.textContent == 0 && second.textContent == 0 && studying == false){
    breakTime.classList.add("break-time-hide");
    minute.textContent = studyDuration.value;
    second.textContent = 0;
    studying = true
    cycleCount.textContent++
    startSound.play()
  }

}

