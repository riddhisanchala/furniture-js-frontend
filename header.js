document.addEventListener("DOMContentLoaded", function () {

    const userData = JSON.parse(localStorage.getItem("loggedInUser"));

    // ❌ If no user → stop
    if (!userData) return;

    // ✅ Email
    const emailEl = document.getElementById("userEmail");
    if (emailEl) {
        emailEl.textContent = userData.email || "No Email";
    }

    // ✅ Name
    const nameEl = document.getElementById("userName");
    if (nameEl) {
        nameEl.textContent = userData.name || "No Name";
    }

    // ✅ Phone
    const phoneEl = document.getElementById("userPhone");
    if (phoneEl) {
        phoneEl.textContent =
            userData.phone || userData.mobile || "No Phone";
    }

});
function logout() {

    // ❌ Remove logged user
    localStorage.removeItem("loggedInUser");

    // 🔁 Optional: clear redirect
    sessionStorage.removeItem("redirectAfterLogin");

    // 🚀 Go to login page
    window.location.href = "./My_account.html";
}