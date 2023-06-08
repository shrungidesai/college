// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    var contactForm = document.getElementById("contact-form");
  
    // Add a submit event listener to the form
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the user inputs
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");
  
      // Prepare the data for submission
      var formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      };
  
      // You can perform additional validations or send the data to a server using AJAX
  
      // Display a success message
      alert("Thank you for your message! We will get back to you soon.");
  
      // Reset the form
      contactForm.reset();
    });
  });
  