document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع الريفريش

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    // Regex بسيط عشان يتأكد إن الإيميل مكتوب صح
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || subject === "" || message === "") {
        status.textContent = "⚠️ Please fill all fields!";
        status.style.color = "red";
        return;
    }

    if (!email.match(emailPattern)) {
        status.textContent = "⚠️ Please enter a valid email address!";
        status.style.color = "red";
        return;
    }

    // لو كله تمام
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";

    // يمسح الفورم بعد الإرسال
    document.getElementById("contactForm").reset();
});
