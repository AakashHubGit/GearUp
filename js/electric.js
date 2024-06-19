document.addEventListener("DOMContentLoaded", function () {
  const brandFilter = document.getElementById("brand");
  const priceFilter = document.getElementById("price");
  const productContainer = document.querySelector(".product-container");

  brandFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);

  function filterProducts() {
    const brand = brandFilter.value.toLowerCase();
    const price = priceFilter.value;

    let products = Array.from(productContainer.children);

    // Filter by brand
    products.forEach((product) => {
      const productName = product.querySelector("h4").innerText.toLowerCase();
      if (brand === "all" || productName.includes(brand)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Get visible products
    let visibleProducts = products.filter(
      (product) => product.style.display === "block"
    );

    // Sort by price
    if (price === "low") {
      visibleProducts.sort((a, b) => {
        const priceA = parseInt(
          a.querySelector(".price").innerText.replace("₹", "")
        );
        const priceB = parseInt(
          b.querySelector(".price").innerText.replace("₹", "")
        );
        return priceA - priceB;
      });
    } else if (price === "high") {
      visibleProducts.sort((a, b) => {
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
    visibleProducts.forEach((product) => productContainer.appendChild(product));

    // Append non-visible products back to the container
    products
      .filter((product) => product.style.display === "none")
      .forEach((product) => productContainer.appendChild(product));
  }
});
