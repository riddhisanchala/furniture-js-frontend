
const box_one = [
    {
        id: 1,
        img: "./Image/Rectangle 32.svg",
        name: "Accumsan tincidunt",
        original_price: "$42.00",
        discount_price: "$20.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 2,
        img: "./Image/Rectangle 32 (1).svg",
        name: "In nulla",
        original_price: "$52.00",
        discount_price: "$40.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 3,
        img: "./Image/Rectangle 32 (2).svg",
        name: "Vel sem",
        original_price: "$70.00",
        discount_price: "$50.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 4,
        img: "./Image/Rectangle 32 (3).svg",
        name: "Porttitor cum",
        original_price: "$90.00",
        discount_price: "$70.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 5,
        img: "./Image/Rectangle 32 (6).svg",
        name: "Nunc in",
        original_price: "$120.00",
        discount_price: "$100.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 6,
        img: "./Image/Rectangle 32 (4).svg",
        name: "Vitae facilisis",
        original_price: "$150.00",
        discount_price: "$120.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    },
    {
        id: 7,
        img: "./Image/Rectangle 32 (5).svg",
        name: "Curabitur lectus",
        original_price: "$180.00",
        discount_price: "$150.00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
    }
];

let currentPage = 1;
let perPage = 4; // default
// 
function viewDetails_shop(index) {
    const product = box_one[index];
    localStorage.setItem("selectedProduct_shop", JSON.stringify(product));
}

localStorage.removeItem("selectedProduct_shop"); // clear before saving
localStorage.removeItem("selectedProduct_left"); // clear before saving
localStorage.removeItem("selectedProduct_four"); // clear before saving
localStorage.removeItem("selectedProduct_three"); // clear before saving
localStorage.removeItem("selectedProduct_two"); // clear before saving
localStorage.removeItem("selectedProduct_one"); // clear before saving
localStorage.removeItem("selectedProduct"); // clear before saving
localStorage.removeItem("BlogProductDetail"); // clear before saving

// Second ARRAY
// 
// SORTING
function sortProducts(type) {
    currentPage = 1;
    const btn = document.querySelector(".dropdown-toggle");

    if (type === "az") {
        box_one.sort((a, b) => a.name.localeCompare(b.name));
        btn.innerText = "A to Z";
    }

    if (type === "za") {
        box_one.sort((a, b) => b.name.localeCompare(a.name));
        btn.innerText = "Z to A";
    }

    if (type === "low") {
        box_one.sort((a, b) => a.discount_price - b.discount_price);
        btn.innerText = "Low to High";
    }

    if (type === "high") {
        box_one.sort((a, b) => b.discount_price - a.discount_price);
        btn.innerText = "High to Low";
    }

    renderProducts();
}
// PAGINATION
function renderPagination() {
    const totalPages = Math.ceil(box_one.length / perPage);
    const pagination = document.getElementById("pagination");

    let buttons = "";

    // ✅ Previous Button
    buttons += `
        <button onclick="changePage(${currentPage - 1})" 
        ${currentPage === 1 ? "disabled" : ""}>
            Prev
        </button>
    `;

    // ✅ Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        buttons += `
            <button onclick="changePage(${i})" 
            class="${i === currentPage ? 'active' : ''}">
                ${i}
            </button>
        `;
    }

    // ✅ Next Button
    buttons += `
        <button onclick="changePage(${currentPage + 1})" 
        ${currentPage === totalPages ? "disabled" : ""}>
            Next
        </button>
    `;

    pagination.innerHTML = buttons;
}
function changePage(page) {
    const totalPages = Math.ceil(box_one.length / perPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProducts();
}
// RENDER
function renderProducts() {
    const display_data_five = document.getElementById("acceories");
    // pagination logic
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    const paginatedData = box_one.slice(start, end);
    display_data_five.innerHTML = paginatedData?.map((ele, idx) => {
        console.log(ele)
        return (
            `
       <a href="./product-detail.html" onclick="viewDetails_shop(${start + idx})">


            <div class="fashion_list">
                <div class="fashion_img">
                    <img src="${ele.img}" alt="Image is not found">
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
                        <p>${ele.discount_price} <del><span>${ele.original_price}</span></del></p>
                        <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                        <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                        <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                        <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                        <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                    </div>
                    <div class="fashion_discription">
                        <p>${ele.content}</p>
                    </div>
                    <div class="product_icon">
                        <img src="./Image/fluent_cart-24-regular.svg" alt="IMage is not found">
                        <img src="./Image/uil_heart-alt.svg" alt="Image is not found">
                        <img src="./Image/uil_search-plus.svg" alt="Image is not found">
                    </div>
                </div>
            </div>
        </a>
    `)
    }).join('');
    renderPagination();
}
renderProducts();
document.getElementById("page").addEventListener("input", function () {
    let value = Number(this.value);

    if (value > box_one.length) value = box_one.length;

    perPage = value || 1;
    currentPage = 1;

    renderProducts();
});

