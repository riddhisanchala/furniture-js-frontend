function validation() {

    const mail = document.getElementById("mail");
    const pass = document.getElementById("pwd");

    const errMail = document.getElementById("error_mail");
    const errPwd = document.getElementById("error_pass");

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 🔄 Clear previous errors
    errMail.innerText = "";
    errPwd.innerText = "";

    // ✅ Email Validation
    if (!emailRegex.test(mail.value.trim())) {
        mail.style.border = "2px solid red";
        errMail.innerText = "Please enter a valid email address";
        isValid = false;
    } else {
        mail.style.border = "2px solid green";
    }

    // ✅ Password Validation
    if (pass.value.trim().length < 6) {
        pass.style.border = "2px solid red";
        errPwd.innerText = "Password must be at least 6 characters";
        isValid = false;
    } else {
        pass.style.border = "2px solid green";
    }

    // ✅ If validation passed
    if (isValid) {

        const enteredEmail = mail.value.trim();
        const enteredPassword = pass.value.trim();

        // 📦 Get users from localStorage
        const users = JSON.parse(localStorage.getItem("userData")) || [];

        // 🔍 Find matching user
        const foundUser = users.find(user =>
            user.email === enteredEmail &&
            user.password === enteredPassword
        );

        if (foundUser) {

            // ✅ Save logged in user
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

            // 🔁 Redirect logic (VERY IMPORTANT)
            const redirectPage = sessionStorage.getItem("redirectAfterLogin");

            if (redirectPage) {
                sessionStorage.removeItem("redirectAfterLogin");
                window.location.href = redirectPage;
            } else {
                window.location.href = "./home.html";
            }

        } else {
            alert("❌ Invalid email or password");
        }

        // 🔄 Reset fields
        mail.value = "";
        pass.value = "";
        mail.style.border = "1px solid #ccc";
        pass.style.border = "1px solid #ccc";
    }
}