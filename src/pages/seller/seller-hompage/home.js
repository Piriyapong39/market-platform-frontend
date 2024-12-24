const token = localStorage.getItem('token');
const greetingUser = document.querySelector(".main-content > h1:first-child");
document.addEventListener("DOMContentLoaded", async () => {
    try {
        if (!token) {
            window.location.href = '../../login/login.html';      
        }
        const response = await fetch("http://localhost:8080/seller/authen", {
            method: "POST",
            headers: {
                "Conent-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        const result = await response.json()
        if (!response.ok){
            localStorage.removeItem('token');
            window.location.href = '../../login/login.html';
        }else {
            console.log(result)
            greetingUser.innerHTML = `Hello, ${result.user.first_name}`
        }
    } catch (error) {
        console.log(error)
    }
})


// Demo data
const salesData = {
    labels: ['Jan.', 'Feb.', 'March.', 'April.', 'May', 'June', 'July', "August"],
    datasets: [{
        label: 'Total',
        data: [4000, 3000, 5000, 2780, 1890, 2390, 3490, 10000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.querySelector('#salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: salesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
