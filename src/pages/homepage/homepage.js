
const token = localStorage.getItem("token")

document.addEventListener("DOMContentLoaded", () => {
    if(!token){
        window.location.href = "../login/login.html"
    }
})