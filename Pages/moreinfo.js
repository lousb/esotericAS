
if (window.innerWidth <= 900) {
  (function() {
    console.log('stop looking at my console')
  })();
} else {
  anime({
    easing: 'easeOutExpo',
    duration: 0,
    targets: '.esoteric',
    translateX: '37%',
    
  })
  anime({
    easing: 'easeOutExpo',
    duration: 2000,
    delay:200,
    targets: '.esoteric',
    translateX: '0%',
  });
  
  
  
  anime({
    easing: 'easeOutExpo',
    duration: 0,
    targets: '.studio',
    translateX: '-42%',
    
  })
  anime({
    easing: 'easeOutExpo',
    duration: 2000,
    delay:200,
    targets: '.studio',
    translateX: '0%',
  });
  
  anime({
    easing: 'easeOutExpo',
    duration: 3000,
    delay:500,
    targets: '.overlay-main-wrap',
    opacity:1
  });
  anime({
    easing: 'easeOutExpo',
    duration: 3000,
    delay: anime.stagger(300 ,{start: 500}),
    targets: '.definition',
    opacity:1,
    translateY:'20px'
  });
}




const tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 3000, 
  autoplay: false,
});

tl
.add({
  targets: '.tcc',
  delay: 100, 
  duration: 0, 
  translateY: '0vh',
});

if (window.innerWidth <= 950) {
  (function() {
    tl.add({
      targets: '.tcc',
      delay: 100,
      duration: 3000, 
      translateY: '-100vh',
    });
  })();
} else {
  tl.add({
    targets: '.tcc',
    delay: 100,
    duration: 3000, 
    translateY: '-100vh',
  });
}




const tltext = anime.timeline({
  easing: 'easeOutExpo',
  duration: 3000, 
  autoplay: false,
});
tltext.add({
  targets:'.main-wrap',
  opacity:0
})





const tl2 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 3000, 
  autoplay: false,
});
tl2.add({
  targets: '.line',
  width: '0%',
  duration:0
})
.add({
  targets: '.line',
  width: '80%',
  duration:3000,
  delay: 1500,
})



const tl3 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 3000, 
  delay:2000,
  autoplay: false,
})
tl3.add({
  targets: '.line-top-cart',
  width: '0%',
  duration:0
})
.add({
  targets: '.line-top-cart',
  width: '100%',
  duration:3000,
  delay: anime.stagger(500),
})








  total = document.querySelector('.total');
  totalAud = 0;




//Display Cart
function displayCart() {


  let cartItems = document.querySelector(".cart-products");
  cartItems.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);


  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log(cart);



      let item = document.createElement("div");
      item.classList.add('cart-product');
      item.classList.add('i'+cart[i].name+'-product');

      navWrap = document.getElementsByClassName('.test-cart');

      tl.play();
      tltext.play();

      totalAud += cart[i].price * cart[i].quantity;

      item.innerHTML +=
        '<div class="product-product opa-product">' + cart[i].name + '</div>' +
        '<div class="product-quantity opa-product">' +
          '<span class="cart-quantity i'+cart[i].name+'-quantity">' + cart[i].quantity + '</span>' +
          '<span class="decrease-cart" onclick="decreaseCart(\''+cart[i].name+'\')">-</span>' +
          '<span class="increase-cart" onclick="increaseCart(\''+cart[i].name+'\')">+</span>' +
        '</div>' +
        '<div class="product-price opa-product i'+cart[i].name+'-total">' + cart[i].price * cart[i].quantity + 'AUD</div>' +
        '<div class="product-line-top"><div>'

      cartItems.appendChild(item);


    }

    let tlproducts = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false,
      duration: 3000
    })
    tlproducts.add({
      targets: '.opa-product',
      duration: 2500,
      delay: anime.stagger(400, { start: 1000 }),
      opacity: 1,
    })

    let tl5 = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false,
      duration: 3000
    })
    tl5.add({
      targets: '.product-line-top',
      width: '100%',
      delay: anime.stagger(1000, { start: 500 }),
    })

    tl2.play();

    let tl33 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 3000,
      delay: 2000,
    })
    tl33.add({
        targets: '.line-top-cart',
        width: '0%',
        duration: 0
      })
      .add({
        targets: '.line-top-cart',
        width: '100%',
        duration: 3000,
        delay: anime.stagger(500),
      })

    tlproducts.play();
    tl5.play();



  } else {
    let item = document.createElement("div");
    item.classList.add('cart-product')

    item.innerHTML = "Your cart is empty";
  }

  total.innerHTML = totalAud + 'AUD';
}

