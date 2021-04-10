

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} 
else{
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')

    for (var i = 0 ; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click' , removeCartItem)   
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')

    for (var i = 0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addToCartButton = document.getElementsByClassName('shop-item-button')

    for(var i = 0 ; i < addToCartButton.length ; i++){
        var button = addToCartButton[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

}

//-----------------------------------------------------------------------------------------------------//

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

/*---- function purchaseClicked() {

    var name1 = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var numb = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    if(name1.length == '' ||  numb.length == null ||  email.length == '' || address.length == ''){
        alert('Please fill the form correctly !!')
    }
    
    else
    {alert('Thank you for your purchase !!');}

    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
} ---*/

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    // var imageSrc = shopItem.getElementByClassName("-------")[0].src
    console.log(title , price /* ,imageSrc */)
    addItemToCart(title , price /* , imageSrc */ )
    updateCartTotal()
}


function addItemToCart(title , price ){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row') 
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
    for (var i = 0 ; i < cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item is already added !')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
                <img class="cart-item-image" src="     ">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0 ; i < cartRows.length ; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]

        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

}

//---------------------------------------------------------------------------------------------

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
//---------------------------------------------------------------------------------------------

function validation(){
    
    var name1 = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var numb = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name1.length == '' ||  numb.length == null ||  email.length == '' || address.length == ''){
        text = "Please Fill the form Correctly !";
        alert("Please fill the form Correctyly");
        error_message.innerHTML = text;
        return false;
    }

    if(name1.length < 10){
        text = "please enter valid name";
        alert("please enter valid name");
        error_message.innerHTML = text;
        return false;
    }

    if( isNaN(numb) || numb.length < 10){
        text = "please enter valid Phone number";
        alert("please enter valid Phone number");
        error_message.innerHTML = text;
        return false;
    }

    if( email.indexOf("@") == -1 || email.length < 10){
        text = "please enter valid E-mail";
        alert("please enter valid E-mail");
        error_message.innerHTML = text;
        return false;
    }

    if( address.length < 10){
        text = "please enter valid Address";
        alert("please enter valid Address");
        error_message.innerHTML = text;
        return false;
    }


    text = "Form Submitted Successfully!";
    alert("Form Submitted Successfully!")

     

    }

function unvalidation(){

    var error_messageX = document.getElementById("error_message");
    
}
    
