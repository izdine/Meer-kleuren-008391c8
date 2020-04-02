
var  button = document.querySelectorAll("button");
document.querySelector('button')

button.onclick = myFunction;

var colorWell
var defaultColor = "#0000ff";
window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  var achtergrondkleur= document.getElementsByTagName("BODY")[0] ;

  if (achtergrondkleur) {
    achtergrondkleur.style.backgroundColor = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("achtergrondkleur").forEach(function(achtergrondkleur) {
    achtergrondkleur.style.backgroundColor = event.target.value;
  });
}
function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = event.target.value;
}