function increaseCart(name) {
  // Get cart items from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Find the item with the same name
  let item = cart.find(item => item.name === name);

  totalAud +=  item.price

  // Increase quantity if above 0
  if (item && item.quantity > 0) {
    item.quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update quantity and total HTML
    let quantityEl = document.querySelector('.i' + name + '-quantity');
    if (quantityEl) {
      quantityEl.textContent = item.quantity;
    }
    let totalEl = document.querySelector('.i' + name + '-total');
    if (totalEl) {
      totalEl.textContent = item.price * item.quantity + 'AUD';
    }
  }
  total.innerHTML = totalAud + 'AUD';
}

function decreaseCart(name) {
  // Get cart items from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];


  

  // Find the item with the same name
  let item = cart.find(item => item.name === name);
  
  totalAud -=  item.price

  // Decrease quantity if above 0
  if (item && item.quantity > 0) {
    item.quantity--;
    if (item.quantity === 0) {
      // Remove item if quantity is 0
      cart = cart.filter(item => item.name !== name);

      // Remove item from DOM
      let itemEl = document.querySelector('.i' + name + '-product');
      if (itemEl) {
        itemEl.remove();
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update quantity and total HTML
    let quantityEl = document.querySelector('.i' + name + '-quantity');
    if (quantityEl) {
      quantityEl.textContent = item.quantity;
    }
    let totalEl = document.querySelector('.i' + name + '-total');
    if (totalEl) {
      totalEl.textContent = item.price * item.quantity + 'AUD';
    }

    total.innerHTML = totalAud + 'AUD';
  }
}

document.querySelector('.x').addEventListener("click", ()=>{

  let tl13 = anime.timeline({
    easing: 'easeOutExpo', 
    duration:3000
  })
  tl13.add({
    targets: '.opa-product',
    duration:2500,
    delay: anime.stagger(400,{start:0}),
    opacity:0,
  
  })

  let tl15 = anime.timeline({
    easing: 'easeOutExpo', 
    duration:3000
  })
  tl15.add({
    targets:'.product-line-top',
    width: '0%',
    delay:anime.stagger(1000,{start:1000}),
  })
 
  const tl12 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000, 
  });
  
  tl12
  .add({
    targets: '.tcc',
    delay: anime.stagger(200,{start:3000}),
    duration: 3000, 
    translateY: '0vh',
  })
  
  const tl11 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000, 
  });
  tl11.add({
    targets:'.main-wrap',
    opacity:1
  })
  
  
  

  const tl10 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000, 
  });
  tl10.add({
    targets: '.line',
    width: '0%',
    duration:3000,
    delay: 2200,
  })



  
}
);  

function updateCartAmount() {
  // get the cart amount display element
  let cartAmount = document.querySelector("#cart-amount");

  // get the cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // update the cart amount display
  cartAmount.innerHTML = cart.length;
}

updateCartAmount();



function checkout(){
  let cart = localStorage.getItem('cart');

  

  let a = document.getElementById('checkout_data');
  a.value = cart;

  let form = document.getElementById('checkoutForm')

  form.submit();
}

function moreInfoTransition(){
  const moreInfoTransitionDiv = document.createElement('div');
  moreInfoTransitionDiv.classList.add('more-info-transition');

  const transitionsContainer = document.querySelector('.transitions');
  transitionsContainer.appendChild(moreInfoTransitionDiv);

  anime({
    targets: '.more-info-transition',
    opacity: 1,
    duration: 800,
    easing: 'linear'
  });

  setTimeout(() => {
    window.location.href = '/Pages/moreinfo.html';
  }, 1000);
  
}

//shop - hover
shopHover=document.getElementById("shop")
shopModalHover=document.getElementById("shop-section")

//hover nav 'shop' link - listen events
shopHover.addEventListener("mouseover", shopLinkHoverActive, false);

const shopLink = document.getElementById("shop");

const closeButton = document.createElement("a");
closeButton.id = "close-button";


modalActive=false;

//handles active hover status of nav 'shop' link
function shopLinkHoverActive(){
  if(modalActive===false){
    let animation = anime({
      targets: '.nav-title',
      delay: anime.stagger(300 ,{start: 300}), 
      duration: 2000,
      opacity: 1, 
      translateY: -20,
    });  
    document.querySelector('#shop-section').setAttribute("style", "z-index:3;display:block;pointer-events:all")
    shopLink.appendChild(closeButton);
    document.querySelector('#nav-shop').setAttribute("style", "opacity:0; pointer-events:all;")
  }
}




//closes shop modal
closeButton.onclick = function () {
  modalActive = true;
  document.querySelector('#shop-section').setAttribute("style", "display:none;pointer-events:none");
  closeButton.remove();
  setTimeout(() => {    document.querySelector('#nav-shop').setAttribute("style", "opacity:1; pointer-events:all;") }, 200);
  setTimeout(() => { modalActive = false }, 300);
}














