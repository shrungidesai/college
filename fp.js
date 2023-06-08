function resetPassword() {
    var email = document.getElementById('email').value;
    
    // Send a password reset email to the provided email address
    // Implement your own code here to handle the password reset logic
    
    document.getElementById('message').textContent = "Password reset email sent.";
  }
  
  function changePassword() {
    var newPassword = document.getElementById('newPassword').value;
  
    // Change the user's password to the new one
    // Implement your own code here to handle the password change logic
    
    document.getElementById('message').textContent = "Password changed successfully.";
  }
  