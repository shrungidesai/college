// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() 
{
    // Get the check button element
    var checkBtn = document.getElementById("check-btn");
  
    // Add a click event listener to the button
    checkBtn.addEventListener("click", function() 
    {
      // Simulate the blood pressure checking process
      var systolic = Math.floor(Math.random() * 40) + 120;
      var diastolic = Math.floor(Math.random() * 20) + 70;
  
      // Display the result
      var resultElem = document.getElementById("result");
      resultElem.textContent = "Blood Pressure: " + systolic + "/" + diastolic + " mmHg";
    });
  });
  