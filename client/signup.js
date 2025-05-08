function getUser() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  console.log("Full Name:", fullname);
  console.log("Email:", email);
  console.log("Gender:", gender);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);
}
