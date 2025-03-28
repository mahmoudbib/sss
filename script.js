
document.querySelectorAll(".buyButton").forEach(button => {
    button.addEventListener("click", function() {
        let productName = this.getAttribute("data-product")
        document.getElementById("selectedProduct").innerHTML = 
        document.getElementById("orderFormContainer").style.display = "block";
    });
});

// عند إرسال الطلب
document.getElementById("submitOrder").addEventListener("click", function() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let address = document.getElementById("customerAddress").value;
    let product = document.getElementById("selectedProduct").innerText;

    if (name && email && address) {
        console.log("طلب جديد:", { name, email, address, product });

        document.getElementById("orderMessage").innerText = "تم إرسال الطلب بنجاح!";
        document.getElementById("orderFormContainer").style.display = "none";
    } else {
        alert("يرجى إدخال جميع البيانات!");
    }
});