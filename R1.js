function detectCancer() {
  var symptoms = document.getElementsByName('symptoms');
  var selectedSymptoms = [];

  // Get selected symptoms
  for (var i = 0; i < symptoms.length; i++) {
    if (symptoms[i].checked) {
      selectedSymptoms.push(symptoms[i].value);
    }
  }

  // Perform breast cancer detection based on symptoms
  var hasCancer = false;

  if (selectedSymptoms.includes('lump') && selectedSymptoms.includes('nipple-discharge') && selectedSymptoms.includes('breast-size')) {
    hasCancer = true;
  }
  else if (selectedSymptoms.includes('skin-changes') && selectedSymptoms.includes('breast-pain')) {
    hasCancer = false;
  }

  // Display the result
  var resultText = document.getElementById('result-text');
  var resultDiv = document.getElementById('result');

  if (hasCancer) {
    resultText.innerText = 'High likelihood of breast cancer. Please consult a doctor.';
  } else {
    resultText.innerText = 'No significant signs of breast cancer detected.';
  }

  resultDiv.style.display = 'block';
}