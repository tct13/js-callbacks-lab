// your code here:

var timer = document.querySelector("#timer");
var seconds = 0;
var timerId = 0;


var startButton = document.querySelector("#start");
startButton.addEventListener("click", start)

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset)

var pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", pause)



function start() {
  timerId = window.setInterval(updateTime, 1000);
}


function reset() {
  window.clearInterval( timerId );
  seconds = 0;
  timer.textContent = "Stop Watch";
}


function pause() {
  window.clearInterval( timerId );
  timer.textContent = "Time elapsed: " + seconds + " seconds";
}


function updateTime() {
  seconds ++;
  timer.textContent = "Time elapsed: " + seconds + " seconds";
}
