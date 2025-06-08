// Cập nhật số lượng giỏ hàng từ localStorage
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = count;
}

// Quản lý menu Account
function initAccountMenu() {
    const accountMenu = document.querySelector('.account');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const loginItems = dropdownMenu.querySelectorAll('a:not(.logged-in)');
    const loggedInItems = dropdownMenu.querySelectorAll('.logged-in');

    function checkLoginStatus() {
        return JSON.parse(localStorage.getItem('user')) !== null;
    }

    function updateMenu() {
        const isLoggedIn = checkLoginStatus();
        if (isLoggedIn) {
            loginItems.forEach(item => item.style.display = 'none');
            loggedInItems.forEach(item => item.style.display = 'block');
        } else {
            loginItems.forEach(item => item.style.display = 'block');
            loggedInItems.forEach(item => item.style.display = 'none');
        }
    }

    accountMenu.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-menu')) {
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });

    document.addEventListener('click', (e) => {
        if (!accountMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('a[href="/cosmetic_shop/account/logout.html"]')) {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loginType');
            localStorage.removeItem('loginPhone');
            updateMenu();
            dropdownMenu.style.display = 'none';
            location.reload();
        }
    });

    window.addEventListener('storage', (e) => {
        if (e.key === 'user') {
            updateMenu();
        }
    });

    updateMenu();
}

// Dropdown Chính Sách
function setupPolicyDropdown() {
    const btn = document.getElementById('policy-btn');
    const menu = document.getElementById('policy-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    });
}

// Khởi tạo khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initAccountMenu();
    setupPolicyDropdown();
});

// Export function cho các file khác sử dụng
window.updateCartCount = updateCartCount;