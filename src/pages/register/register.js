document.querySelector(".global-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const formData = {
            email: e.target.email.value.trim(),
            password: e.target.password.value.trim(),
            first_name: e.target.first_name.value.trim(),
            last_name: e.target.last_name.value.trim(),
        };
        const missingFields = Object.keys(formData).filter(key => !formData[key]);
        if (missingFields.length > 0) {
            throw new Error(`Missing fields: ${missingFields.join(", ")}`);
        }
        const response = await fetch("http://localhost:8080/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || "Failed to register");
        }
        window.location.href = "../login/login.html"    
    } catch (error) {
        alert(error.message);
    }
});
