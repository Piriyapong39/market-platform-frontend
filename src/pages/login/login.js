
document.querySelector(".global-form").addEventListener("submit", async(e) => {
    try {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const missingFields = Object.keys(formData).filter(key => !formData[key])
        if (missingFields.length > 0){
            throw new Error(`Missing fields: ${missingFields.join(", ")}`)
        }
        const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json()
        if (!response.ok){
            throw new Error(result.error)
        }
        localStorage.setItem("token", result.token)
        window.location.href = "../homepage/homepage.html"
    } catch (error) {
        console.log(error.message)
    }
})