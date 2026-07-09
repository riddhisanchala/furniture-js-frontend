const box = [
    {
        id: 1,
        brand: "Coaster Furniture",
        img: "./Image/Rectangle 33.svg",
        name: "Dictum morbi",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 2,
        brand: "Young Repurposed",
        img: "./Image/Rectangle 33 (1).svg",
        name: "Sodales sit",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 3,
        brand: "Green DIY furniture",
        img: "./Image/Rectangle 33 (2).svg",
        name: "Nibh varius",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        brand: "Dream Furnitture Flipping",
        img: "./Image/Rectangle 33 (3).svg",
        name: "Mauris quis",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 5,
        brand: "Coaster Furniture",
        img: "./Image/Rectangle 33 (4).svg",
        name: "Morbi sagittis",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 6,
        brand: "Unique Furnitture Restor",
        img: "./Image/Rectangle 33 (5).svg",
        name: "Ultricies venenatis",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 7,
        brand: "Fusion Dot High Fashion",
        img: "./Image/Rectangle 33 (6).svg",
        name: "Scelerisque dignissim",
        original_price: "$42.00",
        discount_price: "$26.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    }
];
// Save clicked product to localStorage
function viewDetails_left(index) {
    const product = box[index];
    localStorage.setItem("selectedProduct_left", JSON.stringify(product));
}

// Render given product array into #ecom
function renderProducts(products) {
    const container = document.getElementById("ecom");
    container.innerHTML = products.map((ele, idx) => `
        <div class="fashion_list">
          <div class="fashion_img">
            <img src="${ele.img}" alt="${ele.name}">
          </div>
          <div class="fashion_txt">
            <div class="fashion_name">
              <p>${ele.name}</p>
              <div class="colors">
                <div class="color_one"></div>
                <div class="color_two"></div>
                <div class="color_three"></div>
              </div>
            </div>
            <div class="price">
              <p>${ele.discount_price} <del>${ele.original_price}</del></p>
            </div>
            <div class="fashion_discription">
              <p>${ele.content}</p>
            </div>
            <div class="product_icon">
              <img src="./Image/fluent_cart-24-regular.svg" alt="">
              <img src="./Image/uil_heart-alt.svg" alt="">
              <img src="./Image/uil_search-plus.svg" alt="">
            </div>
          </div>
        </div>
      </a>
    `).join('');
}

// Render all products initially
renderProducts(box);

// Filter products when checkboxes change
document.getElementById("brand-filters").addEventListener("change", () => {
    const selectedBrands = Array.from(document.querySelectorAll('#brand-filters input[type="checkbox"]:checked'))
        .map(input => input.value);

    const filtered = selectedBrands.length === 0
        ? box
        : box.filter(product => selectedBrands.includes(product.brand));

    renderProducts(filtered);
});