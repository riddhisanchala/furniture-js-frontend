document.addEventListener("DOMContentLoaded", function () {

    // 🛑 Skip auth check on login page
    const currentPage = window.location.pathname;

    if (currentPage.includes("My_account.html")) {
        return;
    }

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    // ❌ Not logged in
    if (!user || !user.email) {

        sessionStorage.setItem("redirectAfterLogin", window.location.href);

        window.location.href = "./My_account.html";
        return;
    }

    // ✅ Optional: set user info
    const emailEl = document.getElementById("userEmail");
    const nameEl = document.getElementById("userName");

    if (emailEl) emailEl.textContent = user.email;
    if (nameEl) nameEl.textContent = user.name || "User";
});