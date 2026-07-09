// 🔐 Run when page loads
document.addEventListener("DOMContentLoaded", function () {
    renderCart();
});

// 🧠 Get unique cart key (per user)
function getCartKey() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) return "hekto_cart_guest";

    const safeEmail = user.email.replace(/[@.]/g, "_");

    return `hekto_cart_${safeEmail}`;
}

// 📦 Get cart
function getCart() {
    return JSON.parse(localStorage.getItem(getCartKey())) || [];
}

// 💾 Save cart
function saveCart(cart) {
    localStorage.setItem(getCartKey(), JSON.stringify(cart));
}

// ➕ Add to cart
function addToCart(product, redirect = true) {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("Please login first");
        window.location.href = "./My_account.html";
        return;
    }
    let cart = getCart();

    const name = product.title || product.name || "Unknown Product";
    const image = product.image || product.img || "";
    const priceStr = product.discount_price || product.price || "0";
    const price = parseFloat(priceStr.toString().replace(/[^0-9.]/g, "")) || 0;

    const existingIndex = cart.findIndex(item =>
        item.name === name &&
        item.image === image &&
        item.price === price
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            name,
            image,
            price,
            quantity: 1
        });
    }

    saveCart(cart);

    if (redirect) {
        window.location.href = "./Shoping_cart.html";
    }
}

// ❌ Remove item
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// 🔄 Update quantity (+ / -)
function updateQuantity(index, change) {
    let cart = getCart();

    cart[index].quantity += change;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    saveCart(cart);
    renderCart();
}

// ✏️ Set quantity manually
function setQuantity(index, value) {
    let cart = getCart();
    const qty = parseInt(value);

    if (qty > 0) {
        cart[index].quantity = qty;
        saveCart(cart);
        renderCart();
    }
}

// 🗑 Clear cart
function clearCart() {
    localStorage.removeItem(getCartKey());
    renderCart();
}

//Render cart
function renderCart() {
    const cartBody = document.getElementById("cart-body");
    const subTotalEl = document.getElementById("sub-total");
    const grandTotalEl = document.getElementById("grand-total");

    if (!cartBody) return;

    const cart = getCart();

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center; padding:40px; color:#8A91AB; font-size:16px;">
                    Your cart is empty. <a href="./grid_default.html" style="color:#FB2E86;">Start shopping</a>
                </td>
            </tr>
        `;
        if (subTotalEl) subTotalEl.textContent = "£0.00";
        if (grandTotalEl) grandTotalEl.textContent = "£0.00";
        return;
    }

    let subtotal = 0;

    cartBody.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        return `
            <tr>
                <td class="item_list">
                    <div class="item-details">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div>
                            <span class="name_of-product">${item.name}</span><br>
                            <span>Price: £${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                </td>
                <td class="item_list item_list_price">£${item.price.toFixed(2)}</td>
                <td class="item_list">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${index}, -1)">−</button>
                        <input type="number" class="no-spinner" value="${item.quantity}" min="1"
                            onchange="setQuantity(${index}, this.value)" readonly>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="item_list item_list_total">£${itemTotal.toFixed(2)}</td>
                <td class="item_list">
                    <button class="dynamic_btn" onclick="removeFromCart(${index})" title="Remove">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join("");

    if (subTotalEl) subTotalEl.textContent = `£${subtotal.toFixed(2)}`;
    if (grandTotalEl) grandTotalEl.textContent = `£${subtotal.toFixed(2)}`;
}

function setQuantity(index, value) {
    let cart = getCart();
    const qty = parseInt(value);
    if (qty > 0) {
        cart[index].quantity = qty;
        saveCart(cart);
        renderCart();

    }
}


//run