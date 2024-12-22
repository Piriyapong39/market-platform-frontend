
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const token = localStorage.getItem("token")
        if(!token){
            window.location.href = "../login/login.html"
        }
        const response = await fetch("http://localhost:8080/user/authen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const results = await response.json();
        if(!response.ok){
            localStorage.removeItem("token")
            window.location.href = "../login/login.html"
        }
        // console.log(results)
    } catch (error) {
        console.log(error)
    }    
})