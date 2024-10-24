let cartQuanity = 0;

const cartDisplay = document.querySelector(".cart");

function updateCartDisplay(){
    cartDisplay.textContent = `Cart Quantity: ${cart_quantity}`;
}

function changeCartQuantity(amount){
    cartQuantity +=amount;
    updateCartDisplay()
}

document.getElementById("Add to Cart").addEventListener("click", function() {
    changeCartQuantity(1); // Call function to add 1
});

// Event listener for the "+2" button
document.getElementById("+2").addEventListener("click", function() {
    changeCartQuantity(2); // Call function to add 2
});

// Event listener for the "+3" button
document.getElementById("+3").addEventListener("click", function() {
    changeCartQuantity(3); // Call function to add 3
});

// Event listener for the "Reset Cart" button
document.getElementById("Reset Cart").addEventListener("click", function() {
    changeCartQuantity(-cart_quantity); // Call function to reset to 0
});

// Event listener for the "Show Quantity" button
document.getElementById("Show Quantity").addEventListener("click", function() {
    alert(`Cart Quantity: ${cart_quantity}`); // Show current quantity in an alert
});
