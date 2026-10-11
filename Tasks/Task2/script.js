let password = prompt("Enter your password:");
let strength = 0;

if (password === null) {
  alert("Cancelled");
} else if (password.length < 8 || password.length > 20) {
  alert("Password must be 8 to 20 characters");
} else {
  strength = 20;

  if (/[0-9]/.test(password)) {
    strength += 10;
  }

  if (/[A-Z]/.test(password)) {
    strength += 20;
  }

  if (/[^a-zA-Z0-9\s]/.test(password)) {
    strength += 20;
  }

  if (/[a-z]/.test(password)) {
    strength += 10;
  }

  if (password.length >= 12) {
    strength += 20;
  }

  alert("Password strength: " + strength + "%");
}