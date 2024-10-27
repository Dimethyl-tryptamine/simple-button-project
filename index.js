let cartQuantity = 0;  
let holdQuantity = 0;  

document.getElementById("+2").addEventListener("click", function(){
    holdQuantity += 2
    document.getElementById("hold").textContent = (`Quantity On Hold: ${holdQuantity}`)
})

document.getElementById("+3").addEventListener("click", function(){
    holdQuantity += 3
    document.getElementById("hold").textContent = (`Quantity On Hold: ${holdQuantity}`)
})

document.getElementById('addToCart').addEventListener("click", function() {
    cartQuantity += holdQuantity
    holdQuantity = 0; 

    document.getElementById("cart").textContent = `Cart Quantity: ${cartQuantity}`; 
    document.getElementById("hold").textContent = `Quantity On Hold: ${holdQuantity}`; 
});

document.getElementById("resetCart").addEventListener("click", function() {
    cartQuantity = 0
    document.getElementById("cart").textContent = `Cart Quantity: ${cartQuantity}`;

});

