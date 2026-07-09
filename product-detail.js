


let related_data = [
    {
        id: 1,
        img: "./Image/Rectangle 128.svg",
        name: "Mens Fashion Wear",
        price: "$43.00"
    },
    {
        id: 2,
        img: "./Image/Rectangle 133.svg",
        name: "Women’s Fashion",
        price: "$67.00"
    },
    {
        id:3,
        img: "./Image/Rectangle 130.svg",
        name: "Wolx Dummy Fashion",
        price: "$67.00"
    },
    {
        id:4,
        img: "./Image/Rectangle 131.svg",
        name: "Top Wall Digital Clock",
        price: "$51.00"
    }
];

// WISHLIST
function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function isInWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist.some(item => item.id === id);
}

function toggleWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const index = wishlist.findIndex(item => item.id === product.id);

    if (index > -1) {
        // remove
        wishlist.splice(index, 1);
    } else {
        // add
        wishlist.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    location.reload(); // refresh UI

}

if (localStorage.getItem("selectedProduct_one")) {
    related_data = [
        { img: "./Image/image 1168.svg", name: "Cantilever chair", price: "$42.00" },
        { img: "./Image/image 1.svg", name: "Cantilever chair", price: "$42.00" },
        { img: "./Image/image 1169.svg", name: "Cantilever chair", price: "$42.00" },
        { img: "./Image/image 3.svg", name: "Cantilever chair", price: "$42.00" }
    ];
} else if (localStorage.getItem("selectedProduct_two")) {
    related_data = [
        { img: "./Image/image 1166.svg", name: "Comfort Handy Craft", price: "$42.00" },
        { img: "./Image/image-15.2.png", name: "Comfort Handy Craft", price: "$42.00" },
        { img: "./Image/image 1168.svg", name: "Comfort Handy Craft", price: "$42.00" },
        { img: "./Image/image 23.svg", name: "Comfort Handy Craft", price: "$42.00" }
    ];
} else if (localStorage.getItem("selectedProduct_three")) {
    related_data = [
        { img: "./Image/image 1171.svg", name: "Cantilever chair", price: "$26.00" },
        { img: "./Image/image 1170.svg", name: "Cantilever chair", price: "$26.00" },
        { img: "./Image/image 31.svg", name: "Cantilever chair", price: "$26.00" },
        { img: "./Image/image-c 32.svg", name: "Cantilever chair", price: "$26.00" }
    ];
} else if (localStorage.getItem("selectedProduct_four")) {
    related_data = [
        { img: "./Image/image 20.svg", name: "Mini LCW Chair", price: "$56.00" },
        { img: "./Image/image 1168.svg", name: "Mini LCW Chair", price: "$56.00" },
        { img: "./Image/image 1171.svg", name: "Mini LCW Chair", price: "$56.00" },
        { img: "./Image/image 20.svg", name: "Mini LCW Chair", price: "$56.00" }
    ];
} else if (localStorage.getItem("selectedProduct_shop")) {
    related_data = [
     { img: "./Image/image 1164.svg", name: "Ultrices mauris sit", price: "$26.00"},
    { img: "./Image/watch_3.svg", name: "Pellentesque condimentum", price: "$26.00"},
    { img: "./Image/cam 2.svg", name: "Cras scelerisque velit", price: "$26.00"},
    { img: "./Image/headphone_2.svg", name: "Lectus vulputate faucibus", price: "$26.00"},
    ];
}



// 
const display_data = document.getElementById("product");

display_data.innerHTML = related_data?.map((index, pass) => {
    return (
        `

                <a href="./product-detail.html">
                    <div class="product_one" onclick="viewDetails_product('${pass}')">
                        <div class="image">
                            <img src="${index.img}" alt="Image is not found">
                        </div>
                        <div class="product-text">
                            <div class="review">
                                <p>${index.name}</p>
                                <div class="ratting">
                                    <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                                    <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                                    <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">
                                    <img src="./Image/ant-design_star-filled.svg" alt="Image is not found">

                                </div>
                            </div>
                            <div class="product-price">
                                <p>${index.price}</p>
                            </div>
                        </div>
                    </div>
                </a>
    `)
}).join('');

// 
function viewDetails_product(item) {
    console.log(item);
    const blog_product_main = related_data.find((index, pass) => item == pass);
    
    // Update the active product key so that category persistence remains
    if (localStorage.getItem("selectedProduct_one")) {
        localStorage.setItem("selectedProduct_one", JSON.stringify(blog_product_main));
    } else if (localStorage.getItem("selectedProduct_two")) {
        localStorage.setItem("selectedProduct_two", JSON.stringify(blog_product_main));
    } else if (localStorage.getItem("selectedProduct_three")) {
        localStorage.setItem("selectedProduct_three", JSON.stringify(blog_product_main));
    } else if (localStorage.getItem("selectedProduct_four")) {
        localStorage.setItem("selectedProduct_four", JSON.stringify(blog_product_main));
    } else {
        localStorage.setItem("selectedProduct_shop", JSON.stringify(blog_product_main));
    }
}

// 

// 
const detail_product = JSON.parse(localStorage.getItem("ProductDetail_Main"));

const product_show_three = JSON.parse(localStorage.getItem("selectedProduct_four"));
const product_show_two = JSON.parse(localStorage.getItem("selectedProduct_three"));
const product_show = JSON.parse(localStorage.getItem("selectedProduct_one"));
const product_show_one = JSON.parse(localStorage.getItem("selectedProduct_two"));
const product_show_shop = JSON.parse(localStorage.getItem("selectedProduct_shop"));

const product = product_show || product_show_one || product_show_two || product_show_three || product_show_shop || detail_product||product_showghg;

// Store product for addToCart function
var product_for_cart = product;

console.log("product", product);

if (!product) {
    document.body.innerHTML = "<h2>No product selected. Please go back and choose a product.</h2>";
} else {

    const display_data = document.getElementById("details_item");

    display_data.innerHTML = `
        <div class="sub">
            <div class="product_img_one">
                <img src="${product.image || product.img || product.chair_img}" alt="">
                <img src="${product.image || product.img || product.chair_img}" alt="">
                <img src="${product.image || product.img || product.chair_img}" alt="">
            </div>

            <div class="product_img_two">
                <img src="${product.image || product.img || product.chair_img}" alt="">
            </div>

            <div class="product_txt">
                <h1>${product.title || product.name || product.chair_name || product.craft}</h1>

                <div class="price">
                    <p>${product.discount_price || product.price || ""} 
                    <del>${product.original_price || ""}</del></p>
                </div>

                <div class="discription">
                    <p>${product.description || "No description available."}</p>
                </div>
                <div class="color">
                            <p>Color</p>
                        </div>
                        <div class="discription">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus,
                                et
                                volutpat sit.
                            </p>
                        </div>
                        <div class="product_cart">
                    <a href="#" onclick="addToCart(product_for_cart); return false;">
                        <p>Add To Cart</p>  
                    </a>
                     <img src="./Image/Vector_heart.svg" alt="Image is not found">
                        </div>
                           
                       
                        <div class="categrioes">
                            <p>Categories:</p>
                            <p>Tags</p>
                            <div class="product_icon">
                                <p>Share</p>
                                <img src="./Image/Group 202.svg" alt="Image is not found">
                                <img src="./Image/Group 203.svg" alt="Image is not found">
                                <img src="./Image/Group 204.svg" alt="Image is not found">
                            </div>
                        </div>

               
            </div>
        </div>
    `;
}

