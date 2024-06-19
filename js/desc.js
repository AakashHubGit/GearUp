document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const products = [
    {
      id: 1,
      name: "Gear Fridge",
      image: "./images/fridge-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹5000",
      desc: "High quality fridge with the latest cooling technology.",
    },
    {
      id: 2,
      name: "Gear Washing Machine",
      image: "images/washingmachine-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹7000",
      desc: "Efficient washing machine with multiple washing modes.",
    },
    {
      id: 3,
      name: "Gear Microwave",
      image: "images/microwave-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹6000",
      desc: "Compact microwave with advanced features.",
    },
    {
      id: 4,
      name: "Clear Fridge",
      image: "images/fridge-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹5500",
      desc: "Energy efficient fridge with a sleek design.",
    },
    {
      id: 5,
      name: "Clear Washing Machine",
      image: "images/washingmachine-removebg-preview.png",
      rating: "images/rating-removebg-preview (1).png",
      price: "₹7500",
      desc: "Top loading washing machine with smart features.",
    },
  ];

  const product = products.find((p) => p.id == productId);

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-desc").innerText = product.desc;
  } else {
    document.querySelector(".content").innerHTML = "<p>Product not found.</p>";
  }
});
