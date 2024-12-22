
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
        console.log(result)
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
            console.log(result)
        }else {
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
})


declineBtn.addEventListener("click", async () => {
    window.location.href = "../../homepage/homepage.html"
})