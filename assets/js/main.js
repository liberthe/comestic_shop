// Add to cart logic
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".product-card button:first-child");
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productCard = btn.closest(".product-card");
      const name = productCard.querySelector("h3").innerText;
      const priceText = productCard.querySelector(".font-bold").innerText.replace(/\D/g, '');
      const price = parseInt(priceText);
      const image = productCard.querySelector(".relative img").getAttribute("src");
      const product = { name, price, image, quantity: 1 };
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      if (typeof updateCartCount === "function") {
        updateCartCount();
      }
      alert("Đã thêm vào giỏ hàng!");
    });
  });
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = count;
}
window.updateCartCount = updateCartCount;

// Flash sale countdown
const flashSaleEnd = new Date();
flashSaleEnd.setHours(23,59,59,999);
function updateFlashSaleCountdown() {
  const now = new Date();
  let diff = flashSaleEnd - now;
  if (diff < 0) diff = 0;
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
  document.getElementById('flash-hour').textContent = hours;
  document.getElementById('flash-minute').textContent = minutes;
  document.getElementById('flash-second').textContent = seconds;
}
setInterval(updateFlashSaleCountdown, 1000);
updateFlashSaleCountdown();

// Flash Sale Carousel
document.addEventListener('DOMContentLoaded', function() {
  function getRandomProducts(arr, n) {
    let result = [];
    let taken = [];
    while (result.length < n && result.length < arr.length) {
      let idx = Math.floor(Math.random() * arr.length);
      if (!taken.includes(idx)) {
        result.push(arr[idx]);
        taken.push(idx);
      }
    }
    return result;
  }
  const selected = getRandomProducts(products, 4);
  const track = document.getElementById('carousel-track');
  selected.forEach(product => {
    const card = document.createElement('div');
    card.className = "min-w-[250px] max-w-xs bg-white rounded-lg shadow-sm overflow-hidden mx-2 flex-shrink-0 product-card";
    card.innerHTML = `
      <div class="relative">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover object-top">
        ${product.discount ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-${product.discount}%</div>` : ""}
      </div>
      <div class="p-3">
        <h3 class="font-medium text-gray-800 mb-1">${product.name}</h3>
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400 text-xs">
            ${'<i class="ri-star-fill"></i>'.repeat(Math.floor(product.rating || 5))}
            ${product.rating && product.rating % 1 >= 0.5 ? '<i class="ri-star-half-fill"></i>' : ''}
          </div>
          <span class="text-xs text-gray-500 ml-1">(${product.reviews || 0})</span>
        </div>
        <div class="flex items-center">
          <span class="text-red-500 font-bold">${product.price}</span>
          ${product.oldPrice ? `<span class="text-gray-400 text-sm line-through ml-2">${product.oldPrice}</span>` : ""}
        </div>
        <div class="mt-3 flex space-x-2">
          <button class="add-to-cart-btn bg-sky-200 hover:bg-sky-300 text-gray text-sm px-3 py-1 rounded transition" data-id="${product.id}">Thêm vào giỏ</button>
          <button class="buy-now-btn bg-sky-300 hover:bg-sky-400 text-white text-sm px-3 py-1 rounded transition" data-id="${product.id}">Mua ngay</button>
        </div>
      </div>
    `;
    track.appendChild(card);
  });
  // Thêm hộp "Xem Thêm"
  const moreDiv = document.createElement('div');
  moreDiv.className = "min-w-[250px] max-w-xs bg-white rounded-lg shadow-sm overflow-hidden mx-2 flex-shrink-0 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow";
  moreDiv.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full py-10">
      <i class="ri-more-line text-primary text-4xl mb-2"></i>
      <span class="font-medium text-primary text-lg">Xem Thêm</span>
    </div>
  `;
  moreDiv.onclick = () => {
    window.location.href = "promotions/promotions.html";
  };
  track.appendChild(moreDiv);

  // Carousel logic
  let current = 0;
  const visible = 3;
  function updateCarousel() {
    track.style.transform = `translateX(-${current * (100/visible)}%)`;
  }
  document.getElementById('carousel-prev').onclick = function() {
    if (current > 0) current--;
    updateCarousel();
  };
  document.getElementById('carousel-next').onclick = function() {
    if (current < selected.length + 1 - visible) current++;
    updateCarousel();
  };
  updateCarousel();
});

// Category section
document.addEventListener('DOMContentLoaded', function() {
  // Định nghĩa icon và tên hiển thị cho từng danh mục
  const categoryMap = {
    "duong-am": { icon: "ri-water-flash-line", label: "Dưỡng ẩm" },
    "chong-nang": { icon: "ri-sun-line", label: "Chống nắng" },
    "serum": { icon: "ri-flask-line", label: "Serum" },
    "tay-trang": { icon: "ri-delete-back-2-line", label: "Tẩy trang" },
    "mat-na": { icon: "ri-emotion-happy-line", label: "Mặt nạ" },
    "toner": { icon: "ri-brush-line", label: "Toner" },
    "mat": { icon: "ri-eye-line", label: "Chăm sóc mắt" }
  };

  // Lấy danh sách danh mục duy nhất
  const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
  const categoryList = document.getElementById('category-list');

  categoryList.innerHTML = '';
  categories.slice(0,5).forEach(cat => {
    const info = categoryMap[cat] || { icon: "ri-apps-line", label: cat };
    const div = document.createElement('div');
    div.className = "bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer";
    div.innerHTML = `
      <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
        <i class="${info.icon} text-primary text-2xl"></i>
      </div>
      <h3 class="font-medium text-gray-800">${info.label}</h3>
    `;
    div.onclick = () => {
      window.location.href = "products/all-products.html?category=" + encodeURIComponent(cat);
    };
    categoryList.appendChild(div);
  });

  // Nếu muốn có nút "Xem Thêm" khi có nhiều danh mục
  if (categories.length >5) {
    const moreDiv = document.createElement('div');
    moreDiv.className = "bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer";
    moreDiv.innerHTML = `
      <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
        <i class="ri-more-line text-primary text-2xl"></i>
      </div>
      <h3 class="font-medium text-gray-800">Xem Thêm</h3>
    `;
    moreDiv.onclick = () => {
      window.location.href = "products/all-products.html";
    };
    categoryList.appendChild(moreDiv);
  }
});

// Best Sellers Carousel
document.addEventListener('DOMContentLoaded', function() {
  function getRandomProducts(arr, n) {
    let result = [];
    let taken = [];
    while (result.length < n && result.length < arr.length) {
      let idx = Math.floor(Math.random() * arr.length);
      if (!taken.includes(idx)) {
        result.push(arr[idx]);
        taken.push(idx);
      }
    }
    return result;
  }
  const bestSellers = getRandomProducts(products, 4);
  const track = document.getElementById('bestseller-track');
  const visible = 4;
  let current = 0;
  bestSellers.forEach(product => {
    const card = document.createElement('div');
    card.className = "min-w-[250px] max-w-xs bg-white rounded-lg shadow-sm overflow-hidden mx-2 flex-shrink-0 product-card";
    card.innerHTML = `
      <div class="relative">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover object-top">
        <div class="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">Bán chạy</div>
        ${product.discount ? `<div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-${product.discount}%</div>` : ""}
      </div>
      <div class="p-3">
        <h3 class="font-medium text-gray-800 mb-1">${product.name}</h3>
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400 text-xs">
            ${'<i class="ri-star-fill"></i>'.repeat(Math.floor(product.rating || 5))}
            ${product.rating && product.rating % 1 >= 0.5 ? '<i class="ri-star-half-fill"></i>' : ''}
          </div>
          <span class="text-xs text-gray-500 ml-1">(${product.reviews || 0})</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-800 font-bold">${product.price}</span>
        </div>
        <div class="mt-3 flex space-x-2">
          <button class="add-to-cart-btn bg-sky-200 hover:bg-sky-300 text-gray text-sm px-3 py-1 rounded transition" data-id="${product.id}">Thêm vào giỏ</button>
          <button class="buy-now-btn bg-sky-300 hover:bg-sky-400 text-white text-sm px-3 py-1 rounded transition" data-id="${product.id}">Mua ngay</button>
        </div>
      </div>
    `;
    track.appendChild(card);
  });
  // Thêm hộp "Xem Thêm"
  const moreDiv = document.createElement('div');
  moreDiv.className = "min-w-[250px] max-w-xs bg-white rounded-lg shadow-sm overflow-hidden mx-2 flex-shrink-0 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow";
  moreDiv.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full py-10">
      <i class="ri-more-line text-primary text-4xl mb-2"></i>
      <span class="font-medium text-primary text-lg">Xem Thêm</span>
    </div>
  `;
  moreDiv.onclick = () => {
    window.location.href = "products/all-products.html";
  };
  track.appendChild(moreDiv);

  function updateCarousel() {
    track.style.transform = `translateX(-${current * (100/visible)}%)`;
  }
  document.getElementById('bestseller-prev').onclick = function() {
    if (current > 0) current--;
    updateCarousel();
  };
  document.getElementById('bestseller-next').onclick = function() {
    if (current < bestSellers.length + 1 - visible) current++;
    else current = 0;
    updateCarousel();
  };
  document.getElementById('bestseller-viewall').onclick = function() {
    window.location.href = "products/all-products.html";
  };
  updateCarousel();
});

// Parallax effect for hero section (giữ lại đoạn này inline nếu muốn)
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const heroSection = document.querySelector('section');
  if(heroSection) heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

document.addEventListener("click", function(e) {
  // Thêm vào giỏ hàng
  const cartBtn = e.target.closest(".add-to-cart-btn");
  if (cartBtn) {
    const productId = cartBtn.dataset.id;
    const product = products.find(p => p.id == productId);
    if (product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      if (typeof updateCartCount === "function") updateCartCount();
      alert("Đã thêm vào giỏ hàng!");
    }
  }

  // Mua ngay
  const buyBtn = e.target.closest(".buy-now-btn");
  if (buyBtn) {
    const productId = buyBtn.dataset.id;
    const product = products.find(p => p.id == productId);
    if (product) {
      localStorage.setItem('buyNowProduct', JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }));
      window.location.href = "cart/checkout.html";
    }
  }

  // Xem chi tiết sản phẩm khi click vào product-card (không phải nút)
  const card = e.target.closest(".product-card");
  if (
    card &&
    !e.target.closest(".add-to-cart-btn") &&
    !e.target.closest(".buy-now-btn")
  ) {
    const id = card.querySelector("[data-id]")?.dataset.id || card.dataset.id;
    if (id) {
      window.location.href = `products/product-detail.html?id=${id}`;
    }
  }
});

