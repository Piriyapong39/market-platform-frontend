
const token = localStorage.getItem("token")
document.addEventListener("DOMContentLoaded", async () => {
    try {
        if (!token) {
            window.location.href = "../../login/login.html"
        }
        const resonse = await fetch("http://localhost:8080/seller/authen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await resonse.json();
        if (!resonse.ok) {
            if (result.is_seller === false) {
                null
            } else {
                window.location.href = "../../homepage/homepage.html"
            }
        } else {
            window.location.href = "../seller-hompage/home.html"
        }
    } catch (error) {
        console.log(error)
    }
})


const acceptBtn = document.querySelector(".global-btn")
const declineBtn = document.querySelector(".global-decline-btn")

acceptBtn.addEventListener("click", async () => {
    try {
        const resonse = await fetch("http://localhost:8080/seller/confirm-to-seller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await resonse.json();
        if (!resonse.ok) {
            console.log(result.error)
        }else {
            localStorage.setItem("token", result.token)
            window.location.reload()
        }
    } catch (error) {
        console.log(error)
    }
})


declineBtn.addEventListener("click", async () => {
    window.location.href = "../../homepage/homepage.html"
})