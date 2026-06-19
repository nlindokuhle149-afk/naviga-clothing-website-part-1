window.onload = function() {
    this.alert("Welcome to NAVIGA CLOTHING! We are excited to have you here. Enjoy browsing our latest collections and exclusive offers.");
}
function showMission() {
    this.alert("Our mission is to provide high-quality, stylish clothing that empowers individuals to express themselves confidently. We are committed to sustainability and ethical practices in every step of our production process.");
}

function searchProducts() { 
    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.getElementsByClassName("product-card");
    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getElementsByClassName("product-name")[0].innerText.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        this.alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        this.alert("Please enter a valid email address.");
        return false;
    }

    this.alert("Form submitted successfully!");
    return true;

}

function contacvalidation() {
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if (name === "" || email === "" || message === "") {
        this.alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        this.alert("Please enter a valid email address.");
        return false;
    }

    this.alert("Form submitted successfully!");
    return true;
}