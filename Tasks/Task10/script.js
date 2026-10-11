let numberOfProducts = Number(
  prompt("Enter the number of products that you want to buy:")
);

let products = [];

for (let i = 0; i < numberOfProducts; i++) {
  let name = prompt(`Enter product ${i + 1} name:`);
  let price = Number(prompt(`Enter the unit price of ${name}:`));
  let quantity = Number(prompt(`Enter the quantity of ${name}:`));

  products.push({
    name: name,
    price: price,
    quantity: quantity
  });
}

let total = 0;
let discountedProducts = 0;

products.forEach((product) => {
  let originalTotal = product.price * product.quantity;
  let productTotal = originalTotal;

  if (product.quantity > 10) {
    productTotal *= 0.9;
    discountedProducts++;
  }

  total += productTotal;

  console.log(
    `${product.name} | Unit price: ${product.price} | Quantity: ${product.quantity} | Total: ${productTotal}`
  );

  if (product.quantity > 10) {
    console.log(
      `10% discount applied | Discount amount: ${originalTotal - productTotal}`
    );
  }

  console.log("--------------------");
});

console.log(`Total after product discounts: ${total}`);

if (total > 500 && discountedProducts < 2) {
  let totalBeforeDiscount = total;
  total *= 0.8;

  console.log(
    `Additional 20% discount applied | Discount amount: ${totalBeforeDiscount - total}`
  );
}

console.log(`Final amount to pay: ${total}`);



