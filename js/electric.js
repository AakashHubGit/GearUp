document.addEventListener("DOMContentLoaded", function () {
  const brandFilter = document.getElementById("brand");
  const priceFilter = document.getElementById("price");
  const productContainer = document.querySelector(".product-container");

  brandFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);

  function filterProducts() {
    const brand = brandFilter.value;
    const price = priceFilter.value;

    let products = Array.from(productContainer.children);

    // Filter by brand
    products.forEach((product) => {
      const productName = product.querySelector("h4").innerText;
      if (brand === "all" || productName.includes(brand)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Sort by price
    products = products.filter((product) => product.style.display !== "none");

    if (price === "low") {
      products.sort((a, b) => {
        const priceA = parseInt(
          a.querySelector(".price").innerText.replace("₹", "")
        );
        const priceB = parseInt(
          b.querySelector(".price").innerText.replace("₹", "")
        );
        return priceA - priceB;
      });
    } else if (price === "high") {
      products.sort((a, b) => {
        const priceA = parseInt(
          a.querySelector(".price").innerText.replace("₹", "")
        );
        const priceB = parseInt(
          b.querySelector(".price").innerText.replace("₹", "")
        );
        return priceB - priceA;
      });
    }

    // Reorder products in container
    productContainer.innerHTML = "";
    products.forEach((product) => productContainer.appendChild(product));
  }
});
