
const token = localStorage.getItem("token")

document.addEventListener("DOMContentLoaded", async () => {
    try {
        if (!token) {
            window.location.href = "../../login/login.html"
        }
        const resonse = await fetch("http://localhost:8080/user/authen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await resonse.json();
        if (!resonse.ok) {
            localStorage.removeItem("token")
            window.location.reload()
        }else {
            if (!result.user.is_seller) {
                console.log(result.user.is_seller)
            } else {
                window.location.href = "../seller-hompage/home.html"
            }
        }

    } catch (error) {
        console.log(error)
    }
})