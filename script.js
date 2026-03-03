const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-remove");

cartIcon.addEventListener("click",() => cart.classList.add("active"));
cartClose.addEventListener("click",() => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const Box = event.target.closest(".box");
        addToCart(Box);
    })
});

const cartContent = document.querySelector(".cart-content");

const addToCart = Box =>{
    const BoxImgSrc = Box.querySelector("img").src;
    const BoxIcons = Box.querySelector(".icons").textContent;
    const BoxPrice = Box.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if(item.textContent === BoxIcons) {
            alert("This item is already in the cart.");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
       <img src="${BoxImgSrc}" alt="" class="cart-img">
                <div class="cart-details">
                    <h2 class="cart-product-title">${BoxIcons}</h2>
                        <span class="cart-price">${BoxPrice}</span>
                        <div class="cart-quantity">
                            <button id="decrement">-</button>
                            <span class="number">1</span>
                            <button id="increment">+</button>
                        </div>
                    
                </div>
                <a href=""  class="fas fa-trash" id="cart-trash"></a>
                `;
         cartContent.appendChild(cartBox);

         cartBox.querySelector("#cart-trash").addEventListener("click", () =>{
            cartBox.remove();
            
            updateCartCount(-1);
            updateTotalPrice();
         });

         cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
            const numberElement = cartBox.querySelector(".number");
            const decrementButton = cartBox.querySelector("#decrement");
            let quantity = numberElement.textContent;

            if (event.target.id === "decrement" && quantity > 1) {
                quantity--;
                if (quantity === 1) {
                    decrementButton.style.color = "#999";
                }

            }
                else if (event.target.id === "increment" ) {
                    quantity++;
                    decrementButton.style.color = "#333";
                }
                 numberElement.textContent = quantity;

             updateTotalPrice();
         });

          
         updateCartCount(1);

         updateTotalPrice();
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total}`
};

let cartItemCount = 0;
const updateCartCount = change =>{
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;

    if (cartItemCount > 0)  {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;

    }

    else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
}

const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");

    if (cartBoxes.length === 0) {
        alert(" Your cart is empty. Please add items to your cart before buying.");
        return;
    }
     
    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;

    updateCartCount(0);

    updateTotalPrice();

    alert("Thank you for your purchase !");
});


const form = document.getElementById("myForm")

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Sumitted Successfully")
})



