var numPeople = document.querySelector("#numPeople");
var billAmount = document.querySelector("#billAmount");
var btn5 = document.querySelector("#btn5");

function doMath(event) {
  var total = document.querySelector("#total");
  btn5 = 1.05;
  total.textContent = "$" + (billAmount.value * btn5) / numPeople.value;
}

btn5.addEventListener("click", function (event) {
  doMath();
});
numPeople.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    doMath();
  }
});
