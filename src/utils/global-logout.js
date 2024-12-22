document.querySelector(".global-logout-btn").addEventListener("click", ()=> {
    localStorage.removeItem("token")
    window.location.reload()
})

