
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


function mailValid() {
    // Get values
    let name = document.getElementById("user_name").value.trim();
    let email = document.getElementById("user_mail").value.trim();
    let subject = document.getElementById("user_sub").value.trim();
    let message = document.getElementById("user_msg").value.trim();

    // Error elements
    let errorName = document.getElementById("error_name");
    let errorMail = document.getElementById("error_mail");
    let errorSubject = document.getElementById("error_subject");
    let errorMsg = document.getElementById("error_user_msg");

    // Clear old errors
    errorName.innerText = "";
    errorMail.innerText = "";
    errorSubject.innerText = "";
    errorMsg.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        errorName.innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function mailValid() {

    // Get values
    let name = document.getElementById("user_name").value.trim();
    let email = document.getElementById("user_mail").value.trim();
    let subject = document.getElementById("user_sub").value.trim();
    let message = document.getElementById("user_msg").value.trim();

    // Error elements
    let errorName = document.getElementById("error_name");
    let errorMail = document.getElementById("error_mail");
    let errorSubject = document.getElementById("error_subject");
    let errorMsg = document.getElementById("error_user_msg");

    // Clear old errors
    errorName.innerText = "";
    errorMail.innerText = "";
    errorSubject.innerText = "";
    errorMsg.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        errorName.innerText = "Name is required";
        isValid = false;
    }

    // Email validation (better regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        errorMail.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errorMail.innerText = "Enter valid email";
        isValid = false;
    }

    // Subject validation
    if (subject === "") {
        errorSubject.innerText = "Subject is required";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        errorMsg.innerText = "Message is required";
        isValid = false;
    }

    // If valid → store in array
    if (isValid) {

        let contactData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        contacts.push(contactData);

        // Save to localStorage
        localStorage.setItem("contacts", JSON.stringify(contacts));

        // 🔥 Debug properly (FULL EMAIL will show)
        console.log("Latest Entry:", contactData);
        console.log("All Contacts:", JSON.stringify(contacts, null, 2));

        alert("Form submitted successfully ✅");

        // Clear form
        document.getElementById("user_name").value = "";
        document.getElementById("user_mail").value = "";
        document.getElementById("user_sub").value = "";
        document.getElementById("user_msg").value = "";
    }
}
        errorMail.innerText = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        errorMail.innerText = "Enter valid email";
        isValid = false;
    }

    // Subject validation
    if (subject === "") {
        errorSubject.innerText = "Subject is required";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        errorMsg.innerText = "Message is required";
        isValid = false;
    }

    // If valid → store in array
    if (isValid) {
        let contactData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        contacts.push(contactData);
localStorage.setItem("contacts", JSON.stringify(contacts));

        console.log("All Contacts:", contacts);

        alert("Form submitted successfully ✅");

        // Clear form
        document.getElementById("user_name").value = "";
        document.getElementById("user_mail").value = "";
        document.getElementById("user_sub").value = "";
        document.getElementById("user_msg").value = "";
    }
}
