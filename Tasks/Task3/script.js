let total = Number(prompt("Enter the total price: "));
let error = false;

if (isNaN(total) || total < 0) {
  alert("Please enter a valid total price.");
  error = true;
}
if (!error) {
  let discountPercentage = 0;

  if (total >= 200) {
    discountPercentage = 0.15;
    if (total * discountPercentage > 100) {
      discountPercentage = 0.08;
    }
  }

  let discountAmount = total * discountPercentage;
  let totalAmount = total - discountAmount;
  alert("Your total price is: " + total);
  alert("Your discount percentage is: " + discountAmount);
  alert("Your final price is: " + totalAmount);
}


