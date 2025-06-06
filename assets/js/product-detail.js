function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`${tabId}-tab`).classList.remove('hidden');
  document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function changeMainImage(element) {
  const mainImage = document.getElementById('main-image');
  const newSrc = element.querySelector('img').src;
  mainImage.src = newSrc;
  document.querySelectorAll('.grid .border-primary').forEach(el => {
    el.classList.remove('border-primary');
    el.classList.add('border-transparent');
  });
  element.classList.add('border-primary');
  element.classList.remove('border-transparent');
}

let currentProduct = products[0];
let cartCount = 0;
let quantity = 1;

document.addEventListener('DOMContentLoaded', function() {
  loadProductFromUrl();
  renderRelatedProducts();
  updateCartCount();
});

function loadProductFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  if (productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
      currentProduct = product;
      updateProductDisplay();
    }
  }
}

function updateProductDisplay() {
  document.getElementById('product-name').textContent = currentProduct.name;
  document.getElementById('product-price').textContent = currentProduct.price.toLocaleString() + '₫';
  document.getElementById('product-rating').textContent = `(${currentProduct.rating})`;
  document.getElementById('product-reviews').textContent = `${currentProduct.reviews} đánh giá`;
  document.getElementById('product-stars').innerHTML = generateStars(currentProduct.rating);
  document.getElementById('main-image').src = currentProduct.image;
  const thumbnails = currentProduct.images && currentProduct.images.length
    ? currentProduct.images
    : [currentProduct.images];
  document.getElementById('product-thumbnails').innerHTML = thumbnails.map((img, idx) => `
    <div class="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${idx === 0 ? 'border-primary' : 'border-transparent'} hover:border-primary" onclick="changeMainImage(this)">
      <img src="${img}" alt="Thumbnail" class="w-full h-full object-cover">
    </div>
  `).join('');
  document.getElementById('product-short-desc').textContent = currentProduct.shortDesc || '';
  document.getElementById('product-features').innerHTML = (currentProduct.features || []).map(f => `
    <li class="flex items-center"><i class="ri-check-line text-green-500 mr-2"></i>${f}</li>
  `).join('');
  document.getElementById('product-sale').textContent = currentProduct.sale ? currentProduct.sale : '';
  if (currentProduct.description) {
    document.getElementById('description-tab').querySelector('.prose').innerHTML = currentProduct.description;
  }
  if (currentProduct.ingredients) {
    document.getElementById('ingredients-tab').querySelector('.space-y-2').innerHTML = currentProduct.ingredients;
  }
  if (currentProduct.usage) {
    document.getElementById('usage-tab').querySelector('.text-gray-600').innerHTML = currentProduct.usage;
  }
  const reviewsTab = document.getElementById('reviews-tab').querySelector('.space-y-6');
  if (currentProduct.customerReviews && currentProduct.customerReviews.length) {
    reviewsTab.innerHTML = currentProduct.customerReviews.map(r => `
      <div class="border-b pb-6">
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400">
            ${generateStars(r.rating)}
          </div>
          <span class="ml-2 font-medium">${r.name}</span>
          <span class="ml-2 text-gray-500 text-sm">- ${r.time}</span>
        </div>
        <p class="text-gray-600">${r.content}</p>
      </div>
    `).join('');
  } else {
    reviewsTab.innerHTML = '<p class="text-gray-500">Chưa có đánh giá nào.</p>';
  }
}

function generateStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  for(let i = 0; i < fullStars; i++) {
    stars.push('<i class="ri-star-fill"></i>');
  }
  if(hasHalfStar) {
    stars.push('<i class="ri-star-half-fill"></i>');
  }
  for(let i = stars.length; i < 5; i++) {
    stars.push('<i class="ri-star-line"></i>');
  }
  return stars.join('');
}

function changeQuantity(change) {
  quantity = Math.max(1, quantity + change);
  document.getElementById('quantity').textContent = quantity;
}

function addToCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === currentProduct.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      quantity: quantity
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  const btn = document.querySelector('.add-to-cart-btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="ri-check-line mr-2"></i>Đã thêm!';
  btn.classList.add('bg-green-500');
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.classList.remove('bg-green-500');
  }, 1200);
}
function buyNow() {
  localStorage.setItem('buyNowProduct', JSON.stringify({
    id: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.price,
    image: currentProduct.image,
    quantity: quantity
  }));
  window.location.href = "../../cart/checkout.html";
}

function renderRelatedProducts() {
  const container = document.getElementById('related-products');
  if (!container) return;
  const related = products.filter(
    p => p.category === currentProduct.category && p.id !== currentProduct.id
  ).slice(0, 4);
  container.innerHTML = related.map(p => `
    <a href="product-detail.html?id=${p.id}" class="block bg-white rounded-lg overflow-hidden product-card transition hover:shadow-lg">
      <div class="relative">
        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
        ${p.isNew ? '<div class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Mới</div>' : ''}
      </div>
      <div class="p-4">
        <h3 class="font-medium text-gray-800 mb-1">${p.name}</h3>
        <div class="flex items-center mb-2 text-yellow-400 text-sm">
          ${generateStars(p.rating)}
          <span class="text-xs text-gray-500 ml-1">(${p.reviews})</span>
        </div>
        <p class="text-primary font-bold">${p.price.toLocaleString()}₫</p>
      </div>
    </a>
  `).join('');
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) {
    countEl.textContent = count;
  }
}