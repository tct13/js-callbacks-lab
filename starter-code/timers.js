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
  var idValue = window.setInterval(updateTime, 1000);

}




function reset() {

  window.clearInterval( idValue );
//??? how to use the IDvalue here?????



timer.textContent = "Stop Watch";



}




function pause() {
  timer.textContent = "Time elapsed: 1";

  window.clearInterval()
//??? stop

}


function updateTime() {

  seconds ++;
  timer.textContent = "Time elapsed: " + seconds + " seconds";

}







// function init () {
//
// var body = document.querySelector("body");
// var h2 = document.createElement("h2");
// var i = 0;
//
// body.appendChild(h2);
//
//
//
// function createH1 () {
//   var h1 = document.createElement("h1");
//   h1.textContent = "Hello World";
//   body.appendChild(h1);
// //   console.log(h1.textContent);
//
//   window.setInterval(secCount, 1000);
// }
//
//
//
// function secCount () {
//   h2.textContent = "WDI " + i;
//   i++;
// //   console.log("WDI " + h2);
// }
//
//
// window.setTimeout(createH1, 5000);
//
//
// }
//
//
// init();
