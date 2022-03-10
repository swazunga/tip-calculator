var numPeople = document.querySelector("#numPeople");
var billAmount = document.querySelector("#billAmount");
var btn5 = document.querySelector("#btn5");

function doMath(event) {
  var total = document.querySelector("#total");

  total.textContent = "$" + billAmount.value / numPeople.value;
}

numPeople.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    doMath();
  }
});
