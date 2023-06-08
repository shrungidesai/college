// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() 
{
  // Get the check button element
  var checkBtn = document.getElementById("check-btn");

  // Add a click event listener to the button
  checkBtn.addEventListener("click", function() 
  {
    // Simulate the heartbeat checking process
    var result = Math.floor(Math.random() * 100) + 60;

    // Display the result
    var resultElem = document.getElementById("result");
    resultElem.textContent = "Heartbeat: " + result + " bpm";
  });
});
