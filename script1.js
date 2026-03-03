
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;  
}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;  
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;  
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;  
}

const cartIcon = document.querySelector("#cart-icon");

cartIcon.addEventListener("click",() => cart.classList.add("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        updateCartCount(1);
        const Single = event.target.closest(".single");
        alert("Thank you for your purchase !");
        
    })
    
});


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
      
};

const form = document.getElementById("myForm")

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Sumitted Successfully")
})













