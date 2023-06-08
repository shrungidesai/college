<?php include('server.php')>
<!DOCTYPE html>
<html >
<head>
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <style>
    body {
      background-image: url("image (2).jpg");
      background-size: cover;
    }
  </style>
</head>

<body bgcolor="pink">

  <form action="registration.html">
    
  <div class="container">
    <h2>Login</h2>
    <form action="login.php" method="POST">
    <?php include('error.php')>
      <input type="text" placeholder="Username" name="username" required>
      <input type="password" placeholder="Password" name="password" required>
      <input type="submit" value="Login" href="registration.html">
    </form>
    <a href="fp.html" align="canter">Forgot Password</a>
  </div>

  <a href="registration.html" align="canter">Go to Registration Page</a>
</body>
</html>
