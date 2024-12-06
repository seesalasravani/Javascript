const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example usage:
const emailAddress = "example@gmail.com";
if (emailRegex.test(emailAddress)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}