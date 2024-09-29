// Add event listener to hero section
document.addEventListener("scroll", function() {
    // Animate hero section on scroll
    const heroSection = document.querySelector(".hero");
    heroSection.classList.add("animate");
  });
  
  // Add event listener to shop section
  document.addEventListener("DOMContentLoaded", function() {
    // Filter and sort products on click
    const shopSection = document.querySelector(".shop");
    const filters = shopSection.querySelectorAll(".filter");
    const products = shopSection.querySelectorAll(".product");
  
    filters.forEach((filter) => {
      filter.addEventListener("click", function() {
        // Filter products based on selected filter
        const selectedFilter = filter.dataset.filter;
        products.forEach((product) => {
          if (product.dataset.category === selectedFilter) {
            product.classList.add("show");
          } else {
            product.classList.remove("show");
          }
        });
      });
    });
  });