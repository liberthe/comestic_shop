const products = [
  {
    id: 1,
    price: 350000, // Giá sản phẩm
    category: "serum", // Danh mục sản phẩm
    isNew: true, // Sản phẩm mới
    name: "Tinh chất ốc sên Cosrx Advanced Snail 96 Mucin Power Essence",
  image: "https://th.bing.com/th/id/OIP.VYsyLyOhy_70IfFdZe_rRQAAAA?r=0&rs=1&pid=ImgDetMain", // Ảnh chính
  images: ["https://mistetic.com/wp-content/uploads/2019/10/COSRX-Advanced-Snail-96-Mucin-Power-Essence-texture.jpg", 
    "https://images.squarespace-cdn.com/content/v1/63161a6859f2c606650c059c/45361066-1f43-41a4-a663-8a60c12fa92c/Cosrx%27s+Snail+96+Mucin+Power+Essence+Explained.jpeg"], // Mảng ảnh (nếu có nhiều ảnh)
  shortDesc: "Sản phẩm chăm sóc da tuyệt vời được chiết xuất từ dịch nhầy ốc sên với tỷ lệ cao đến 96.3%, giúp tái tạo và dưỡng ẩm cho da.", // Mô tả ngắn
  features: ["Chiết xuất 96.3% tinh chất dịch ốc sên giúp hỗ trợ tái tạo và nuôi dưỡng làn da"
    , "Hỗ trợ giúp da chống và ngừa viêm sưng đỏ do mụn",
    "Giúp da giảm sắc tố "], // Đặc điểm nổi bật
  sale: "-20%", // Nếu có giảm giá
 description: `
  <p>
    <strong>COSRX Advanced Snail 96 Mucin Power Essence</strong> là tinh chất dưỡng da nổi tiếng với thành phần chính là dịch nhầy ốc sên lên tới 96.3%. Sản phẩm giúp phục hồi, tái tạo làn da tổn thương, cấp ẩm sâu và hỗ trợ làm mờ vết thâm, sẹo mụn hiệu quả.
  </p>
  <ul class="list-disc pl-5 mt-2">
    <li>Phù hợp với mọi loại da, đặc biệt là da yếu, da sau mụn hoặc da cần phục hồi.</li>
    <li>Kết cấu dạng gel lỏng, thẩm thấu nhanh, không gây nhờn rít.</li>
    <li>Không chứa cồn, hương liệu, paraben, an toàn cho da nhạy cảm.</li>
    <li>Giúp da mềm mại, căng bóng và khỏe mạnh hơn sau một thời gian sử dụng.</li>
  </ul>
  <p class="mt-2">
    Sản phẩm được yêu thích bởi khả năng làm dịu da, giảm kích ứng và hỗ trợ quá trình tái tạo tự nhiên của làn da. Sử dụng đều đặn mỗi ngày để cảm nhận sự thay đổi rõ rệt!
  </p>
`, // HTML mô tả dài
  ingredients: `
  <ul class="list-disc pl-5">
    <li>Snail Secretion Filtrate (dịch nhầy ốc sên): 96.3% – thành phần chính giúp phục hồi và tái tạo da.</li>
    <li>Betaine: Giữ ẩm và làm dịu da.</li>
    <li>Butylene Glycol: Hỗ trợ cấp ẩm và làm mềm da.</li>
    <li>1,2-Hexanediol: Dưỡng ẩm và ổn định công thức.</li>
    <li>Sodium Polyacrylate: Tăng khả năng giữ nước cho da.</li>
    <li>Phenoxyethanol: Chất bảo quản an toàn.</li>
    <li>Sodium Hyaluronate: Cấp ẩm sâu, giúp da căng mọng.</li>
    <li>Allantoin: Làm dịu và phục hồi da.</li>
    <li>Ethyl Hexanediol, Carbomer, Panthenol, Arginine: Hỗ trợ dưỡng ẩm, làm dịu và cân bằng da.</li>
  </ul>
`, // HTML danh sách thành phần
 usage: `
  <ol class="list-decimal pl-5">
    <li>Sau khi rửa mặt và dùng toner, lấy một lượng vừa đủ tinh chất ra lòng bàn tay.</li>
    <li>Nhẹ nhàng thoa đều lên toàn bộ khuôn mặt, tránh vùng mắt và môi.</li>
    <li>Dùng đầu ngón tay vỗ nhẹ để tinh chất thẩm thấu sâu vào da.</li>
    <li>Tiếp tục các bước dưỡng da tiếp theo (kem dưỡng, kem chống nắng... nếu dùng buổi sáng).</li>
    <li>Sử dụng đều đặn mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
  </ol>
`, // HTML hướng dẫn sử dụng
    rating: 4.8,
    reviews: 123, // Số lượng đánh giá
    customerReviews: [ // Danh sách đánh giá chi tiết
      {
        name: "Nguyễn Thị Lan",
        rating: 5,
        time: "2 tuần trước",
        content: "Sản phẩm rất tuyệt vời! Da mình từ khô ráp giờ đã mềm mại hơn hẳn. Sẽ mua tiếp!"
      },
      {
        name: "Trần Văn Nam",
        rating: 4,
        time: "1 tháng trước",
        content: "Dùng được 3 tuần, thấy da cải thiện rõ rệt. Vết thâm mụn cũng mờ hơn."
      }
    ]
  },
  {
    id: 2,
    name: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm",
    price: 240000,
    image: "https://th.bing.com/th/id/OIP.IAlhk8kx5BqRAqxhoKs6jQHaHa?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.uXDbTcVrVUbT2WRYYb6DtgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.KCi7kb6Qq_045XPG96ys-QHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    ],
    category: "toner",
    isNew: false,
    shortDesc: "Nước hoa hồng không mùi, dịu nhẹ, giúp cân bằng độ pH và cấp ẩm cho da nhạy cảm.",
    features: [
      "Không chứa cồn và hương liệu, phù hợp cho da nhạy cảm",
      "Cấp ẩm tức thì, làm dịu da kích ứng",
      "Hỗ trợ thu nhỏ lỗ chân lông và chuẩn bị da cho các bước dưỡng tiếp theo"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Nước Hoa Hồng Klairs Không Mùi</strong> là sản phẩm dưỡng da nổi tiếng dành cho da nhạy cảm, giúp cân bằng độ pH, cấp ẩm và làm dịu da. Sản phẩm không chứa cồn, hương liệu hay paraben, đảm bảo an toàn cho làn da dễ kích ứng.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da nhạy cảm và da khô.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Hỗ trợ làm dịu các vết đỏ và kích ứng trên da.</li>
        <li>Chuẩn bị da tối ưu cho các bước dưỡng da tiếp theo.</li>
      </ul>
      <p class="mt-2">
        Sử dụng đều đặn mỗi ngày để cảm nhận làn da mềm mại, mịn màng và khỏe mạnh hơn!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>Centella Asiatica Extract: Làm dịu và phục hồi da.</li>
        <li>Licorice Root Extract: Làm sáng da và giảm kích ứng.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
        <li>Caprylyl Glycol: Dưỡng ẩm và bảo vệ da.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt, lấy một lượng vừa đủ nước hoa hồng ra bông tẩy trang hoặc lòng bàn tay.</li>
        <li>Nhẹ nhàng thoa hoặc vỗ đều lên toàn bộ khuôn mặt, tránh vùng mắt và môi.</li>
        <li>Chờ vài giây để sản phẩm thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da tiếp theo như serum hoặc kem dưỡng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 176,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "1 tháng trước",
        content: "Toner rất dịu nhẹ, da mình nhạy cảm nhưng dùng không bị kích ứng. Rất đáng tiền!"
      },
      {
        name: "Phạm Văn Hùng",
        rating: 4,
        time: "2 tuần trước",
        content: "Cảm giác da mềm và ẩm hơn sau khi dùng, nhưng mình mong nó làm sáng da nhanh hơn."
      }
    ]
  },
  {
    id: 3,
    name: "Serum dưỡng sáng thu nhỏ lỗ chân lông Anodin Niacinamide 10 Plus",
    price: 290000,
    image: "https://th.bing.com/th/id/OIP.LN9qdEQEJo-Owk5oin4qEgHaF7?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.t_obKmy7tQjEmUK5391wvQHaIY?r=0&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.RNcYN1byqv8QdgQhBTsQqgHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "serum",
    isNew: true,
    shortDesc: "Serum chứa 10% Niacinamide giúp dưỡng sáng da, thu nhỏ lỗ chân lông và cải thiện kết cấu da.",
    features: [
      "Chứa 10% Niacinamide giúp làm sáng da và giảm thâm",
      "Hỗ trợ kiểm soát dầu thừa và thu nhỏ lỗ chân lông",
      "Tăng cường độ ẩm và cải thiện độ đàn hồi da"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Serum Anodin Niacinamide 10 Plus</strong> là sản phẩm dưỡng da với thành phần chính là 10% Niacinamide, giúp làm sáng da, thu nhỏ lỗ chân lông và cải thiện kết cấu da. Sản phẩm phù hợp với da dầu và da hỗn hợp.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da dầu, da hỗn hợp và da có lỗ chân lông to.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn, paraben, an toàn cho da.</li>
        <li>Giúp da sáng mịn và đều màu hơn sau khi sử dụng đều đặn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng serum này trong chu trình dưỡng da để có làn da sáng mịn, căng bóng!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Niacinamide (10%): Làm sáng da, thu nhỏ lỗ chân lông.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hyaluronic Acid: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
        <li>Panthenol: Làm dịu và phục hồi da.</li>
        <li>Allantoin: Hỗ trợ làm dịu da.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt và dùng toner, lấy 2-3 giọt serum ra lòng bàn tay.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt, tập trung vào vùng có lỗ chân lông to.</li>
        <li>Vỗ nhẹ để serum thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như kem dưỡng hoặc kem chống nắng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4,
    reviews: 142,
    customerReviews: [
      {
        name: "Trần Thị Hoa",
        rating: 4,
        time: "3 tuần trước",
        content: "Serum thấm nhanh, da mình sáng hơn sau 2 tuần sử dụng."
      },
      {
        name: "Nguyễn Văn An",
        rating: 3,
        time: "1 tháng trước",
        content: "Hiệu quả tạm ổn, nhưng cần dùng lâu hơn để thấy rõ kết quả."
      }
    ]
  },
  {
    id: 4,
    name: "Sáp Tẩy Trang oh! oh! Cleansing Balm",
    price: 350000,
    image: "https://th.bing.com/th/id/OIP.kay_P-0hL1IPuXeojbbRtwHaHa?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/443/867/products/sap-tay-trang-oh-oh-lam-sach-sau-tre-hoa-da-150g.png?v=1710496308563",
      "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/11/sap-tay-trang-oh-oh-divine-blue-cleansing-massaging-balm-150ml-6549b9d4d73a5-07112023111516.jpg"
    ],
    category: "tay-trang",
    isNew: false,
    shortDesc: "Sáp tẩy trang dịu nhẹ, làm sạch sâu lớp trang điểm và bụi bẩn mà không gây khô da.",
    features: [
      "Làm sạch sâu lớp trang điểm, kem chống nắng và bụi bẩn",
      "Dưỡng ẩm da trong quá trình tẩy trang",
      "Phù hợp với mọi loại da, kể cả da nhạy cảm"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Sáp Tẩy Trang oh! oh! Cleansing Balm</strong> là sản phẩm tẩy trang dạng sáp với công thức dịu nhẹ, giúp làm sạch sâu lớp trang điểm, kem chống nắng và bụi bẩn mà vẫn giữ độ ẩm cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, kể cả da nhạy cảm.</li>
        <li>Kết cấu sáp tan chảy thành dầu, dễ dàng làm sạch mà không gây kích ứng.</li>
        <li>Không chứa paraben, hương liệu nhân tạo.</li>
        <li>Giúp da sạch sẽ, mềm mại sau khi tẩy trang.</li>
      </ul>
      <p class="mt-2">
        Sử dụng sản phẩm này để bắt đầu chu trình dưỡng da với làn da sạch sẽ và tươi mới!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Cetyl Ethylhexanoate: Làm sạch và hòa tan lớp trang điểm.</li>
        <li>Caprylic/Capric Triglyceride: Dưỡng ẩm và làm mềm da.</li>
        <li>PEG-20 Glyceryl Triisostearate: Hỗ trợ làm sạch sâu.</li>
        <li>Synthetic Wax: Tạo kết cấu sáp.</li>
        <li>Simmondsia Chinensis (Jojoba) Seed Oil: Dưỡng ẩm da.</li>
        <li>Tocopherol: Chống oxy hóa, bảo vệ da.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Lấy một lượng sáp vừa đủ bằng thìa hoặc tay sạch.</li>
        <li>Thoa sáp lên da khô, massage nhẹ nhàng để hòa tan lớp trang điểm.</li>
        <li>Thêm một ít nước để nhũ hóa sáp thành dạng sữa.</li>
        <li>Rửa sạch với nước ấm và tiếp tục bước làm sạch thứ hai nếu cần.</li>
        <li>Sử dụng mỗi tối để làm sạch da hiệu quả.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 198,
    customerReviews: [
      {
        name: "Hoàng Thị Ngọc",
        rating: 5,
        time: "2 tuần trước",
        content: "Tẩy trang rất sạch, không làm khô da. Rất thích sản phẩm này!"
      },
      {
        name: "Lê Văn Minh",
        rating: 4,
        time: "1 tháng trước",
        content: "Dùng ổn, nhưng cần rửa kỹ để không còn dầu trên da."
      }
    ]
  },
  {
    id: 5,
    name: "Kem Mắt Estee Lauder Advanced Night Repair Eye",
    price: 420000,
    image: "https://th.bing.com/th/id/OIP.ZRQSnmSJozyGhrKfhoxPRAHaHa?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://th.bing.com/th/id/OIP.es9Ib4RpNr5g0qtlPKk5fwHaHa?r=0&rs=1&pid=ImgDetMain",
     "https://product.hstatic.net/1000274973/product/untitled_89e1dee7a3ae403a961f2516fd582b16.png"
    ],
    category: "mat",
    isNew: false,
    shortDesc: "Kem mắt cao cấp giúp giảm quầng thâm, bọng mắt và nếp nhăn quanh vùng mắt.",
    features: [
      "Giảm quầng thâm và bọng mắt hiệu quả",
      "Cấp ẩm và tăng cường độ đàn hồi vùng da mắt",
      "Chống lão hóa, làm mờ nếp nhăn"
    ],
    sale: "-5%",
    description: `
      <p>
        <strong>Kem Mắt Estee Lauder Advanced Night Repair Eye</strong> là sản phẩm chăm sóc vùng da mắt với công thức tiên tiến, giúp giảm quầng thâm, bọng mắt và nếp nhăn, mang lại vẻ tươi trẻ cho đôi mắt.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da có dấu hiệu lão hóa.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây nặng mắt.</li>
        <li>Không chứa hương liệu mạnh, an toàn cho vùng da nhạy cảm quanh mắt.</li>
        <li>Giúp vùng da mắt căng mịn, tươi sáng hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng đều đặn để có đôi mắt rạng rỡ và trẻ trung!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hyaluronic Acid: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Dimethicone: Làm mềm và bảo vệ da.</li>
        <li>Tripeptide-32: Hỗ trợ chống lão hóa.</li>
        <li>Sodium Hyaluronate: Dưỡng ẩm và làm căng da.</li>
        <li>Caffeine: Giảm bọng mắt và quầng thâm.</li>
        <li>Tocopheryl Acetate: Chống oxy hóa.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng serum, lấy một lượng nhỏ kem mắt.</li>
        <li>Chấm kem lên vùng da quanh mắt, tránh tiếp xúc trực tiếp với mắt.</li>
        <li>Dùng ngón áp út vỗ nhẹ để kem thẩm thấu.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
        <li>Kết hợp với kem dưỡng da để tăng hiệu quả.</li>
      </ol>
    `,
    rating: 4,
    reviews: 87,
    customerReviews: [
      {
        name: "Nguyễn Thị Hồng",
        rating: 4,
        time: "3 tuần trước",
        content: "Kem thấm nhanh, vùng mắt đỡ thâm sau 1 tháng."
      },
      {
        name: "Trần Văn Long",
        rating: 3,
        time: "2 tuần trước",
        content: "Hiệu quả tạm ổn, nhưng giá hơi cao so với kết quả."
      }
    ]
  },
  {
    id: 6,
    name: "Kem Dưỡng Ẩm Hyaluronic Hadalabo Gokujyun Premium",
    price: 320000,
    image: "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(70)/https://chiaki.vn/upload/seller/2135/kem-duong-sang-da-chuyen-sau-hada-labo-50ml-2.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.85Ov-MjQbsayOvI9Y9FBdwHaHa?r=0&w=600&h=600&rs=1&pid=ImgDetMain",
    ],
    category: "duong-am",
    isNew: false,
    shortDesc: "Kem dưỡng ẩm chứa nhiều loại Hyaluronic Acid giúp cấp ẩm sâu và duy trì độ ẩm lâu dài.",
    features: [
      "Chứa 5 loại Hyaluronic Acid cung cấp độ ẩm tối ưu",
      "Làm mềm và tăng cường độ đàn hồi da",
      "Phù hợp với da khô và da thiếu nước"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem Dưỡng Ẩm Hyaluronic Hadalabo Gokujyun Premium</strong> là sản phẩm dưỡng ẩm cao cấp với công thức chứa 5 loại Hyaluronic Acid, giúp cấp ẩm sâu, làm mềm và tăng cường độ đàn hồi cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da khô, da thiếu nước và da nhạy cảm.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn, hương liệu mạnh, an toàn cho da.</li>
        <li>Giúp da căng mọng, mịn màng và khỏe mạnh.</li>
      </ul>
      <p class="mt-2">
        Sử dụng sản phẩm này để duy trì làn da ẩm mịn suốt cả ngày!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hyaluronic Acid: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Sodium Hyaluronate: Dưỡng ẩm và làm căng da.</li>
        <li>Hydrolyzed Hyaluronic Acid: Thẩm thấu sâu vào da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Butylene Glycol: Hỗ trợ cấp ẩm.</li>
        <li>Squalane: Bảo vệ và làm mềm da.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi dùng toner và serum, lấy một lượng kem vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối để duy trì độ ẩm.</li>
        <li>Kết hợp với kem chống nắng vào ban ngày.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 124,
    customerReviews: [
      {
        name: "Phạm Thị Lan",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem dưỡng ẩm rất tốt, da mình mềm mịn cả ngày!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "1 tháng trước",
        content: "Dưỡng ẩm tốt, nhưng hơi lâu thấm với da dầu."
      }
    ]
  },
  {
    id: 7,
    name: "Serum Vitamin C Kiehl's Clearly Corrective Dark Spot Solution",
    price: 1690000,
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/12/serum-vitamin-c-sang-da-kiehl-s-clearly-corrective-dark-spot-solution-30ml-c_tn-676e513e0424f-27122024140326.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.eUR2cKkO2jLnUMQf7cl8oQHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/345/186/products/2631-1594797903-serum-kiehl-s-clearly-corrective-dark-spot-solution.jpg?v=1611217326757"
    ],
    category: "serum",
    isNew: true,
    shortDesc: "Serum Vitamin C giúp làm sáng da, giảm thâm và cải thiện độ đều màu da.",
    features: [
      "Chứa Vitamin C và Acid Salicylic giúp làm sáng và giảm thâm",
      "Cải thiện độ đều màu và kết cấu da",
      "Phù hợp với mọi loại da, kể cả da nhạy cảm"
    ],
    sale: "-20%",
    description: `
      <p>
        <strong>Serum Vitamin C Kiehl's Clearly Corrective Dark Spot Solution</strong> là sản phẩm dưỡng da cao cấp với công thức chứa Vitamin C và Acid Salicylic, giúp làm sáng da, giảm thâm và cải thiện độ đều màu.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, kể cả da nhạy cảm.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây nhờn rít.</li>
        <li>Giúp làm mờ các vết thâm do mụn và sạm da.</li>
        <li>Tăng cường độ sáng mịn và rạng rỡ cho da.</li>
      </ul>
      <p class="mt-2">
        Sử dụng serum này để có làn da sáng mịn, đều màu và rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Ascorbic Acid (Vitamin C): Làm sáng da và chống oxy hóa.</li>
        <li>Salicylic Acid: Làm sạch lỗ chân lông và giảm thâm.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Propylene Glycol: Dưỡng ẩm và làm mềm da.</li>
        <li>Glycerin: Hỗ trợ cấp ẩm.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
        <li>Hydroxyethylcellulose: Tăng độ ổn định công thức.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, lấy 2-3 giọt serum.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Vỗ nhẹ để serum thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối, kết hợp kem chống nắng vào ban ngày.</li>
        <li>Bảo quản sản phẩm ở nơi khô ráo, tránh ánh nắng trực tiếp.</li>
      </ol>
    `,
    rating: 5,
    reviews: 89,
    customerReviews: [
      {
        name: "Trần Thị Thanh",
        rating: 5,
        time: "1 tháng trước",
        content: "Serum rất đáng tiền, da sáng rõ sau 3 tuần sử dụng!"
      },
      {
        name: "Nguyễn Văn Hùng",
        rating: 4,
        time: "2 tuần trước",
        content: "Da đều màu hơn, nhưng giá hơi cao."
      }
    ]
  },
  {
    id: 8,
    name: "Kem Chống Nắng Make P:rem UV Defense Me Blue Ray Sun Gel",
    price: 250000,
    image: "https://th.bing.com/th/id/OIP.vCSeqGpVlBnic4f2XNCXowAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/441/264/products/079ba9eb-b75a-4241-9a2c-6ae3662884b4-jfif-1727776893735.jpg?v=1727776899650",
      "https://newwaymart.vn/public/uploads/quynh/review-kem-chong-nang-make-prem-xanh-la-co-tot-khong-co-nang-tone-khong-3.png"
    ],
    category: "chong-nang",
    isNew: false,
    shortDesc: "Kem chống nắng dạng gel với kết cấu nhẹ, bảo vệ da khỏi tia UV và cấp ẩm.",
    features: [
      "Bảo vệ da khỏi tia UVA/UVB với SPF50+ PA++++",
      "Kết cấu gel nhẹ, không gây bết dính",
      "Cấp ẩm và làm dịu da trong suốt ngày"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem Chống Nắng Make P:rem UV Defense Me Blue Ray Sun Gel</strong> là sản phẩm chống nắng dạng gel với chỉ số SPF50+ PA++++, giúp bảo vệ da khỏi tia UV hiệu quả mà vẫn giữ da ẩm mịn.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da dầu và da hỗn hợp.</li>
        <li>Kết cấu gel nhẹ, thẩm thấu nhanh, không để lại vệt trắng.</li>
        <li>Không chứa cồn mạnh, an toàn cho da nhạy cảm.</li>
        <li>Giúp da luôn tươi tắn và được bảo vệ suốt cả ngày.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem chống nắng này mỗi ngày để bảo vệ làn da khỏi tác hại của tia UV!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Ethylhexyl Methoxycinnamate: Chống tia UVB.</li>
        <li>Homosalate: Bảo vệ da khỏi tia UVB.</li>
        <li>Diethylamino Hydroxybenzoyl Hexyl Benzoate: Chống tia UVA.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Niacinamide: Làm sáng da.</li>
        <li>Adenosine: Chống lão hóa.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da, lấy một lượng kem chống nắng vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ, tránh vùng mắt.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Thoa lại sau mỗi 2-3 giờ nếu tiếp xúc nhiều với ánh nắng.</li>
        <li>Sử dụng mỗi sáng để bảo vệ da hiệu quả.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 145,
    customerReviews: [
      {
        name: "Lê Thị Ngọc",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem chống nắng thấm nhanh, không bết, rất thích hợp cho da dầu!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "1 tháng trước",
        content: "Bảo vệ da tốt, nhưng cần thoa lại thường xuyên khi ra ngoài."
      }
    ]
  },
  {
    id: 9,
    name: "Mặt Nạ Dưỡng Da Mediheal N.M.F Aquaring Ampoule Mask",
    price: 180000,
    image: "https://media.hasaki.vn/wysiwyg/UyenKhanh/Mat-Na-Mediheal-Essential-Mask-25ml-9.jpg",
    images: [
      "https://bonita.vn/wp-content/uploads/2022/01/0ce8e1afc4020ebf206713bc3f50eb31.jpg",
      "https://myphamjane.com/wp-content/uploads/2019/07/mat-na-mediheal-essential-mask-ex.jpg"
    ],
    category: "mat-na",
    isNew: false,
    shortDesc: "Mặt nạ cấp ẩm sâu với công thức N.M.F giúp da căng mọng và mịn màng.",
    features: [
      "Cấp ẩm sâu với công thức N.M.F (Natural Moisturizing Factor)",
      "Làm dịu và tăng cường độ đàn hồi da",
      "Phù hợp với mọi loại da, đặc biệt là da khô"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Mặt Nạ Dưỡng Da Mediheal N.M.F Aquaring Ampoule Mask</strong> là sản phẩm mặt nạ dưỡng da nổi tiếng với công thức N.M.F, giúp cấp ẩm sâu, làm dịu và mang lại làn da căng mọng, mịn màng.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.</li>
        <li>Miếng mặt nạ ôm sát da, thẩm thấu dưỡng chất nhanh.</li>
        <li>Không chứa paraben, an toàn cho da.</li>
        <li>Giúp da mềm mại, căng bóng sau khi sử dụng.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ này 2-3 lần/tuần để có làn da căng mọng và khỏe mạnh!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Allantoin: Làm dịu và phục hồi da.</li>
        <li>Ceramide NP: Tăng cường hàng rào bảo vệ da.</li>
        <li>Betaine: Hỗ trợ cấp ẩm và làm dịu da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, đắp mặt nạ lên mặt.</li>
        <li>Điều chỉnh mặt nạ để ôm sát da, tránh vùng mắt và môi.</li>
        <li>Để mặt nạ trên da từ 15-20 phút, sau đó gỡ bỏ.</li>
        <li>Vỗ nhẹ để dưỡng chất còn lại thẩm thấu vào da.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.7,
    reviews: 92,
    customerReviews: [
      {
        name: "Nguyễn Thị Hà",
        rating: 5,
        time: "1 tuần trước",
        content: "Mặt nạ cấp ẩm rất tốt, da căng mọng ngay sau khi dùng!"
      },
      {
        name: "Trần Văn Nam",
        rating: 4,
        time: "2 tuần trước",
        content: "Da mềm mịn hơn, nhưng giá hơi cao so với số lượng."
      }
    ]
  },
  {
    id: 10,
    name: "Serum Dưỡng Trắng Da Innisfree Green Tea Seed Serum",
    price: 250000,
    image: "https://th.bing.com/th/id/OIP.x2Tjegthgs9tJHq82m8qYwHaHa?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.0K5e-9ZWpXYkSOAGrG1xlgHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.n2gXm7rtrRia9wbSY0hVvAHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "serum",
    isNew: true,
    shortDesc: "Serum dưỡng trắng da với chiết xuất trà xanh giúp cấp ẩm và làm sáng da.",
    features: [
      "Chiết xuất từ trà xanh Jeju giàu chất chống oxy hóa",
      "Cấp ẩm sâu và làm sáng da tự nhiên",
      "Phù hợp với mọi loại da, đặc biệt là da khô"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Serum Dưỡng Trắng Da Innisfree Green Tea Seed Serum</strong> là sản phẩm dưỡng da với chiết xuất từ trà xanh Jeju, giúp cấp ẩm sâu, làm sáng da và bảo vệ da khỏi tác hại của môi trường.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da xỉn màu.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây nhờn rít.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da sáng mịn, căng bóng và khỏe mạnh.</li>
      </ul>
      <p class="mt-2">
        Sử dụng serum này để có làn da rạng rỡ và tràn đầy sức sống!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Camellia Sinensis Leaf Extract (Trà xanh): Chống oxy hóa, làm sáng da.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Propanediol: Hỗ trợ cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, lấy 2-3 giọt serum.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Vỗ nhẹ để serum thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như kem dưỡng hoặc kem chống nắng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.9,
    reviews: 75,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "1 tháng trước",
        content: "Serum thấm nhanh, da sáng và mịn hơn sau 2 tuần!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "2 tuần trước",
        content: "Da ẩm mịn, nhưng hiệu quả làm sáng cần thời gian dài hơn."
      }
    ]
  },
  {
    id: 11,
    name: "Serum Chống Lão Hóa Laneige Perfect Renew Regenerator",
    price: 950000,
    image: "https://th.bing.com/th/id/OIP.NcmyAfs8wFnWNrqW8JxzDAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://toplist.vn/images/800px/tinh-chat-chong-lao-hoa-laneige-serum-perfect-renew-3x-signature-1228230.jpg",
      "https://down-vn.img.susercontent.com/file/vn-11134208-7qukw-lhehqu2wmsc338"
    ],
    category: "serum",
    isNew: true,
    shortDesc: "Serum chống lão hóa giúp cải thiện nếp nhăn, tăng độ đàn hồi và làm sáng da.",
    features: [
      "Công thức chống lão hóa với Ceramide và Peptide",
      "Cải thiện độ đàn hồi và làm mờ nếp nhăn",
      "Cấp ẩm và làm sáng da tự nhiên"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Serum Chống Lão Hóa Laneige Perfect Renew Regenerator</strong> là sản phẩm dưỡng da cao cấp với công thức chứa Ceramide và Peptide, giúp cải thiện nếp nhăn, tăng độ đàn hồi và làm sáng da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da có dấu hiệu lão hóa và da khô.</li>
        <li>Kết cấu nhẹ, thẩm thấu nhanh, không gây nặng da.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da căng mịn, trẻ trung và rạng rỡ.</li>
      </ul>
      <p class="mt-2">
        Sử dụng serum này để duy trì làn da trẻ trung và khỏe mạnh!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Ceramide NP: Tăng cường hàng rào bảo vệ da.</li>
        <li>Peptide: Chống lão hóa, làm mờ nếp nhăn.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Adenosine: Hỗ trợ chống lão hóa.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, lấy 2-3 giọt serum.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Vỗ nhẹ để serum thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như kem dưỡng hoặc kem chống nắng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 5,
    reviews: 76,
    customerReviews: [
      {
        name: "Nguyễn Thị Lan",
        rating: 5,
        time: "1 tháng trước",
        content: "Serum rất tốt, da căng mịn và nếp nhăn giảm rõ rệt!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "2 tuần trước",
        content: "Da sáng hơn, nhưng giá hơi cao so với dung tích."
      }
    ]
  },
  {
    id: 12,
    name: "Kem chống nắng Anessa Perfect UV Sunscreen Skincare Milk",
    price: 650000,
    image: "https://file.hstatic.net/200000223113/file/banner_2986affedac641ecbf4484835ad7ec42.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.Nb8foznzG6CzpcKzmJy6FgHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.UR0KEex_MS-DfiYiUFK1dwHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "chong-nang",
    isNew: false,
    shortDesc: "Kem chống nắng cao cấp với công nghệ Aqua Booster, bảo vệ da khỏi tia UV và dưỡng ẩm.",
    features: [
      "Bảo vệ da khỏi tia UVA/UVB với SPF50+ PA++++",
      "Công nghệ Aqua Booster tăng cường khả năng chống nước",
      "Cấp ẩm và làm dịu da trong suốt ngày"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem chống nắng Anessa Perfect UV Sunscreen Skincare Milk</strong> là sản phẩm chống nắng cao cấp với công nghệ Aqua Booster, giúp bảo vệ da khỏi tia UV hiệu quả và duy trì độ ẩm cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da dầu và da hỗn hợp.</li>
        <li>Kết cấu sữa nhẹ, thẩm thấu nhanh, không để lại vệt trắng.</li>
        <li>Không chứa cồn mạnh, an toàn cho da nhạy cảm.</li>
        <li>Giúp da luôn được bảo vệ và mịn màng suốt cả ngày.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem chống nắng này mỗi ngày để bảo vệ làn da khỏi tác hại của tia UV!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Zinc Oxide: Chống tia UVA/UVB.</li>
        <li>Ethylhexyl Methoxycinnamate: Bảo vệ da khỏi tia UVB.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Dimethicone: Làm mềm và bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da, lấy một lượng kem chống nắng vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ, tránh vùng mắt.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Thoa lại sau mỗi 2-3 giờ nếu tiếp xúc nhiều với ánh nắng.</li>
        <li>Sử dụng mỗi sáng để bảo vệ da hiệu quả.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 76,
    customerReviews: [
      {
        name: "Lê Thị Hồng",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem chống nắng tốt nhất mình từng dùng, thấm nhanh và không bết!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "1 tháng trước",
        content: "Bảo vệ da tốt, nhưng giá hơi cao."
      }
    ]
  },
  {
    id: 13,
    name: "Mặt nạ ngủ Laneige Water Sleeping Mask",
    price: 150000,
    image: "https://icheck.com.vn/wp-content/uploads/2021/11/phan-biet-mat-na-ngu-laneige-that-gia-1.jpeg",
    images: [
      "https://cf.shopee.vn/file/334d6ca2ab15fadf80c30e7bc141af93",
      "https://nanio.vn/upload/images/hang_thai/z3585201436489d75d2d5a417a5b88ae939b5b8bf4e942.jpg"
    ],
    category: "mat-na",
    isNew: true,
    shortDesc: "Mặt nạ ngủ cấp ẩm sâu, giúp da căng mọng và mịn màng sau một đêm.",
    features: [
      "Cấp ẩm sâu với công thức Hydro Ionized Mineral Water",
      "Làm dịu và phục hồi da trong khi ngủ",
      "Phù hợp với mọi loại da, đặc biệt là da khô"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Mặt nạ ngủ Laneige Water Sleeping Mask</strong> là sản phẩm dưỡng da ban đêm với công thức Hydro Ionized Mineral Water, giúp cấp ẩm sâu, làm dịu và phục hồi da trong khi ngủ.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.</li>
        <li>Kết cấu gel nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa paraben, an toàn cho da.</li>
        <li>Giúp da căng mọng, mịn màng và tươi sáng sau khi thức dậy.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ ngủ này 2-3 lần/tuần để có làn da rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hydro Ionized Mineral Water: Cấp ẩm sâu, làm dịu da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Trehalose: Bảo vệ và dưỡng ẩm da.</li>
        <li>Propanediol: Hỗ trợ cấp ẩm.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da ban đêm, lấy một lượng mặt nạ vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt, tránh vùng mắt và môi.</li>
        <li>Để mặt nạ trên da qua đêm, không cần rửa lại.</li>
        <li>Sáng hôm sau, rửa mặt như bình thường.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.6,
    reviews: 176,
    customerReviews: [
      {
        name: "Nguyễn Thị Mai",
        rating: 5,
        time: "1 tuần trước",
        content: "Da căng mọng và mịn màng sau khi dùng, rất thích!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "2 tuần trước",
        content: "Hiệu quả tốt, nhưng cần dùng đều đặn để thấy rõ."
      }
    ]
  },
  {
    id: 14,
    name: "Kem mắt Innisfree Jeju Orchid Eye Cream",
    price: 570000,
    image: "https://th.bing.com/th/id/OIP.VpttW3IgLlM0zr4P-BYEmAHaEo?w=300&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://cf.shopee.vn/file/sg-11134201-22090-y5hvxv7eb1hvdd",
      "https://storage.beautyfulls.com/uploads-1/sg-press/600x/kem-duong-mat-cua-innisfree-113236.webp"
    ],
    category: "mat",
    isNew: true,
    shortDesc: "Kem mắt với chiết xuất hoa lan Jeju giúp giảm nếp nhăn và làm sáng vùng da mắt.",
    features: [
      "Chiết xuất hoa lan Jeju giàu chất chống oxy hóa",
      "Giảm nếp nhăn và quầng thâm quanh mắt",
      "Cấp ẩm và tăng cường độ đàn hồi vùng da mắt"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem mắt Innisfree Jeju Orchid Eye Cream</strong> là sản phẩm chăm sóc vùng da mắt với chiết xuất từ hoa lan Jeju, giúp giảm nếp nhăn, làm sáng và tăng cường độ đàn hồi cho vùng da quanh mắt.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da có dấu hiệu lão hóa và da khô.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây nặng mắt.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp vùng da mắt căng mịn, tươi sáng hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem mắt này để có đôi mắt trẻ trung và rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Orchid Extract: Chống oxy hóa, làm sáng da.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Adenosine: Chống lão hóa, làm mờ nếp nhăn.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng serum, lấy một lượng nhỏ kem mắt.</li>
        <li>Chấm kem lên vùng da quanh mắt, tránh tiếp xúc trực tiếp với mắt.</li>
        <li>Dùng ngón áp út vỗ nhẹ để kem thẩm thấu.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
        <li>Kết hợp với kem dưỡng da để tăng hiệu quả.</li>
      </ol>
    `,
    rating: 5,
    reviews: 26,
    customerReviews: [
      {
        name: "Lê Thị Hồng",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem mắt thấm nhanh, vùng mắt sáng hơn rõ rệt!"
      },
      {
        name: "Nguyễn Văn Long",
        rating: 4,
        time: "1 tháng trước",
        content: "Hiệu quả tốt, nhưng giá hơi cao so với dung tích."
      }
    ]
  },
  {
    id: 15,
    name: "Toner Skin1004 Centella Toning",
    price: 350000,
    image: "https://1.bp.blogspot.com/-6mOV26QQa4c/XqZu0_ft2qI/AAAAAAAAEb4/-mwnhaGiweI-5TuvQJu8weLxLvuoASLPACLcBGAsYHQ/s1600/REVIEW%2BTONING%2BTONER%2BSKIN%2B1004.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.XlhX2NM1rn9AD0IJAklcEgHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.8rSONPIINyScsArq0lPxmgHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "toner",
    isNew: true,
    shortDesc: "Toner với chiết xuất rau má giúp làm dịu da, giảm mụn và cải thiện kết cấu da.",
    features: [
      "Chiết xuất rau má (Centella Asiatica) làm dịu và phục hồi da",
      "Hỗ trợ giảm mụn và làm sạch lỗ chân lông",
      "Cấp ẩm và chuẩn bị da cho các bước dưỡng tiếp theo"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Toner Skin1004 Centella Toning</strong> là sản phẩm dưỡng da với chiết xuất từ rau má, giúp làm dịu da, giảm mụn và cải thiện kết cấu da, đặc biệt phù hợp với da nhạy cảm và da mụn.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da nhạy cảm, da mụn và da dầu.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn, an toàn cho da nhạy cảm.</li>
        <li>Giúp da mịn màng, sạch sẽ và khỏe mạnh hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng toner này để làm dịu và chuẩn bị da cho chu trình dưỡng da!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Centella Asiatica Extract: Làm dịu và phục hồi da.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Betaine: Hỗ trợ cấp ẩm và làm dịu da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
        <li>Disodium EDTA: Ổn định công thức.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt, lấy một lượng vừa đủ toner ra bông tẩy trang hoặc lòng bàn tay.</li>
        <li>Thoa hoặc vỗ nhẹ lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Chờ vài giây để toner thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như serum hoặc kem dưỡng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4,
    reviews: 96,
    customerReviews: [
      {
        name: "Nguyễn Thị Ngọc",
        rating: 4,
        time: "2 tuần trước",
        content: "Toner dịu nhẹ, giúp da mình bớt đỏ và mụn."
      },
      {
        name: "Trần Văn Minh",
        rating: 3,
        time: "1 tháng trước",
        content: "Toner ổn, nhưng hiệu quả giảm mụn chưa rõ rệt."
      }
    ]
  },
  {
    id: 16,
    name: "Kem chống nắng Biore UV Aqua Rich Watery Essence SPF50+ PA++++",
    price: 320000,
    image: "https://image-delivery.nyc3.cdn.digitaloceanspaces.com/full/b407533ad88e6fdd61617d5e8fa7c420.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.Fv_z3F3ajqpcaoGWt4OaHAHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain",
      "https://cloudflare.lipscosme.com/image/2d5951b942d7373dea2e2316-1656403609.png?auto=avif%2Cwebp&fio=1&orient=1&width=1200"
    ],
    category: "chong-nang",
    isNew: false,
    shortDesc: "Kem chống nắng dạng essence với kết cấu nhẹ, bảo vệ da khỏi tia UV và cấp ẩm.",
    features: [
      "Bảo vệ da khỏi tia UVA/UVB với SPF50+ PA++++",
      "Kết cấu essence nhẹ, không để lại vệt trắng",
      "Cấp ẩm và làm dịu da suốt cả ngày"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem chống nắng Biore UV Aqua Rich Watery Essence</strong> là sản phẩm chống nắng với kết cấu essence nhẹ, giúp bảo vệ da khỏi tia UV hiệu quả và duy trì độ ẩm cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da dầu và da hỗn hợp.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn mạnh, an toàn cho da nhạy cảm.</li>
        <li>Giúp da luôn được bảo vệ và mịn màng suốt cả ngày.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem chống nắng này mỗi ngày để bảo vệ làn da khỏi tác hại của tia UV!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Ethylhexyl Methoxycinnamate: Chống tia UVB.</li>
        <li>Diethylamino Hydroxybenzoyl Hexyl Benzoate: Chống tia UVA.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Dimethicone: Làm mềm và bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da, lấy một lượng kem chống nắng vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ, tránh vùng mắt.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Thoa lại sau mỗi 2-3 giờ nếu tiếp xúc nhiều với ánh nắng.</li>
        <li>Sử dụng mỗi sáng để bảo vệ da hiệu quả.</li>
      </ol>
    `,
    rating: 5,
    reviews: 125,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "1 tuần trước",
        content: "Kem chống nắng nhẹ, thấm nhanh, rất thích hợp cho da dầu!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "2 tuần trước",
        content: "Bảo vệ da tốt, nhưng cần thoa lại thường xuyên."
      }
    ]
  },
  {
    id: 17,
    name: "Kem dưỡng ẩm và làm sáng da The Face Shop Chia Seed Hydrating Emulsion",
    price: 750000,
    image: "https://th.bing.com/th/id/R.504ab2dbff9695ac0f6744a5e923d96b?rik=rfQjvs0ITPMoaw&riu=http%3a%2f%2fimg.websosanh.vn%2fv2%2fusers%2froot_product%2fimages%2fkem-duong-chong-lao-hoa-da-the%2fil2z9wcwpcfmh.jpg&ehk=XllG8%2fGsdILSELRywOgUxGrL21NjjueZYGp9s9JyN9s%3d&risl=&pid=ImgRaw&r=0",
    images: [
      "https://th.bing.com/th/id/OIP.tY4NZZpDHas-HTfXYin0gAHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://adminbeauty.hvnet.vn/Upload/files/kem-duong-The-Face-Shop-Rice-Ceramide-Moisturizing-Cream-hih-anh2.jpg"
    ],
    category: "duong-am",
    isNew: true,
    shortDesc: "Kem dưỡng ẩm với chiết xuất hạt chia giúp cấp ẩm sâu và làm sáng da.",
    features: [
      "Chiết xuất hạt chia giàu chất chống oxy hóa",
      "Cấp ẩm sâu và làm sáng da tự nhiên",
      "Phù hợp với da khô và da xỉn màu"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem dưỡng ẩm The Face Shop Chia Seed Hydrating Emulsion</strong> là sản phẩm dưỡng da với chiết xuất từ hạt chia, giúp cấp ẩm sâu, làm sáng và cải thiện độ đàn hồi cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da khô, da xỉn màu và da nhạy cảm.</li>
        <li>Kết cấu nhũ tương nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa paraben, an toàn cho da.</li>
        <li>Giúp da căng mọng, mịn màng và rạng rỡ.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem dưỡng này để duy trì làn da ẩm mịn và sáng khỏe!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Salvia Hispanica Seed Extract (Hạt chia): Chống oxy hóa, cấp ẩm.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>Dimethicone: Làm mềm và bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi dùng toner và serum, lấy một lượng kem vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối để duy trì độ ẩm.</li>
        <li>Kết hợp với kem chống nắng vào ban ngày.</li>
      </ol>
    `,
    rating: 4.8,
    reviews: 89,
    customerReviews: [
      {
        name: "Nguyễn Thị Lan",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem dưỡng ẩm tốt, da sáng và mịn hơn rõ rệt!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "1 tháng trước",
        content: "Da ẩm mịn, nhưng hơi lâu thấm với da dầu."
      }
    ]
  },
  {
    id: 18,
    name: "Toner dưỡng ẩm giúp làm dịu da Some By Mi AHA-BHA-PHA 30 Days Miracle Toner",
    price: 350000,
    image: "https://th.bing.com/th/id/OIP.CVqfygdP_CNyRF8DUypUuwHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://th.bing.com/th/id/OIP.JY1620jTrRRkXIPzWAufaAHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://4.bp.blogspot.com/-1sL5tD06pyA/W7bWTTw0bjI/AAAAAAAABIg/l9j3tBzsoB4MlCyQOwI9JAXxY5RrVHkAgCLcBGAs/s1600/some%2Bby%2Bmi%2Bmiracle%2Btoner%2B01.jpg"
    ],
    category: "toner",
    isNew: false,
    shortDesc: "Toner với AHA, BHA, PHA giúp làm sạch sâu, giảm mụn và làm dịu da.",
    features: [
      "Chứa AHA, BHA, PHA giúp tẩy tế bào chết và làm sạch lỗ chân lông",
      "Làm dịu da và giảm mụn hiệu quả",
      "Cấp ẩm và chuẩn bị da cho các bước dưỡng tiếp theo"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Toner Some By Mi AHA-BHA-PHA 30 Days Miracle Toner</strong> là sản phẩm dưỡng da với công thức AHA, BHA, PHA, giúp làm sạch sâu, giảm mụn và làm dịu da, đặc biệt phù hợp với da mụn.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da dầu, da mụn và da nhạy cảm.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây kích ứng.</li>
        <li>Không chứa cồn mạnh, an toàn cho da.</li>
        <li>Giúp da sạch sẽ, mịn màng và khỏe mạnh hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng toner này để cải thiện làn da mụn và xỉn màu!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Salicylic Acid (BHA): Làm sạch lỗ chân lông, giảm mụn.</li>
        <li>Lactic Acid (AHA): Tẩy tế bào chết, làm sáng da.</li>
        <li>Glycolic Acid (PHA): Làm dịu và tẩy tế bào chết nhẹ nhàng.</li>
        <li>Centella Asiatica Extract: Làm dịu và phục hồi da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt, lấy một lượng vừa đủ toner ra bông tẩy trang.</li>
        <li>Nhẹ nhàng lau đều lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Vỗ nhẹ để toner thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như serum hoặc kem dưỡng.</li>
        <li>Sử dụng mỗi tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4,
    reviews: 176,
    customerReviews: [
      {
        name: "Nguyễn Thị Hồng",
        rating: 4,
        time: "2 tuần trước",
        content: "Toner giúp giảm mụn tốt, da sạch hơn rõ rệt."
      },
      {
        name: "Trần Văn Long",
        rating: 3,
        time: "1 tháng trước",
        content: "Hiệu quả tạm ổn, nhưng cần dùng lâu hơn để thấy rõ."
      }
    ]
  },
  {
    id: 19,
    name: "Kem đêm Retinol Innisfree Jeju Orchid Night Cream",
    price: 550000,
    image: "https://th.bing.com/th/id/OIP.GTWhQIpSKWyZDPfGHLRFWAHaF3?r=0&pid=ImgDet&w=198&h=157&c=7&dpr=1.3",
    images: [
      "https://th.bing.com/th/id/OIP.vml5RmFAbVPqVSMor6-QGwAAAA?r=0&rs=1&pid=ImgDetMain",
      "https://cdn.bestme.vn/images/bestme/kem-duong-trang-da-innisfree-ban-dem.jpg"
    ],
    category: "duong-am",
    isNew: false,
    shortDesc: "Kem đêm với Retinol và chiết xuất hoa lan Jeju giúp chống lão hóa và cấp ẩm sâu.",
    features: [
      "Chứa Retinol giúp giảm nếp nhăn và chống lão hóa",
      "Chiết xuất hoa lan Jeju làm sáng và dưỡng ẩm da",
      "Phù hợp với da có dấu hiệu lão hóa"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem đêm Retinol Innisfree Jeju Orchid Night Cream</strong> là sản phẩm dưỡng da ban đêm với Retinol và chiết xuất hoa lan Jeju, giúp chống lão hóa, giảm nếp nhăn và cấp ẩm sâu.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da có dấu hiệu lão hóa và da khô.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây nặng da.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da căng mịn, trẻ trung và rạng rỡ sau khi thức dậy.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem đêm này để phục hồi và trẻ hóa làn da trong khi ngủ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Orchid Extract: Chống oxy hóa, làm sáng da.</li>
        <li>Retinol: Chống lão hóa, làm mờ nếp nhăn.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Adenosine: Hỗ trợ chống lão hóa.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da ban đêm, lấy một lượng kem vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi tối để đạt hiệu quả chống lão hóa.</li>
        <li>Tránh sử dụng cùng lúc với các sản phẩm chứa AHA/BHA.</li>
      </ol>
    `,
    rating: 4,
    reviews: 76,
    customerReviews: [
      {
        name: "Nguyễn Thị Hồng",
        rating: 4,
        time: "2 tuần trước",
        content: "Kem dưỡng giúp da mịn và căng hơn, rất thích!"
      },
      {
        name: "Trần Văn Long",
        rating: 3,
        time: "1 tháng trước",
        content: "Hiệu quả tạm ổn, nhưng cần dùng lâu hơn để thấy rõ."
      }
    ]
  },
  {
    id: 20,
    name: "Mặt nạ BNBG Vita Genic Jelly Mask",
    price: 12000,
    image: "https://cf.shopee.vn/file/vn-11134201-23030-1ikfftd2ypovcd",
    images: [
      "https://file.hstatic.net/1000006063/file/18_d5f240c1c07d49bea39ef38c22550bcc_master.jpg",
      "https://th.bing.com/th/id/OIP.dVH4tpIS56DthvrMa0jhOAHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "mat-na",
    isNew: true,
    shortDesc: "Mặt nạ dạng jelly với vitamin giúp cấp ẩm và làm sáng da.",
    features: [
      "Chứa vitamin giúp làm sáng và dưỡng ẩm da",
      "Kết cấu jelly mềm mại, ôm sát da",
      "Phù hợp với mọi loại da, đặc biệt là da xỉn màu"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Mặt nạ BNBG Vita Genic Jelly Mask</strong> là sản phẩm mặt nạ dưỡng da với công thức chứa vitamin, giúp cấp ẩm, làm sáng và mang lại làn da căng mọng, mịn màng.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da xỉn màu và da khô.</li>
        <li>Kết cấu jelly mềm mại, thẩm thấu dưỡng chất nhanh.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da căng bóng, mịn màng sau khi sử dụng.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ này 2-3 lần/tuần để có làn da rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Vitamin C: Làm sáng da, chống oxy hóa.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Niacinamide: Làm sáng và cải thiện kết cấu da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, đắp mặt nạ lên mặt.</li>
        <li>Điều chỉnh mặt nạ để ôm sát da, tránh vùng mắt và môi.</li>
        <li>Để mặt nạ trên da từ 15-20 phút, sau đó gỡ bỏ.</li>
        <li>Vỗ nhẹ để dưỡng chất còn lại thẩm thấu vào da.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 56,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "1 tuần trước",
        content: "Mặt nạ dễ dùng, da sáng và mịn hơn sau khi đắp!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "2 tuần trước",
        content: "Hiệu quả tốt, nhưng giá hơi cao so với một miếng."
      }
    ]
  },
  {
    id: 21,
    name: "Mặt nạ Medianswer Aqua Mask",
    price: 40000,
    image: "https://th.bing.com/th/id/OIP.mmqNzG5kUcQWKrk1OLz7tgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkcmgsoteylkdb",
      "https://th.bing.com/th/id/OIP.n4_1-KF6hhQqmPrC7UeS4AHaHa?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "mat-na",
    isNew: false,
    shortDesc: "Mặt nạ cấp ẩm sâu với công thức Aqua giúp da căng mọng và mịn màng.",
    features: [
      "Cấp ẩm sâu với công thức Aqua độc quyền",
      "Làm dịu và tăng cường độ đàn hồi da",
      "Phù hợp với mọi loại da, đặc biệt là da khô"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Mặt nạ Medianswer Aqua Mask</strong> là sản phẩm mặt nạ dưỡng da với công thức Aqua, giúp cấp ẩm sâu, làm dịu và mang lại làn da căng mọng, mịn màng.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.</li>
        <li>Miếng mặt nạ ôm sát da, thẩm thấu dưỡng chất nhanh.</li>
        <li>Không chứa paraben, an toàn cho da.</li>
        <li>Giúp da mềm mại, căng bóng sau khi sử dụng.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ này 2-3 lần/tuần để có làn da căng mọng và khỏe mạnh!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Allantoin: Làm dịu và phục hồi da.</li>
        <li>Ceramide NP: Tăng cường hàng rào bảo vệ da.</li>
        <li>Betaine: Hỗ trợ cấp ẩm và làm dịu da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, đắp mặt nạ lên mặt.</li>
        <li>Điều chỉnh mặt nạ để ôm sát da, tránh vùng mắt và môi.</li>
        <li>Để mặt nạ trên da từ 15-20 phút, sau đó gỡ bỏ.</li>
        <li>Vỗ nhẹ để dưỡng chất còn lại thẩm thấu vào da.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 5,
    reviews: 56,
    customerReviews: [
      {
        name: "Nguyễn Thị Lan",
        rating: 5,
        time: "1 tuần trước",
        content: "Mặt nạ cấp ẩm rất tốt, da căng mọng ngay sau khi dùng!"
      },
      {
        name: "Trần Văn Nam",
        rating: 4,
        time: "2 tuần trước",
        content: "Da mềm mịn hơn, nhưng giá hơi cao so với số lượng."
      }
    ]
  },
  {
    id: 22,
    name: "Mặt nạ Be'Balance Collagen Mask",
    price: 52000,
    image: "https://salt.tikicdn.com/cache/280x280/ts/product/7a/50/59/6ebf30aae1202a885e88348ec497020f.jpg",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpq2x56kcnys0f",
      "https://www.koreacosmetics.vn/upload/mat-na-be-balance_12.jpg"
    ],
    category: "mat-na",
    isNew: false,
    shortDesc: "Mặt nạ chứa collagen giúp tăng độ đàn hồi và cấp ẩm cho da.",
    features: [
      "Chứa collagen giúp cải thiện độ đàn hồi da",
      "Cấp ẩm sâu và làm mềm da",
      "Phù hợp với da có dấu hiệu lão hóa"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Mặt nạ Be'Balance Collagen Mask</strong> là sản phẩm mặt nạ dưỡng da với công thức chứa collagen, giúp tăng độ đàn hồi, cấp ẩm và làm mềm da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da có dấu hiệu lão hóa và da khô.</li>
        <li>Miếng mặt nạ ôm sát da, thẩm thấu dưỡng chất nhanh.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da căng mịn, trẻ trung sau khi sử dụng.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ này 2-3 lần/tuần để có làn da căng bóng và khỏe mạnh!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hydrolyzed Collagen: Tăng độ đàn hồi và làm mềm da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Niacinamide: Làm sáng và cải thiện kết cấu da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng toner, đắp mặt nạ lên mặt.</li>
        <li>Điều chỉnh mặt nạ để ôm sát da, tránh vùng mắt và môi.</li>
        <li>Để mặt nạ trên da từ 15-20 phút, sau đó gỡ bỏ.</li>
        <li>Vỗ nhẹ để dưỡng chất còn lại thẩm thấu vào da.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.6,
    reviews: 510,
    customerReviews: [
      {
        name: "Lê Thị Hồng",
        rating: 5,
        time: "1 tuần trước",
        content: "Mặt nạ giúp da căng mịn, rất đáng tiền!"
      },
      {
        name: "Nguyễn Văn Long",
        rating: 4,
        time: "2 tuần trước",
        content: "Da mềm hơn, nhưng cần dùng đều đặn để thấy hiệu quả."
      }
    ]
  },
  {
    id: 23,
    name: "Kem mắt AHC The Pure Real Eye Cream For Face",
    price: 450000,
    image: "https://th.bing.com/th/id/OIP.7jmY9PGidijWNkNZZHU6owHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://file.hstatic.net/200000223113/file/dszx_322daceb19b54544bfbf889e5e6a72c1.jpg",
      "https://skinaqua.vn/wp-content/uploads/2023/05/Kem-duong-mat-AHC-Age-Defense-Real-Eye-Cream-For-Face.-1.jpg"
    ],
    category: "mat",
    isNew: true,
    shortDesc: "Kem mắt đa năng giúp giảm quầng thâm, nếp nhăn và cấp ẩm cho vùng da mắt và mặt.",
    features: [
      "Giảm quầng thâm và nếp nhăn quanh mắt",
      "Cấp ẩm sâu và tăng độ đàn hồi da",
      "Có thể sử dụng cho cả mặt và vùng mắt"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem mắt AHC The Pure Real Eye Cream For Face</strong> là sản phẩm chăm sóc da đa năng, giúp giảm quầng thâm, nếp nhăn và cấp ẩm sâu cho vùng da mắt và toàn khuôn mặt.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da có dấu hiệu lão hóa.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây nặng da.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp vùng da mắt và mặt căng mịn, trẻ trung hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem này để có làn da mắt và mặt rạng rỡ, trẻ trung!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hyaluronic Acid: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Niacinamide: Làm sáng và cải thiện kết cấu da.</li>
        <li>Adenosine: Chống lão hóa, làm mờ nếp nhăn.</li>
        <li>Peptide: Tăng độ đàn hồi da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng serum, lấy một lượng nhỏ kem mắt.</li>
        <li>Chấm kem lên vùng da quanh mắt hoặc toàn khuôn mặt.</li>
        <li>Vỗ nhẹ để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
        <li>Kết hợp với kem chống nắng vào ban ngày.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 57,
    customerReviews: [
      {
        name: "Nguyễn Thị Mai",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem mắt rất tốt, vùng mắt sáng hơn rõ rệt!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "1 tháng trước",
        content: "Hiệu quả tốt, nhưng giá hơi cao so với dung tích."
      }
    ]
  },
  {
    id: 24,
    name: "Kem mắt Laneige Eye Sleeping Mask",
    price: 600000,
    image: "https://th.bing.com/th/id/OIP.pwsYUoqZAP_LRKe1iZXgcwHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://th.bing.com/th/id/OIP.8ZYUyxghU0rNBevP5sK0XAHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.OtADjps1uW7iVDiyFEATSgHaKX?r=0&pid=ImgDet&w=198&h=277&c=7&dpr=1.3"
    ],
    category: "mat",
    isNew: false,
    shortDesc: "Mặt nạ ngủ cho mắt giúp giảm quầng thâm và cấp ẩm sâu cho vùng da mắt.",
    features: [
      "Cấp ẩm sâu và làm dịu vùng da mắt",
      "Giảm quầng thâm và bọng mắt",
      "Phù hợp với mọi loại da, đặc biệt là da khô"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem mắt Laneige Eye Sleeping Mask</strong> là sản phẩm dưỡng da ban đêm dành riêng cho vùng da mắt, giúp cấp ẩm sâu, giảm quầng thâm và bọng mắt, mang lại vẻ tươi trẻ.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.</li>
        <li>Kết cấu gel nhẹ, thẩm thấu nhanh, không gây nặng mắt.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp vùng da mắt căng mịn, tươi sáng sau khi thức dậy.</li>
      </ul>
      <p class="mt-2">
        Sử dụng mặt nạ ngủ này để có đôi mắt rạng rỡ và trẻ trung!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Caffeine: Giảm bọng mắt và quầng thâm.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>Ceramide NP: Tăng cường hàng rào bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da ban đêm, lấy một lượng nhỏ mặt nạ mắt.</li>
        <li>Chấm lên vùng da quanh mắt, tránh tiếp xúc trực tiếp với mắt.</li>
        <li>Vỗ nhẹ để sản phẩm thẩm thấu, để qua đêm.</li>
        <li>Sáng hôm sau, rửa mặt như bình thường.</li>
        <li>Sử dụng 2-3 lần/tuần để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.8,
    reviews: 89,
    customerReviews: [
      {
        name: "Lê Thị Ngọc",
        rating: 5,
        time: "1 tuần trước",
        content: "Mặt nạ mắt giúp vùng mắt sáng hơn, rất thích!"
      },
      {
        name: "Nguyễn Văn Minh",
        rating: 4,
        time: "2 tuần trước",
        content: "Hiệu quả tốt, nhưng cần dùng đều đặn."
      }
    ]
  },
  {
    id: 25,
    name: "Kem mắt Elixir Superieur Wrinkle Lifting",
    price: 800000,
    image: "https://xachtaynhat.net/wp-content/uploads/2021/08/Elixir-Shiseido-vang.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.477Ht0hxlKBdeAZDW5pB_gAAAA?r=0&w=428&h=577&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.Fu0MzajsGmDp026LKpXItgHaF4?r=0&w=1170&h=930&rs=1&pid=ImgDetMain"
    ],
    category: "mat",
    isNew: false,
    shortDesc: "Kem mắt chống lão hóa giúp giảm nếp nhăn và tăng độ đàn hồi vùng da mắt.",
    features: [
      "Chứa Retinol giúp giảm nếp nhăn và chống lão hóa",
      "Cấp ẩm và tăng độ đàn hồi vùng da mắt",
      "Phù hợp với da có dấu hiệu lão hóa"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Kem mắt Elixir Superieur Wrinkle Lifting</strong> là sản phẩm chăm sóc vùng da mắt với công thức chứa Retinol, giúp giảm nếp nhăn, tăng độ đàn hồi và mang lại vẻ trẻ trung cho đôi mắt.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da có dấu hiệu lão hóa và da khô.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây nặng mắt.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp vùng da mắt căng mịn, tươi sáng hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem mắt này để có đôi mắt trẻ trung và rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Retinol: Chống lão hóa, làm mờ nếp nhăn.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Adenosine: Hỗ trợ chống lão hóa.</li>
        <li>Tocopherol: Chống oxy hóa, bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi làm sạch da và dùng serum, lấy một lượng nhỏ kem mắt.</li>
        <li>Chấm kem lên vùng da quanh mắt, tránh tiếp xúc trực tiếp với mắt.</li>
        <li>Vỗ nhẹ để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
        <li>Kết hợp với kem chống nắng vào ban ngày.</li>
      </ol>
    `,
    rating: 4.7,
    reviews: 76,
    customerReviews: [
      {
        name: "Nguyễn Thị Hồng",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem mắt giúp giảm nếp nhăn rõ rệt, rất đáng thử!"
      },
      {
        name: "Trần Văn Long",
        rating: 4,
        time: "1 tháng trước",
        content: "Hiệu quả tốt, nhưng giá hơi cao."
      }
    ]
  },
  {
    id: 26,
    name: "Toner dưỡng ẩm Hada Labo Gokujyun Premium Hyaluronic Lotion",
    price: 350000,
    image: "https://th.bing.com/th/id/OIP.brC9RgcxmM69Luy8NZab9wHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://th.bing.com/th/id/OIP.SwuNmautpJZGBOVj2hc51AHaJY?r=0&rs=1&pid=ImgDetMain",
      "https://bloganchoi.com/wp-content/uploads/2021/01/review-hada-labo-advanced-nourish-lotion.jpg"
    ],
    category: "toner",
    isNew: false,
    shortDesc: "Toner dưỡng ẩm với 5 loại Hyaluronic Acid giúp cấp ẩm sâu và làm mềm da.",
    features: [
      "Chứa 5 loại Hyaluronic Acid cung cấp độ ẩm tối ưu",
      "Làm mềm và tăng cường độ đàn hồi da",
      "Phù hợp với da khô và da nhạy cảm"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Toner Hada Labo Gokujyun Premium Hyaluronic Lotion</strong> là sản phẩm dưỡng da với công thức chứa 5 loại Hyaluronic Acid, giúp cấp ẩm sâu, làm mềm và tăng cường độ đàn hồi cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da khô, da nhạy cảm và da thiếu nước.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn, an toàn cho da nhạy cảm.</li>
        <li>Giúp da căng mọng, mịn màng và khỏe mạnh hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng toner này để chuẩn bị da cho chu trình dưỡng da tối ưu!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hyaluronic Acid: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Sodium Hyaluronate: Dưỡng ẩm và làm căng da.</li>
        <li>Hydrolyzed Hyaluronic Acid: Thẩm thấu sâu vào da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Butylene Glycol: Hỗ trợ cấp ẩm.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt, lấy một lượng vừa đủ toner ra lòng bàn tay hoặc bông tẩy trang.</li>
        <li>Thoa hoặc vỗ nhẹ lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Chờ vài giây để toner thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như serum hoặc kem dưỡng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 96,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "2 tuần trước",
        content: "Toner dưỡng ẩm rất tốt, da mềm mịn ngay sau khi dùng!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "1 tháng trước",
        content: "Da ẩm hơn, nhưng hơi lâu thấm với da dầu."
      }
    ]
  },
  {
    id: 27,
    name: "Toner dưỡng trắng da Mamonde Rose Water",
    price: 300000,
    image: "https://th.bing.com/th/id/OIP.UepOiE6Of6XAo7ZDkBjRiAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    images: [
      "https://th.bing.com/th/id/OIP.11yvfG0fWER5u-nqZyjD7wHaHa?r=0&rs=1&pid=ImgDetMain",
      "https://fivebeauty.net/wp-content/uploads/2024/07/1.11.jpg"
    ],
    category: "toner",
    isNew: true,
    shortDesc: "Toner với chiết xuất hoa hồng giúp dưỡng trắng và cấp ẩm cho da.",
    features: [
      "Chiết xuất hoa hồng giúp làm sáng và dưỡng ẩm da",
      "Làm dịu và cân bằng độ pH cho da",
      "Phù hợp với mọi loại da, đặc biệt là da xỉn màu"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Toner Mamonde Rose Water</strong> là sản phẩm dưỡng da với chiết xuất từ hoa hồng, giúp dưỡng trắng, cấp ẩm và làm dịu da, mang lại làn da sáng mịn, rạng rỡ.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da xỉn màu và da khô.</li>
        <li>Kết cấu lỏng nhẹ, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa cồn mạnh, an toàn cho da nhạy cảm.</li>
        <li>Giúp da sáng mịn, căng bóng và khỏe mạnh hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng toner này để có làn da rạng rỡ và chuẩn bị cho các bước dưỡng da!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Rosa Damascena Flower Water: Chiết xuất hoa hồng, làm sáng và dưỡng ẩm da.</li>
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Butylene Glycol: Hỗ trợ cấp ẩm.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi rửa mặt, lấy một lượng vừa đủ toner ra bông tẩy trang hoặc lòng bàn tay.</li>
        <li>Thoa hoặc vỗ nhẹ lên toàn bộ khuôn mặt, tránh vùng mắt.</li>
        <li>Chờ vài giây để toner thẩm thấu hoàn toàn.</li>
        <li>Tiếp tục các bước dưỡng da như serum hoặc kem dưỡng.</li>
        <li>Sử dụng mỗi sáng và tối để đạt hiệu quả tốt nhất.</li>
      </ol>
    `,
    rating: 5,
    reviews: 156,
    customerReviews: [
      {
        name: "Nguyễn Thị Ngọc",
        rating: 5,
        time: "1 tuần trước",
        content: "Toner mùi hoa hồng dễ chịu, da sáng hơn rõ rệt!"
      },
      {
        name: "Trần Văn Minh",
        rating: 4,
        time: "2 tuần trước",
        content: "Da mềm mịn, nhưng hiệu quả làm sáng cần thời gian."
      }
    ]
  },
  {
    id: 28,
    name: "Kem chống nắng Skin Aqua Super Moisture Milk SPF50+ PA++++",
    price: 180000,
    image: "https://th.bing.com/th/id/OIP.kKL3-AZ9iUsX9XzW0n9K_QHaHa?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://mint07.com/wp-content/uploads/2019/03/kem-chong-nang-skin-aqua-skin-aquatone-up-uv-essence-1.jpeg",
      "https://media.hasaki.vn/hsk/kem-chong-nang-skin-aqua-cho-da-dau-2.jpg"
    ],
    category: "chong-nang",
    isNew: false,
    shortDesc: "Kem chống nắng dạng sữa với công nghệ Aqua giúp bảo vệ da và cấp ẩm.",
    features: [
      "Bảo vệ da khỏi tia UVA/UVB với SPF50+ PA++++",
      "Công nghệ Aqua cấp ẩm sâu, không gây khô da",
      "Kết cấu sữa nhẹ, thẩm thấu nhanh"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem chống nắng Skin Aqua Super Moisture Milk</strong> là sản phẩm chống nắng với công nghệ Aqua, giúp bảo vệ da khỏi tia UV hiệu quả và duy trì độ ẩm cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.</li>
        <li>Kết cấu sữa nhẹ, thẩm thấu nhanh, không để lại vệt trắng.</li>
        <li>Không chứa cồn mạnh, an toàn cho da nhạy cảm.</li>
        <li>Giúp da luôn được bảo vệ và mịn màng suốt cả ngày.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem chống nắng này mỗi ngày để bảo vệ làn da khỏi tác hại của tia UV!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Ethylhexyl Methoxycinnamate: Chống tia UVB.</li>
        <li>Zinc Oxide: Chống tia UVA/UVB.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Dimethicone: Làm mềm và bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da, lấy một lượng kem chống nắng vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ, tránh vùng mắt.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Thoa lại sau mỗi 2-3 giờ nếu tiếp xúc nhiều với ánh nắng.</li>
        <li>Sử dụng mỗi sáng để bảo vệ da hiệu quả.</li>
      </ol>
    `,
    rating: 5,
    reviews: 300,
    customerReviews: [
      {
        name: "Lê Thị Hồng",
        rating: 5,
        time: "1 tuần trước",
        content: "Kem chống nắng nhẹ, thấm nhanh, rất thích hợp cho da khô!"
      },
      {
        name: "Nguyễn Văn Long",
        rating: 4,
        time: "2 tuần trước",
        content: "Bảo vệ da tốt, nhưng cần thoa lại thường xuyên."
      }
    ]
  },
  {
    id: 29,
    name: "Kem chống nắng L'Oreal UV Perfect Matte & Fresh SPF50+ PA++++",
    price: 250000,
    image: "https://th.bing.com/th/id/OIP.cf9PiReYB_mcm0BPxZ07XgHaHX?r=0&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/R.bbc6c6db0db3d7b589cf5d4b0cfaf375?rik=xwG8jjYploc%2bAg&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.Ai81-DCNY1SG-b0x7INMWgHaJN?r=0&rs=1&pid=ImgDetMain"
    ],
    category: "chong-nang",
    isNew: false,
    shortDesc: "Kem chống nắng kiềm dầu với kết cấu matte, bảo vệ da khỏi tia UV.",
    features: [
      "Bảo vệ da khỏi tia UVA/UVB với SPF50+ PA++++",
      "Kiểm soát dầu thừa, mang lại làn da matte",
      "Phù hợp với da dầu và da hỗn hợp"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem chống nắng L'Oreal UV Perfect Matte & Fresh</strong> là sản phẩm chống nắng với kết cấu matte, giúp bảo vệ da khỏi tia UV và kiểm soát dầu thừa, mang lại làn da mịn màng, không bóng dầu.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da dầu và da hỗn hợp.</li>
        <li>Kết cấu nhẹ, thẩm thấu nhanh, không để lại vệt trắng.</li>
        <li>Không chứa cồn mạnh, an toàn cho da.</li>
        <li>Giúp da luôn được bảo vệ và khô thoáng suốt cả ngày.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem chống nắng này mỗi ngày để bảo vệ làn da khỏi tác hại của tia UV!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Ethylhexyl Methoxycinnamate: Chống tia UVB.</li>
        <li>Homosalate: Bảo vệ da khỏi tia UVB.</li>
        <li>Silica: Kiểm soát dầu thừa, mang lại hiệu ứng matte.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Niacinamide: Làm sáng và cải thiện kết cấu da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau các bước dưỡng da, lấy một lượng kem chống nắng vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ, tránh vùng mắt.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Thoa lại sau mỗi 2-3 giờ nếu tiếp xúc nhiều với ánh nắng.</li>
        <li>Sử dụng mỗi sáng để bảo vệ da hiệu quả.</li>
      </ol>
    `,
    rating: 4.5,
    reviews: 156,
    customerReviews: [
      {
        name: "Nguyễn Thị Mai",
        rating: 5,
        time: "2 tuần trước",
        content: "Kem chống nắng kiềm dầu tốt, da không bóng suốt ngày!"
      },
      {
        name: "Trần Văn Hòa",
        rating: 4,
        time: "1 tháng trước",
        content: "Bảo vệ da tốt, nhưng cần thoa lại khi ra ngoài lâu."
      }
    ]
  },
  {
    id: 30,
    name: "Kem dưỡng ẩm Laneige Water Bank Moisture Cream",
    price: 600000,
    image: "https://file.hstatic.net/1000006063/file/s2569812-av-02-zoom_01995f835ff44e65bedbbc202d94bd13.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.XEy6pBuiZsPI-qdnn1r0cgAAAA?r=0&rs=1&pid=ImgDetMain",
      "https://media.hasaki.vn/wysiwyg/Chau/kem-duong-am-laneige-water-bank-blue-ha-cream-50ml-1.jpg"
    ],
    category: "duong-am",
    isNew: false,
    shortDesc: "Kem dưỡng ẩm sâu với công thức Hydro Ionized Mineral Water giúp da căng mọng.",
    features: [
      "Cấp ẩm sâu với công thức Hydro Ionized Mineral Water",
      "Tăng cường hàng rào bảo vệ da",
      "Phù hợp với da khô và da nhạy cảm"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Kem dưỡng ẩm Laneige Water Bank Moisture Cream</strong> là sản phẩm dưỡng da với công thức Hydro Ionized Mineral Water, giúp cấp ẩm sâu, tăng cường hàng rào bảo vệ da và mang lại làn da căng mọng.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với da khô, da nhạy cảm và da thiếu nước.</li>
        <li>Kết cấu kem mịn, thẩm thấu nhanh, không gây bết dính.</li>
        <li>Không chứa paraben, an toàn cho da nhạy cảm.</li>
        <li>Giúp da mềm mại, căng bóng và khỏe mạnh hơn.</li>
      </ul>
      <p class="mt-2">
        Sử dụng kem dưỡng này để duy trì làn da ẩm mịn và rạng rỡ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hydro Ionized Mineral Water: Cấp ẩm sâu, làm dịu da.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Sodium Hyaluronate: Cấp ẩm sâu, giữ nước cho da.</li>
        <li>Betaine: Làm dịu và dưỡng ẩm da.</li>
        <li>Ceramide NP: Tăng cường hàng rào bảo vệ da.</li>
        <li>1,2-Hexanediol: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Sau khi dùng toner và serum, lấy một lượng kem vừa đủ.</li>
        <li>Thoa đều lên toàn bộ khuôn mặt và cổ.</li>
        <li>Massage nhẹ nhàng để kem thẩm thấu hoàn toàn.</li>
        <li>Sử dụng mỗi sáng và tối để duy trì độ ẩm.</li>
        <li>Kết hợp với kem chống nắng vào ban ngày.</li>
      </ol>
    `,
    rating: 4.8,
    reviews: 256,
    customerReviews: [
      {
        name: "Lê Thị Ngọc",
        rating: 5,
        time: "1 tuần trước",
        content: "Kem dưỡng ẩm rất tốt, da căng mịn cả ngày!"
      },
      {
        name: "Nguyễn Văn Minh",
        rating: 4,
        time: "2 tuần trước",
        content: "Da ẩm mịn, nhưng hơi lâu thấm với da dầu."
      }
    ]
  },
  {
    id: 31,
    name: "Nước tẩy trang Bioderma Sensibio H2O",
    price: 220000,
    image: "https://product.hstatic.net/1000173712/product/nuoc-tay-trang-bioderma-h2o-500ml-2_7838f6cd5c8c48178147d26db95986f5_1024x1024.jpg",
    images: [
      "https://vn-test-11.slatic.net/p/dfdd0197ea5a844f85799e4b1795d918.jpg",
      "https://img.watsonsvn.com/ecommerce/ecom/Bioderma/Bioderma-Sensibio-H20-500ml-1.jpg"
    ],
    category: "tay-trang",
    isNew: true,
    shortDesc: "Nước tẩy trang dịu nhẹ, làm sạch sâu lớp trang điểm và bụi bẩn cho da nhạy cảm.",
    features: [
      "Làm sạch sâu lớp trang điểm, kem chống nắng và bụi bẩn",
      "Dịu nhẹ, không gây kích ứng cho da nhạy cảm",
      "Cấp ẩm và làm dịu da trong quá trình tẩy trang"
    ],
    sale: "-15%",
    description: `
      <p>
        <strong>Nước tẩy trang Bioderma Sensibio H2O</strong> là sản phẩm tẩy trang nổi tiếng với công thức micellar, giúp làm sạch sâu lớp trang điểm, kem chống nắng và bụi bẩn mà vẫn dịu nhẹ với da nhạy cảm.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, đặc biệt là da nhạy cảm.</li>
        <li>Kết cấu lỏng nhẹ, không gây nhờn rít.</li>
        <li>Không chứa cồn, hương liệu, an toàn cho da.</li>
        <li>Giúp da sạch sẽ, mềm mại và tươi mới sau khi tẩy trang.</li>
      </ul>
      <p class="mt-2">
        Sử dụng nước tẩy trang này để bắt đầu chu trình dưỡng da với làn da sạch sẽ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>PEG-6 Caprylic/Capric Glycerides: Làm sạch và hòa tan lớp trang điểm.</li>
        <li>Cucumis Sativus (Cucumber) Fruit Extract: Làm dịu và dưỡng ẩm da.</li>
        <li>Mannitol: Hỗ trợ làm dịu da.</li>
        <li>Xylitol: Dưỡng ẩm và bảo vệ da.</li>
        <li>Fructooligosaccharides: Hỗ trợ cân bằng da.</li>
        <li>Disodium EDTA: Ổn định công thức.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Thấm một lượng vừa đủ nước tẩy trang lên bông tẩy trang.</li>
        <li>Nhẹ nhàng lau lên toàn bộ khuôn mặt để làm sạch lớp trang điểm và bụi bẩn.</li>
        <li>Lặp lại nếu cần cho đến khi bông tẩy trang sạch.</li>
        <li>Không cần rửa lại bằng nước, tiếp tục các bước dưỡng da.</li>
        <li>Sử dụng mỗi tối để làm sạch da hiệu quả.</li>
      </ol>
    `,
    rating: 4.9,
    reviews: 256,
    customerReviews: [
      {
        name: "Nguyễn Thị Lan",
        rating: 5,
        time: "1 tuần trước",
        content: "Nước tẩy trang rất dịu nhẹ, làm sạch tốt, không gây khô da!"
      },
      {
        name: "Trần Văn Nam",
        rating: 4,
        time: "2 tuần trước",
        content: "Tẩy trang sạch, nhưng cần dùng nhiều bông cho lớp makeup dày."
      }
    ]
  },
  {
    id: 32,
    name: "Nước tẩy trang Garnier Micellar Cleansing Water",
    price: 150000,
    image: "https://cf.shopee.vn/file/90578743c8c5425329c324056d6ccdfe",
    images: [
      "https://media.hasaki.vn/wysiwyg/HaNguyen/nuoc-tay-trang-garnier-125ml-4.jpg",
      "https://file.hstatic.net/1000006063/file/sg-11134201-23010-hxy0lvidkamv48_3e7414294e8d467cb52a38b38735d683.jpg"
    ],
    category: "tay-trang",
    isNew: false,
    shortDesc: "Nước tẩy trang micellar làm sạch lớp trang điểm và bụi bẩn, phù hợp mọi loại da.",
    features: [
      "Làm sạch sâu lớp trang điểm và bụi bẩn",
      "Dịu nhẹ, không gây kích ứng da",
      "Cấp ẩm và làm mềm da sau khi tẩy trang"
    ],
    sale: "-10%",
    description: `
      <p>
        <strong>Nước tẩy trang Garnier Micellar Cleansing Water</strong> là sản phẩm tẩy trang với công nghệ micellar, giúp làm sạch sâu lớp trang điểm, kem chống nắng và bụi bẩn mà vẫn giữ độ ẩm cho da.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>Phù hợp với mọi loại da, kể cả da nhạy cảm.</li>
        <li>Kết cấu lỏng nhẹ, không gây nhờn rít.</li>
        <li>Không chứa cồn, hương liệu mạnh, an toàn cho da.</li>
        <li>Giúp da sạch sẽ, mềm mại và tươi mới sau khi tẩy trang.</li>
      </ul>
      <p class="mt-2">
        Sử dụng nước tẩy trang này để bắt đầu chu trình dưỡng da với làn da sạch sẽ!
      </p>
    `,
    ingredients: `
      <ul class="list-disc pl-5">
        <li>Water: Thành phần nền giúp cấp ẩm.</li>
        <li>Hexylene Glycol: Hỗ trợ làm sạch và dưỡng ẩm.</li>
        <li>Glycerin: Dưỡng ẩm và làm mềm da.</li>
        <li>Disodium Cocoamphodiacetate: Làm sạch nhẹ nhàng.</li>
        <li>Disodium EDTA: Ổn định công thức.</li>
        <li>Poloxamer 184: Hòa tan lớp trang điểm.</li>
        <li>Polyaminopropyl Biguanide: Chất bảo quản an toàn.</li>
      </ul>
    `,
    usage: `
      <ol class="list-decimal pl-5">
        <li>Thấm một lượng vừa đủ nước tẩy trang lên bông tẩy trang.</li>
        <li>Nhẹ nhàng lau lên toàn bộ khuôn mặt để làm sạch lớp trang điểm và bụi bẩn.</li>
        <li>Lặp lại nếu cần cho đến khi bông tẩy trang sạch.</li>
        <li>Không cần rửa lại bằng nước, tiếp tục các bước dưỡng da.</li>
        <li>Sử dụng mỗi tối để làm sạch da hiệu quả.</li>
      </ol>
    `,
    rating: 4.8,
    reviews: 256,
    customerReviews: [
      {
        name: "Lê Thị Mai",
        rating: 5,
        time: "1 tuần trước",
        content: "Tẩy trang sạch, dịu nhẹ, giá cả hợp lý!"
      },
      {
        name: "Nguyễn Văn Tâm",
        rating: 4,
        time: "2 tuần trước",
        content: "Hiệu quả tốt, nhưng cần dùng nhiều bông cho makeup dày."
      }
    ]
  }
];
