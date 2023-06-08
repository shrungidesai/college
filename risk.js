// Function to check if a person is infected with breast cancer based on mean radius and mean texture
function checkBreastCancer(radiusMean, textureMean) {
  // Define the decision rule based on the values of mean radius and mean texture
  if (radiusMean > 15 && textureMean > 20) {
    return 'The person is likely infected with breast cancer.';
  } else {
    return 'The person is likely not infected with breast cancer.';
  }
}

// Handle form submission
const form = document.getElementById('cancerDetectionForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
 
  // Get the input values
  const radiusMean = parseFloat(document.getElementById('radiusMean').value);
  const textureMean = parseFloat(document.getElementById('textureMean').value);
 
  // Perform breast cancer detection
  const result = checkBreastCancer(radiusMean, textureMean);
 
  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
});
