var exercises = [
  "Scissor kick",
  "Leg raises",
  "Wipers",
  "Reverse crunch",
  "Rest and strech",
  "Sit up",
  "Crunch",
  "Toe touches",
  "Foot crunch",
  "Rest and strech",
  "Leg raises",
  "Crunch",
  "Plank",
];
var duration = 30;
var mainh1 = document.getElementById("main");
var timer = document.getElementById("timer");
var button = document.getElementById("btn");
var i = 0;

function startWorkout() {
  button.disabled = true;
  startTimer();
  if (i >= exercises.length) {
    mainh1.innerHTML = "Workout done!";
    timer.innerHTML = "0s";
    button.disabled = false;
    return;
  }
}

function startTimer() {
  let seconds = duration;
  if (exercises[i] === "Plank") seconds *= 2;
  var x = setInterval(function () {
    mainh1.innerHTML = exercises[i];
    timer.innerHTML = seconds + "s";
    seconds--;
    if (seconds < 0) {
      clearInterval(x);
      i++;
      startWorkout();
    }
  }, 1000);
}
