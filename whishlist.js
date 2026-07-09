// ✅ Run when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    renderWishlist();
});

// ✅ Get logged user correctly
function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    // Ensure email exists to prevent 'wishlist_null'
    return (user && user.email) ? user : null;
}

// ✅ Unique key per user (Isolated Data)
function getWishlistKey() {
    const user = getCurrentUser();
    return user ? `wishlist_${user.email.toLowerCase()}` : "wishlist_guest";
}

// ✅ Get data from LocalStorage
function getWishlist() {
    const data = localStorage.getItem(getWishlistKey());
    return data ? JSON.parse(data) : [];
}

// ✅ Save data to LocalStorage
function saveWishlist(wishlist) {
    localStorage.setItem(getWishlistKey(), JSON.stringify(wishlist));
}

// ✅ Render UI - Fixed Mappings
function renderWishlist() {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    const wishlist = getWishlist();

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class='empty-state' style="text-align:center; padding: 50px;">
                <i class="fa-regular fa-heart" style="font-size: 50px; color: #fb2e86;"></i>
                <p style="margin-top:15px; font-family: 'Lato';">Your wishlist is empty.</p>
                <a href="./grid_default.html" class="btn btn-primary" style="background:#fb2e86; border:none;">Shop Now</a>
            </div>`;
        return;
    }

    container.innerHTML = wishlist.map(product => {
        // Handle different property names (id vs name, image vs img)
        const id = product.id || product.name || "item";
        const name = product.name || product.title || product.craft || "No Name";
        const price = product.price || product.discount_price || "£0";
        const image = product.image || product.img || product.chair_img || "https://via.placeholder.com/150";

        return `
        <div class="wishlist_card">
            <div class="sub_card">
                <div class="img_box">
                    <img src="${image}" alt="${name}" />
                </div>
                <div class="card_details">
                    <h3>${name}</h3>
                    <p class="price">${price}</p>
                    <i class="fa-solid fa-trash-can" 
                       onclick="removeFromWishlist('${id}')" 
                       style="cursor:pointer; color:#fb2e86;"></i>
                </div>
            </div>
        </div>
        `;
    }).join("");
}

// ✅ Remove item and refresh
function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => 
        String(item.id || item.name) !== String(productId)
    );
    saveWishlist(wishlist);
    renderWishlist();
}