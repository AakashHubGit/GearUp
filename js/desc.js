document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const products = [
    {
      id: 1,
      name: "Gear Tools",
      image: "../power tools.jpg",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹5000",
      desc: "High quality fridge with the latest cooling technology.",
      manufacturer: "Gear Electronics",
      warranty: "2 years",
      dimensions: "60 x 60 x 180 cm",
    },
    {
      id: 2,
      name: "Gear Washing Machine",
      image: "images/washingmachine-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹7000",
      desc: "Efficient washing machine with multiple washing modes.",
      manufacturer: "Gear Electronics",
      warranty: "3 years",
      dimensions: "70 x 70 x 100 cm",
    },
    {
      id: 3,
      name: "Gear Microwave",
      image: "images/microwave-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹6000",
      desc: "Compact microwave with advanced features.",
      manufacturer: "Gear Electronics",
      warranty: "1 year",
      dimensions: "30 x 40 x 20 cm",
    },
    {
      id: 4,
      name: "Clear Fridge",
      image: "images/fridge-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹5500",
      desc: "Energy efficient fridge with a sleek design.",
      manufacturer: "Clear Electronics",
      warranty: "2 years",
      dimensions: "60 x 60 x 180 cm",
    },
    {
      id: 5,
      name: "Clear Washing Machine",
      image: "images/washingmachine-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹7500",
      desc: "Top loading washing machine with smart features.",
      manufacturer: "Clear Electronics",
      warranty: "3 years",
      dimensions: "70 x 70 x 100 cm",
    },
  ];

  const product = products.find((p) => p.id == productId);

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-desc").innerText = product.desc;
    document.getElementById(
      "product-manufacturer"
    ).innerText = `Manufacturer: ${product.manufacturer}`;
    document.getElementById(
      "product-warranty"
    ).innerText = `Warranty: ${product.warranty}`;
    document.getElementById(
      "product-dimensions"
    ).innerText = `Dimensions: ${product.dimensions}`;
  } else {
    document.querySelector(".content").innerHTML = "<p>Product not found.</p>";
  }
});
