let cartQuantity = 0;  // Correct spelling
let holdQuantity = 0;  // Correct spelling

const cartDisplay = document.querySelector(".cart");
const holdDisplay = document.querySelector(".hold");

// Function to display cart quantity
function updateCartDisplay() {
    cartDisplay.textContent = `Cart Quantity: ${cartQuantity}`;
}

// Function to change cart quantity
function changeCartQuantity() {
    cartQuantity += holdQuantity;
    changeHoldQuantity(-holdQuantity); // Move items from hold to cart
    updateCartDisplay();
}

// Add event listener for elements with the "addToCart" class
let addToCartButtons = document.getElementsByClassName("addToCart");
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        changeCartQuantity();
    });
}

// Function to display hold quantity
function updateHoldDisplay() {
    holdDisplay.textContent = `Quantity On Hold: ${holdQuantity}`;
}

// Function to change hold quantity
function changeHoldQuantity(amount) {
    holdQuantity += amount;
    updateHoldDisplay();
}

// Event listener for the "+2" button
document.getElementById("+2").addEventListener("click", function() {
    changeHoldQuantity(2); // Call function to add 2
});

// Event listener for the "+3" button
document.getElementById("+3").addEventListener("click", function() {
    changeHoldQuantity(3); // Call function to add 3
});

// Event listener for the "Reset Cart" button
document.getElementById("resetCart").addEventListener("click", function() {
    changeHoldQuantity(-holdQuantity); // Call function to reset hold quantity to 0
});
