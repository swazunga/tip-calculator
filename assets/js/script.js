var numPeople = document.querySelector("#numPeople");
var billAmount = document.querySelector("#billAmount");
var btn5El = document.querySelector("#btn5");
var btn10El = document.querySelector("#btn10");
var btnsDiv = document.querySelector("#btnsDiv");
var tipTotal = document.querySelector("#tipTotal");
var total = document.querySelector("#total");
var btnReset = document.querySelector("#btnReset");

var tipSelect = document.getElementsByName("tip");

for (var i = tipSelect.length; i--; ) {
  tipSelect[i].onchange = function () {
    if (numPeople.value === "") {
      var totalTip = billAmount.value * this.value;
      var billSplit = parseInt(billAmount.value) + parseInt(totalTip);
      total.textContent = "$" + billSplit.toFixed(2);
      tipTotal.textContent = "$" + totalTip.toFixed(2);
    } else {
      var totalTip = billAmount.value * this.value;
      var billSplit =
        (parseInt(billAmount.value) + parseInt(totalTip)) / numPeople.value;
      total.textContent = "$" + billSplit.toFixed(2);
      var tipSplit = totalTip / numPeople.value;
      tipTotal.textContent = "$" + tipSplit.toFixed(2);
    }
  };
}

function clearForm() {
  billAmount.value = "";
  numPeople.value = "";
  tipSelect = "";
  total.textContent = "";
  tipTotal.textContent = "";
}

btnReset.addEventListener("click", clearForm);

// btn5El.addEventListener("click", function () {
//   var tipAmount = parseInt(billAmount.value * btn5);
//   var totalPlus = (parseInt(billAmount.value) + tipAmount) / numPeople.value;
//   total.textContent = "$" + totalPlus.toFixed(2);
//   tipTotal.textContent =
//     "$" + ((btn5 * billAmount.value) / numPeople.value).toFixed(2);
//   console.log(billAmount.value);
//   if (numPeople.value === "") {
//     var totalPlus = parseInt(billAmount.value) + tipAmount;
//     total.textContent = "$" + totalPlus.toFixed(2);
//     tipTotal.textContent = "$" + (btn5 * billAmount.value).toFixed(2);
//   }
// });

// btn10El.addEventListener("click", function () {
//   var tipAmount = parseInt(billAmount.value * btn10);
//   var totalPlus = (parseInt(billAmount.value) + tipAmount) / numPeople.value;
//   total.textContent = "$" + totalPlus.toFixed(2);
//   tipTotal.textContent =
//     "$" + ((btn10 * billAmount.value) / numPeople.value).toFixed(2);
//   console.log(btn10);
//   if (numPeople.value === "") {
//     var totalPlus = parseInt(billAmount.value) + tipAmount;
//     total.textContent = "$" + totalPlus.toFixed(2);
//     tipTotal.textContent = "$" + (btn10 * billAmount.value).toFixed(2);
//   }
// });
