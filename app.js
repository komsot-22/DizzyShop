// Food Products Array (Guaranteed fallback data)
let products = [
  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 5.99,
    rating: 4.8,
    description:
      "Juicy beef patty, fresh lettuce, tomato, onion, special sauce",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Double Cheese Burger",
    category: "Burgers",
    price: 7.99,
    rating: 4.8,
    description: "Two beef patties, double cheese, classic sauce",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 5.49,
    rating: 4.8,
    description: "Crispy chicken, lettuce, creamy mayo",
    image:
      "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Spicy Chicken Burger",
    category: "Burgers",
    price: 5.99,
    rating: 4.8,
    description: "Spicy chicken, lettuce, tomato, spicy mayo",
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "BBQ Bacon Burger",
    category: "Burgers",
    price: 7.49,
    rating: 4.8,
    description: "Beef patty, BBQ sauce, bacon, cheese, onion",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Loaded Fries",
    category: "Fries",
    price: 4.5,
    rating: 4.8,
    description: "Fries, cheese sauce, bacon bits",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Chicken Wings (6pcs)",
    category: "Chicken",
    price: 5.9,
    rating: 4.8,
    description: "Crispy wings with your choice of sauce",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "French Fries",
    category: "Fries",
    price: 3.0,
    rating: 4.8,
    description: "Golden crispy fries, perfectly seasoned",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Cola",
    category: "Drinks",
    price: 2.5,
    rating: 4.8,
    description: "Refreshing ice cold cola",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Strawberry Shake",
    category: "Drinks",
    price: 4.0,
    rating: 4.8,
    description: "Creamy strawberry shake with real fruit",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Lemon Iced Tea",
    category: "Drinks",
    price: 2.99,
    rating: 4.8,
    description: "Freshly brewed tea with real lemon",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Chocolate Shake",
    category: "Drinks",
    price: 4.25,
    rating: 4.8,
    description: "Rich chocolate milkshake",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 8.5,
    rating: 4.8,
    description: "Cheesy pizza with pepperoni",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    name: "Chicken Pizza",
    category: "Pizza",
    price: 8.9,
    rating: 4.8,
    description: "Chicken, cheese and fresh vegetables",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    name: "Mozzarella Sticks",
    category: "Snacks",
    price: 4.9,
    rating: 4.8,
    description: "Crispy cheese sticks with dip",
    image:
      "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&auto=format&fit=crop&q=80",
  },
];

let cart = [];

// Render Products
function renderProducts(items) {
  const container =
    document.getElementById("products") || document.querySelector(".products");
  if (!container) {
    console.error(
      "Error: Could not find element with id='products' or class='products' in your HTML!",
    );
    return;
  }

  if (!items || items.length === 0) {
    container.innerHTML = `<p class="no-products">No items found.</p>`;
    return;
  }

  container.innerHTML = items
    .map((product) => {
      const pId = product.id !== undefined ? product.id : product._id;
      const pName = product.name || "Unnamed Product";
      const pPrice = Number(product.price || 0);
      const pImg = product.image || "";
      const pDesc = product.description || "អាហារឆ្ងាញ់គុណភាពខ្ពស់";
      const pRating = product.rating || 4.8;

      return `
        <div class="product-card">
          <div class="product-img-wrap">
            <img src="${pImg}" alt="${pName}" class="product-img" loading="lazy" />
          </div>
          <div class="product-content">
            <h3 class="product-title">${pName}</h3>
            <p class="product-desc">${pDesc}</p>
            <div class="product-rating">★★★★★ <span>${pRating}</span></div>
            <div class="product-price">$${pPrice.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart('${pId}')">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(
    (p) =>
      String(p.id) === String(productId) || String(p._id) === String(productId),
  );

  if (!product) {
    console.error("Could not find product with ID:", productId);
    return;
  }

  const pId = product.id !== undefined ? product.id : product._id;
  const existingItem = cart.find(
    (item) =>
      String(item.id) === String(pId) || String(item._id) === String(pId),
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      id: pId,
      price: Number(product.price || 0),
      quantity: 1,
    });
  }

  updateCart();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(
    (item) =>
      String(item.id) !== String(productId) &&
      String(item._id) !== String(productId),
  );
  updateCart();
}

// Change Quantity
function changeQuantity(productId, amount) {
  const item = cart.find(
    (i) =>
      String(i.id) === String(productId) || String(i._id) === String(productId),
  );
  if (item) {
    item.quantity += amount;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart();
    }
  }
}

// Update Cart View
function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const cartCountEl = document.getElementById("cartCount");
  const cartBadgeEl = document.getElementById("cartBadge");

  const totalItemsCount = cart.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0,
  );
  if (cartCountEl) cartCountEl.innerText = totalItemsCount;
  if (cartBadgeEl) cartBadgeEl.innerText = totalItemsCount;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty">Your cart is empty.</p>`;
    if (subtotalEl) subtotalEl.innerText = "$0.00";
    if (taxEl) taxEl.innerText = "$0.00";
    if (totalEl) totalEl.innerText = "$0.00";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const itemId = item.id !== undefined ? item.id : item._id;
      const itemName = item.name || "Unnamed Item";
      const itemPrice = Number(item.price || 0);
      const itemImg = item.image || "";

      return `
        <div class="cart-item">
          <img src="${itemImg}" alt="${itemName}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4>${itemName}</h4>
            <p>$${itemPrice.toFixed(2)}</p>
          </div>
          <div class="cart-controls">
            <button onclick="changeQuantity('${itemId}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity('${itemId}', 1)">+</button>
          </div>
        </div>
      `;
    })
    .join("");

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0,
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.innerText = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

// Search Filter
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = products.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(query)) ||
        (p.description && p.description.toLowerCase().includes(query)),
    );
    renderProducts(filtered);
  });
}

