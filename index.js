function changeEye() {
    var icon = document.querySelector(".password-toggle-icon i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
    var element = document.getElementById("pwField");

    if (element.getAttribute("type") === "password") {
        element.setAttribute("type", "text");
    } else {
        element.setAttribute("type", "password");
    }
}