function getUser() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  console.log("Full Name:", fullname);
  console.log("Email:", email);
  console.log("phone", phone);
  console.log("Gender:", gender);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  let newuser = {
    name: fullname,
    email: email,
    phone: phone,
    gender: gender,
    password: password,
    confirmPassword: confirmPassword,
  };

  fetch("http://localhost:3065/user", {
    method: "POST",
    "Content-Type": "application/jaon",
    body: JSON.stringify,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("user Ragisterd");
      console.log(data);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}
