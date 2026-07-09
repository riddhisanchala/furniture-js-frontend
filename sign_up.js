function validateForm() {
    const name = document.getElementById("user_name");
    const email = document.getElementById("user_mail");
    const mobile = document.getElementById("user_tel");
    const password = document.getElementById("user_pwd");

    const errName = document.getElementById("error_name");
    const errMail = document.getElementById("error_mail");
    const errTel = document.getElementById("error_tel");
    const errPwd = document.getElementById("error_pwd");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[1-9]\d{9}$/;

    let isValid = true;

    // Name
    if (name.value.trim() === "") {
        name.style.border = "2px solid red";
        errName.innerText = "Please enter your name";
        isValid = false;
    }
    else {
        name.style.border = "2px solid green";
        errName.innerText = "";
    }

    // Email
    if (!emailRegex.test(email.value.trim())) {
        email.style.border = "2px solid red";
        errMail.innerText = "Please enter a valid email address";
        isValid = false;
    }
    else {
        email.style.border = "2px solid green";
        errMail.innerText = "";
    }

    // Mobile
    if (!mobileRegex.test(mobile.value.trim())) {
        mobile.style.border = "2px solid red";
        errTel.innerText = "Enter a 10-digit mobile number";
        isValid = false;
    }
    else {
        mobile.style.border = "2px solid green";
        errTel.innerText = "";
    }

    // Password
    if (password.value.trim().length < 6) {
        password.style.border = "2px solid red";
        errPwd.innerText = "Password must be at least 6 characters";
        isValid = false;
    }
    else {
        password.style.border = "2px solid green";
        errPwd.innerText = "";
    }

    if (isValid) {
        const userData = {
            name: name.value.trim(),
            email: email.value.trim(),
            mobile: mobile.value.trim(),
            password: password.value.trim()
        };

        // Get existing users
        let allUsers = JSON.parse(localStorage.getItem("userData")) || [];

        // Check for duplicate email
        const emailExists = allUsers.some(user => user.email === userData.email);

        if (emailExists) {
            email.style.border = "2px solid red";
            errMail.innerText = "This email is already registered";
            return; // Stop sign-up
        }

        // Add user
        allUsers.push(userData);
        localStorage.setItem("userData", JSON.stringify(allUsers));

        // Clear fields
        name.value = "";
        email.value = "";
        mobile.value = "";
        password.value = "";

        name.style.border = "1px solid #ccc";
        email.style.border = "1px solid #ccc";
        mobile.style.border = "1px solid #ccc";
        password.style.border = "1px solid #ccc";

        window.location.href = "My_account.html";
    }
}
