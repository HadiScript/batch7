document.addEventListener("DOMContentLoaded", function () {
  var count = 0;

  var incBtn = document.getElementById("inc");
  var counterDisplay = document.getElementById("counter");

  incBtn.addEventListener("click", function () {
    count++;
    counterDisplay.innerHTML = count;
  });
});

// JS console
// React With JS

// Function Arrow
// modules
// spread
// loop
// callback
