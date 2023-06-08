document.addEventListener("DOMContentLoaded", function() {
    var registrationForm = document.getElementById("registration-form");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
  
      // Perform form validation if needed
  
      // Create an object with the form data
      var formData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
  
      // Perform further processing or submit the form to a server-side script
      console.log(formData);
      // You can use AJAX or submit the form to a server using the following line:
      // registrationForm.submit();
    });
  });
  