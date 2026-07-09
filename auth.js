document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname;

    // 🛑 Store last page to redirect back after login (skipping login/signup pages)
    if (!currentPage.includes("My_account.html") && !currentPage.includes("signup.html")) {
        sessionStorage.setItem("redirectAfterLogin", window.location.href);
    }

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    // ✅ If logged in, set user info
    if (user && user.email) {
        const emailEl = document.getElementById("userEmail");
        const nameEl = document.getElementById("userName");

        if (emailEl) emailEl.textContent = user.email;
        if (nameEl) nameEl.textContent = user.name || "User";
    }
});