// Category Filter
document.querySelectorAll(".category").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document
      .querySelectorAll(".category")
      .forEach((b) => b.classList.remove("active"));
    const currentBtn = e.currentTarget;
    currentBtn.classList.add("active");

    const category = currentBtn.dataset.category;
    if (category === "All") {
      renderProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      renderProducts(filtered);
    }
  });
});

// Optional Backend Fetch (Safely falls back if backend is off)
async function initApp() {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        products = data;
      }
    }
  } catch (error) {
    console.log("Backend offline, using local product list.");
  }
  renderProducts(products);
}

// Run on page load
document.addEventListener("DOMContentLoaded", initApp);
// Connect the Checkout Button
const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Calculate subtotal, tax, and total
    const subtotal = cart.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
      0,
    );
    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    const orderData = {
      items: cart,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };

    // Send to Backend
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      const result = await response.json();
      alert(result.message || "Order placed successfully!");

      // Clear cart after successful order
      cart = [];
      updateCart();
    } catch (error) {
      console.error("Checkout failed:", error);
      alert(
        "Could not connect to the server. Please ensure your backend is running on port 5000.",
      );
    }
  });
}

// Variable to track active discount percentage
let currentDiscount = 0;
let appliedPromoCode = "";

// Event listener for the Apply Promo button
document.addEventListener("DOMContentLoaded", () => {
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoInput");

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();

      if (code === "") {
        alert("Please enter a promo code.");
        return;
      }

      // Define your valid promotion codes here
      if (code === "BIGPROMO") {
        currentDiscount = 0.2; // 20% off
        appliedPromoCode = "BIGPROMO";
        alert("Success! 20% discount applied.");
      } else if (code === "DISCOUNT5") {
        currentDiscount = 0.05; // 5% off
        appliedPromoCode = "DISCOUNT5";
        alert("Success! 5% discount applied.");
      } else {
        alert("Invalid promo code. Try 'BIGPROMO'");
        currentDiscount = 0;
        appliedPromoCode = "";
      }

      // Recalculate cart totals with the discount
      updateCart();
    });
  }
});

// Calculate subtotal
const subtotal = cart.reduce(
  (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
  0,
);

// Apply discount if active
const discountAmount = subtotal * currentDiscount;
const discountedSubtotal = subtotal - discountAmount;

// Calculate tax on the discounted subtotal (7%)
const tax = discountedSubtotal * 0.07;
const total = discountedSubtotal + tax;

// Update DOM elements
if (subtotalEl) subtotalEl.innerText = `$${discountedSubtotal.toFixed(2)}`;
if (taxEl) taxEl.innerText = `$${tax.toFixed(2)}`;
if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

async function fetchProducts() {
  const productGrid = document.getElementById("product-grid");

  try {
    // Fetch products from your Node.js backend
    const response = await fetch("http://localhost:5000/api/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products from server");
    }

    const products = await response.json();

    // Clear existing content
    productGrid.innerHTML = "";

    if (products.length === 0) {
      productGrid.innerHTML = "<p>No menu items available at the moment.</p>";
      return;
    }

    // Loop through each product and create its HTML card
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.setAttribute("data-id", product.ProductID || product.id);
      card.setAttribute("data-name", product.Name || product.name);
      card.setAttribute("data-price", product.Price || product.price);

      card.innerHTML = `
        <img src="${product.ImageURL || "picture/default.jpg"}" alt="${product.Name || product.name}">
        <h3>${product.Name || product.name}</h3>
        <p class="description">${product.Description || ""}</p>
        <p class="price">$${parseFloat(product.Price || product.price).toFixed(2)}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;

      productGrid.appendChild(card);
    });

    // Re-attach event listeners for your cart buttons after dynamic load
    initAddToCartButtons();
  } catch (error) {
    console.error("Error loading products:", error);
    productGrid.innerHTML =
      '<p class="error">Could not load menu items. Please check if the server is running.</p>';
  }
}

// Hook up your Add to Cart functionality
function initAddToCartButtons() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const id = card.dataset.id;
      const name = card.dataset.name;
      const price = parseFloat(card.dataset.price);

      console.log(`Added to cart: ${name} ($${price})`);
      // Add your cart array pushing & updateCartUI() logic here
    });
  });
}
