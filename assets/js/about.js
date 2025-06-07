
fetch('comestic_shop/components/header.html')
  .then(res => res.text())
  .then(data => { document.getElementById('header-container').innerHTML = data; });
fetch('comestic_shop/components/footer.html')
  .then(res => res.text())
  .then(data => { document.getElementById('footer-container').innerHTML = data; });

document.addEventListener("DOMContentLoaded", function () {
  // Accordion toggle
  const toggles = document.querySelectorAll('.accordion-toggle');
  const contents = document.querySelectorAll('.accordion-content');
  toggles.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      contents[i].style.display = contents[i].style.display === 'block' ? 'none' : 'block';
    });
  });
 
  // Nút lên đầu + menu nổi
  const topBtn = document.querySelector(".top-button");
  const menuBtn = document.getElementById("menuToggle");
  const menuPopup = document.getElementById("menuPopup");
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 300;
    topBtn.style.display = show ? "flex" : "none";
    menuBtn.style.display = show ? "flex" : "none";
  });

  // Menu mục lớn tự động
  const headings = document.querySelectorAll('.container h2');
  menuPopup.innerHTML = '';
  headings.forEach(h2 => {
    if (!h2.id) h2.id = h2.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const a = document.createElement('a');
    a.href = '#' + h2.id;
    a.textContent = h2.textContent;
    menuPopup.appendChild(a);
  });
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menuPopup.style.display = menuPopup.style.display === "flex" ? "none" : "flex";
  });
  document.addEventListener("click", function (e) {
    if (!menuPopup.contains(e.target) && !menuBtn.contains(e.target)) {
      menuPopup.style.display = "none";
    }
  });
// Intersection
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // Đội ngũ nhân sự
  const members = [
    {
      name: "Bùi Hoa",
      role: "Đồng sáng lập - Định hướng sản phẩm & chất lượng",
      img: "hoa.jpg",
      desc: "Tập trung vào việc phát triển các tiêu chuẩn chất lượng sản phẩm, phối hợp nghiên cứu công thức mỹ phẩm lành tính, an toàn và phù hợp với làn da phụ nữ Việt. Chịu trách nhiệm quản lý danh mục sản phẩm và đảm bảo trải nghiệm người dùng tốt nhất về mặt hiệu quả sản phẩm."
    },
    {
      name: "Phương Anh Nguyễn",
      role: "Đồng sáng lập - Phát triển nội dung & truyền thông",
      img: "anh.jpg",
      desc: "Phụ trách chiến lược nội dung và hình ảnh cho các chiến dịch truyền thông. Sáng tạo nội dung phù hợp với thương hiệu, tương tác tốt với khách hàng trên các nền tảng số và xây dựng bản sắc riêng cho Elaria trong tâm trí người dùng."
    },
    {
      name: "Huyền Lê",
      role: "Đồng sáng lập - Thiết kế trải nghiệm người dùng",
      img: "huyen.jpg",
      desc: "Chịu trách nhiệm về giao diện và trải nghiệm người dùng cho toàn bộ hệ sinh thái của Elaria từ website, mạng xã hội đến ứng dụng. Đảm bảo sự hài hòa về mặt thị giác, đồng thời giúp khách hàng dễ dàng tiếp cận và tương tác với thương hiệu."
    },
    {
      name: "Minh Thu",
      role: "Đồng sáng lập - Điều phối chiến lược & nghiên cứu thị trường",
      img: "thu.jpg",
      desc: "Phụ trách nghiên cứu và phân tích hành vi khách hàng, xu hướng làm đẹp, từ đó đề xuất các chiến lược phát triển sản phẩm và chiến dịch phù hợp với nhu cầu thị trường. Đảm bảo sự đồng nhất giữa định hướng thương hiệu và kỳ vọng người tiêu dùng."
    }
  ];
  function renderMember(index) {
    const m = members[index];
    const html = `
      <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <img src="${m.img}" alt="${m.name}" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h3 style="margin-top: 10px; color: #2c6f9e">${m.name}</h3>
        </div>
        <div style="flex: 2; min-width: 300px;">
          <p style="font-weight: bold; color: #2c6f9e">${m.role}</p>
          <p>${m.desc}</p>
        </div>
      </div>
    `;
    const container = document.getElementById('team-slider');
    container.style.opacity = 0;
    setTimeout(() => {
      container.innerHTML = html;
      container.style.opacity = 1;
    }, 300);
  }
  let teamIndex = 0;
  renderMember(teamIndex);
  setInterval(() => {
    teamIndex = (teamIndex + 1) % members.length;
    renderMember(teamIndex);
  }, 5000);
// Lên đầu trang & quay lại
  document.querySelector(".top-button").onclick = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' });
document.querySelector(".back-button").onclick = () =>
  window.location.href = "/index.html";

});
 
