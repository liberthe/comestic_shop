fetch('/cosmetic_shop/components/header.html')
  .then(res => res.text())
  .then(data => { document.getElementById('header').innerHTML = data; });
fetch('/cosmetic_shop/components/footer.html')
  .then(res => res.text())
  .then(data => { document.getElementById('footer').innerHTML = data; });

const blogPosts = [
  {
    id: 1,
    title: "Top 5 sản phẩm dưỡng ẩm cho da khô mùa hè",
    desc: "Khám phá những lựa chọn nhẹ dịu, không gây bết dính mà vẫn cấp ẩm tuyệt vời cho làn da...",
    image: "https://file.hstatic.net/200000073977/file/3-cac-loai-my-pham-xanh-pho-bien_33cb63d343e04abc886542d9485f4587.jpg"
  },
  {
    id: 2,
    title: "Bí quyết chăm sóc da ban đêm đúng cách",
    desc: "Đêm là thời điểm vàng để phục hồi da. Hãy cùng Elaria tìm hiểu cách tối ưu hiệu quả dưỡng da.",
    image: "https://cdn.tgdd.vn//News/1492544//cac-buoc-cham-soc-da-mat-ban-dem-truoc-khi-di-ngu-15-845x500.jpg"
  },
  {
    id: 3,
    title: "Câu chuyện đằng sau Elaria: Vẻ đẹp thuần khiết",
    desc: "Thương hiệu được truyền cảm hứng từ vẻ đẹp tự nhiên và sự tinh tế của phụ nữ Á Đông...",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls3ph561b6vtff"
  },
  {
    id: 4,
    title: "Thế nào là chu trình skincare chuẩn?",
    desc: "Bạn đang làm đủ bước nhưng da vẫn chưa cải thiện? Có thể bạn đang thiếu hoặc làm sai thứ tự...",
    image: "https://channel.mediacdn.vn/428462621602512896/2023/12/15/photo-1-1702613749553344437682.jpg"
  },
  {
    id: 5,
    title: "Tại sao nên dùng kem chống nắng hằng ngày?",
    desc: "Tia UV gây hại ngay cả khi trời râm. Bảo vệ da là việc cần làm mỗi ngày để duy trì làn da trẻ khỏe.",
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2023-07/vien_chong_nang_co_thay_the_kem_chong_nang.png"
  },
  {
    id: 6,
    title: "Collagen & trắng da: nên chọn loại nào?",
    desc: "Cùng phân tích lợi ích và tác động của collagen và các viên trắng da với từng loại da.",
    image: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/nen_uong_vien_trang_da_hay_collagen_thi_tot_hon_cho_da_cua_ban_3_3d9b309ed4.png"
  },
  {
    id: 7,
    title: "Review top serum vitamin C hot nhất 2025",
    desc: "Tổng hợp các sản phẩm vitamin C sáng da đang được ưa chuộng và review chân thật từ người dùng.",
    image: "https://bizweb.dktcdn.net/thumb/grande/100/194/749/products/screen-shot-2023-09-23-at-11-44-07-am-1695444254662.png?v=1747813974947"
  },
  {
    id: 8,
    title: "Toner: bước cần hay có thể bỏ?",
    desc: "Liệu toner có thật sự cần thiết trong chu trình chăm sóc da? Câu trả lời sẽ khiến bạn bất ngờ.",
    image: "https://bizweb.dktcdn.net/100/443/867/products/wellage-toner-hyaluronic.png?v=1712918188763"
  },
 
];

// Phân trang
const blogsPerPage = 6;
let currentPage = 1;

function renderBlogs(page) {
  const blogContainer = document.getElementById("blog-container");
  blogContainer.innerHTML = "";
  const start = (page - 1) * blogsPerPage;
  const end = start + blogsPerPage;
  const blogsToShow = blogPosts.slice(start, end);

  blogsToShow.forEach(post => {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="Blog ${post.id}">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        <a href="blog-detail.html?id=${post.id}">Xem thêm →</a>
      </div>`
    ;
     blogContainer.appendChild(card);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".blog-card").forEach(card => observer.observe(card));
}

function renderPagination() {
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;
    if (i === currentPage) link.style.fontWeight = "bold";
    link.addEventListener("click", e => {
      e.preventDefault();
      currentPage = i;
      renderBlogs(currentPage);
      renderPagination();
    });
    pagination.appendChild(link);
  }
}

//Quay lại
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs(currentPage);
  renderPagination();
 document.querySelector(".back-button").onclick = () =>
  window.location.href = "/index.html";
});


// Render tất cả blog 
const blogVertical = document.getElementById("blog-list-vertical");
blogPosts.slice(-2).forEach(post => {
  blogVertical.innerHTML += `
    <div class="blog-vertical-card">
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-vertical-content">
        <h4>${post.title}</h4>
        <p>
          ${post.desc}
        </p>
        <a href="blog-detail.html?id=${post.id}">Đọc chi tiết &rarr;</a>
      </div>
    </div>
  `;
});

// Render top
const sidebarList = document.getElementById("sidebar-top-list");
blogPosts.slice(0, 4).forEach(post => {
  sidebarList.innerHTML += `
    <li>
      <img src="${post.image}" alt="${post.title}">
      <a href="blog-detail.html?id=${post.id}" class="top-link">${post.title}</a>
    </li>
  `;
});



