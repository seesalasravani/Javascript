const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const password = "Password123!";
if (passwordRegex.test(password)) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}