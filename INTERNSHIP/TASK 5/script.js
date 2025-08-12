document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  let isValid = true;

  // form values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  //error fields
  let nameError = document.querySelectorAll(".error")[0];
  let emailError = document.querySelectorAll(".error")[1];
  let messageError = document.querySelectorAll(".error")[2];

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  document.getElementById("successMsg").textContent = "";

  // Name
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // validation
  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").textContent =
      "Message sent successfully!";
    document.getElementById("contactForm").reset();
  }
});
