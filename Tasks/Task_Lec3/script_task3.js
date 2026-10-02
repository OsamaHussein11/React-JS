
// Task 3 : Array of Objects

let products = [
  { name: "Laptop", price: 800, rating: 4.5 },
  { name: "Mouse", price: 20, rating: 2.5 },
  { name: "Keyboard", price: 50, rating: 3 },
  { name: "Headphones", price: 70, rating: 3.1 },
  { name: "Monitor", price: 200, rating: 5 },
  { name: "Speaker", price: 30, rating: 2 },
];

for (let i = 0; i < products.length; i++) {
  let stars = "";
  if (products[i].rating >= 3) {
    for (let j = 1; j <= products[i].rating; j++) {
      stars += "★";
    }

    console.log(products[i].name, ",Rating:", products[i].rating, stars);
  }
}


