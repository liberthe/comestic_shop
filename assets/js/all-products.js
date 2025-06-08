// File: assets/js/all-products.js

// Di chuyển phần xử lý params lên đầu file, trước khi định nghĩa filteredProducts
const params = new URLSearchParams(window.location.search);
const categoryParam = params.get('category');
const filterParam = params.get('filter');
const sortParam = params.get('sort');

// Khởi tạo filteredProducts dựa trên params
let filteredProducts = [];
if (filterParam === 'new') {
    filteredProducts = products.filter(product => product.isNew);
} else if (categoryParam) {
    filteredProducts = products.filter(product => product.category === categoryParam);
} else {
    filteredProducts = [...products];
}

const perPage = 12; // Số sản phẩm mỗi trang
let currentPage = 1;

// Create product card HTML
function createProductCard(product) {
  const stars = [];
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  
  for(let i = 0; i < fullStars; i++) {
    stars.push('<i class="ri-star-fill"></i>');
  }
  if(hasHalfStar) {
    stars.push('<i class="ri-star-half-fill"></i>');
  }
  for(let i = stars.length; i < 5; i++) {
    stars.push('<i class="ri-star-line"></i>');
  }


return `
  <div class="product-card bg-white rounded-lg shadow-sm overflow-hidden relative">
    <div class="relative group">
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
      ${product.isNew ? '<div class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Mới</div>' : ''}
      <!-- Container cho 2 nút -->
      <div class="absolute bottom-2 left-2 right-2 flex gap-2">
        <button class="action-btn add-to-cart-btn flex-1 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-opacity-90 transition-all text-sm"
          data-id="${product.id}">
          <i class="ri-shopping-cart-line mr-1"></i>
        </button>
        <button class="action-btn buy-now-btn flex-1 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-opacity-90 transition-all text-sm"
          data-id="${product.id}">
          <i class="ri-shopping-bag-line mr-1"></i>
        </button>
      </div>
    </div>
    <div class="p-3">
      <h3 class="font-medium text-gray-800 mb-1 hover:text-primary">
        <a href="product-detail.html?id=${product.id}">${product.name}</a>
      </h3>
      <div class="flex items-center mb-2">
        <div class="flex text-yellow-400 text-xs">
          ${stars.join('')}
        </div>
        <span class="text-xs text-gray-500 ml-1">(${product.reviews})</span>
      </div>
      <div class="flex items-center">
        <span class="text-primary font-bold">${product.price.toLocaleString()}₫</span>
      </div>
    </div>
  </div>
`;
}

// Render products
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const productsToShow = filteredProducts.slice(start, end);

  grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
  document.getElementById('product-count').textContent = filteredProducts.length;
  renderPagination();
}

// Hàm render phân trang
function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  // Nút prev
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '←';
  prevBtn.className = 'px-3 py-2 text-gray-500 hover:text-primary';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
    }
  };
  pagination.appendChild(prevBtn);

  // Nút số trang
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className =
      'px-3 py-2 rounded ' +
      (i === currentPage
        ? 'bg-primary text-white'
        : 'text-gray-500 hover:text-primary');
    btn.onclick = () => {
      currentPage = i;
      renderProducts();
    };
    pagination.appendChild(btn);
  }

  // Nút next
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '→';
  nextBtn.className = 'px-3 py-2 text-gray-500 hover:text-primary';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts();
    }
  };
  pagination.appendChild(nextBtn);
}

// Khi lọc/sắp xếp thì về trang 1
function resetToFirstPageAndRender() {
  currentPage = 1;
  renderProducts();
}

// Thay đổi các hàm filter/sort gọi resetToFirstPageAndRender thay vì renderProducts
function filterByCategory(category) {
  if (category === 'all') {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(product => product.category === category);
  }
  resetToFirstPageAndRender();
}

function filterByPrice(priceRange) {
  let filtered = [...products];
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p) * 1000);
    filtered = products.filter(product => {
      if (max === undefined) return product.price >= min;
      return product.price >= min && product.price <= max;
    });
  }
  filteredProducts = filtered;
  resetToFirstPageAndRender();
}

function filterByRating(minRating) {
  filteredProducts = products.filter(product => product.rating >= minRating);
  resetToFirstPageAndRender();
}

function sortProducts(sortBy) {
  switch(sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.isNew - a.isNew);
      break;
    default:
      filteredProducts = [...products];
  }
  resetToFirstPageAndRender();
}

function clearFilters() {
  filteredProducts = [...products];
  resetToFirstPageAndRender();
  document.querySelectorAll('.filter-btn, .price-filter, .rating-filter').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById('sort-select').value = 'default';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Nếu có sort param, set giá trị cho dropdown
    if (sortParam) {
        const sortSelect = document.getElementById('sort-select');
        sortSelect.value = sortParam;
        // Thực hiện sắp xếp
        sortProducts(sortParam);
    } else {
        renderProducts();
    }
    updateCartCount();
    
    // Chỉ highlight category button khi không có filter=new
    if (!filterParam) {
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    }
    
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterByCategory(this.dataset.category);
      });
    });
    
    // Price filters
    document.querySelectorAll('.price-filter').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.price-filter').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterByPrice(this.dataset.price);
      });
    });
    
    // Rating filters
    document.querySelectorAll('.rating-filter').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.rating-filter').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterByRating(parseInt(this.dataset.rating));
      });
    });
    
    // Sort select
    document.getElementById('sort-select').addEventListener('change', function() {
      sortProducts(this.value);
    });
});

// === Thêm vào giỏ hàng ===
document.addEventListener("click", function (e) {
  const cartBtn = e.target.closest(".add-to-cart-btn");
  if (cartBtn) {
    const productId = cartBtn.dataset.id;
    const product = products.find(p => p.id == productId);
    if (product) {
      addToCart(product);
    }
  }

  const buyBtn = e.target.closest(".buy-now-btn");
  if (buyBtn) {
    const productId = buyBtn.dataset.id;
    const product = products.find(p => p.id == productId);
    if (product) {
      // Lưu sản phẩm mua ngay vào localStorage
      localStorage.setItem('buyNowProduct', JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }));
      window.location.href = "/cosmetic_shop/cart/checkout.html";
    }
  }
});

function addToCart(product) {
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
  updateCartCount();
  alert("Đã thêm vào giỏ hàng!");
}

// Cập nhật số lượng giỏ hàng trên header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }
}

// Gọi khi trang load
document.addEventListener("DOMContentLoaded", updateCartCount);
