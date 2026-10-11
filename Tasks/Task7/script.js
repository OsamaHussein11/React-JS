let products = [
  { name: "Laptop", price: 800, rating: 4.5 },
  { name: "Mouse", price: 20, rating: 2.5 },
  { name: "Keyboard", price: 50, rating: 3 },
  { name: "Headphones", price: 70, rating: 3.1 },
  { name: "Monitor", price: 200, rating: 5 },
  { name: "Speaker", price: 30, rating: 2 }
];

products.forEach((product) => {
  if (product.rating >= 3) {
    let fullStarCount = Math.floor(product.rating);
    let isHalfStar = product.rating - fullStarCount >= 0.5;
    let emptyStarCount = 5 - fullStarCount;

    if (isHalfStar) {
      emptyStarCount--;
    }

    let fullStar = "★".repeat(fullStarCount);
    let halfStar = "*".repeat(isHalfStar ? 1 : 0);
    let emptyStar = "☆".repeat(emptyStarCount);

    let stars = fullStar + halfStar + emptyStar;

    console.log(
      `Name: ${product.name}, Price: ${product.price}, Rating: ${product.rating}, Stars: ${stars}`
    );
  }
});