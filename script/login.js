function toggleShowPassword(passwordField, eyeIcon) {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

const btn = 
document.getElementById("showPassword1").addEventListener("click", function() {
    console.log('hi')
    toggleShowPassword(document.getElementById("inputField1"), this);
});

const home = document.getElementById('home');
home.addEventListener("click",()=>{
window.location.href = 'index.html';
});
