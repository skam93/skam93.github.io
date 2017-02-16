var square = document.querySelectorAll(".square");
var color = printColor(6);
var reset = document.getElementById("resetBtn");
var btnBack = document.querySelector(".btnBack");
// var colors = ["rgb(255, 0, 123)","rgb(255, 255, 123)","rgb(0, 255, 123)","rgb(255, 0, 123)","rgb(255, 0, 123)","rgb(255, 0, 123)"];

function showColor(){
  color = printColor(6);
  for(var i = 0; i < square.length; i++){
    square[i].style.background = color[i];
  }
}

//show colors
showColor();
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
//create an array of colors
function printColor(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}
// var printColor = function(num){
//
// }
reset.addEventListener("click", function(){
  showColor();
  color = printColor(1);
  reset.style.background = color;
});
