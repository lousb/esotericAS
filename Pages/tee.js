let cart = JSON.parse(localStorage.getItem("cart")) || [];
var referringURL = document.referrer;
// get the cart div
let cartAmountDiv = document.getElementById("cart-amount");

const hideDiv = document.querySelector(".hide");

hideDiv.classList.add = 'display-none';

let stock = 1;




document.querySelector('#tee-wrap').setAttribute("style", "height:110vh !important;");



  document.querySelector('#bag-wrap').setAttribute("style", "transition: all linear 1000ms; height:110vh")
  document.querySelector('#tee-wrap').setAttribute("style", "transition: all linear 200ms; opacity:0 !important;")



// check if there's anything in the cart
if (cart && cart.length > 0) {
  // set the cart amount in the div
  cartAmountDiv.innerHTML = cart.length;
} else {
  // if the cart is empty, set the div to 0
  cartAmountDiv.innerHTML = "0";
}


let selectedQuantity = 1;

let quantityDiv = document.getElementById('quantity');
quantityDiv.innerHTML = selectedQuantity;

function increaseQuantity(){
  if(selectedQuantity < 5){
    selectedQuantity++;
    quantityDiv.innerHTML = selectedQuantity;
  }
}
function decreaseQuantity(){
    if(selectedQuantity > 1){
        selectedQuantity--;
    }
    quantityDiv.innerHTML = selectedQuantity;

}



// check if there's anything in the cart
if (cart && cart.length > 0) {
  // set the cart amount in the div
  cartAmountDiv.innerHTML = cart.length;
} else {
  // if the cart is empty, set the div to 0
  cartAmountDiv.innerHTML = "0";
}

updateCartAmount();




let cartAddBtn = document.querySelector('.cart-add')

if(stock <= 0){
  cartAddBtn.classList.add('pointer-events-none');
  cartAddBtn.innerHTML = 'OUT OF STOCK';
  cartAddBtn.style.opacity = 0.5;
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
    delay: anime.stagger(200,{start:100}),
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
  width: '90%',
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
  width: 'calc(99% * 2)',
  duration:3000,
  delay: anime.stagger(500),
})








  total = document.querySelector('.total');
  totalAud = 0;




//Display Cart
function displayCart() {


  let cartItems = document.querySelector(".cart-products");
  cartItems.innerHTML = "";

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
      
      if(cart[i].size != undefined){
        let sizeDiv = document.createElement('div');
        sizeDiv.classList.add('cart-size');

        sizeDiv.innerHTML = '<p class="opa-product">'+cart[i].size+'</p>';

        cartItems.appendChild(sizeDiv);
      }


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
        width: 'calc(99% * 2)',
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



function updateCartAmount() {
  // get the cart amount display element
  let cartAmount = document.querySelector("#cart-amount");

  // get the cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // update the cart amount display
  cartAmount.innerHTML = cart.length;
}


  const button = document.querySelector('.x');
  let isAnimating = false;
  
  button.addEventListener("click", ()=>{
    if (isAnimating) return;
    isAnimating = true;
  
    // Rest of the animation code
  
  
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
  
  
    // Prevent the animation function from being called again for 3 seconds
    setTimeout(() => {
      isAnimating = false;
    }, 3000);
  });
  
   



// get the add to cart link
let addToCartLink = document.querySelector(".cart-add");
let size = '';

// get the dropdown element and its children
let dropdown = document.querySelector('.dropdown');
let dropdownItems = dropdown.querySelectorAll('.dropdown-content a');

let dropdownBTN = document.querySelector('.dropbtn');
let sizeNotSelected = document.querySelector('.size-not-selected');

// add click event listener to each dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // prevent the default link behavior
    e.preventDefault();

    // remove the active class from all items
    dropdownItems.forEach(item => {
      item.classList.remove('active');
    });

    // add the active class to the clicked item
    this.classList.add('active');

    // set the text of the dropdown button to the selected size
    dropdownBTN.innerHTML = this.innerHTML;
    size = this.innerHTML;
    
    // hide the message if a size is selected
    if (sizeNotSelected) {
      sizeNotSelected.innerHTML = '';
    }
  });
});

// get the selected size when adding to cart
addToCartLink.addEventListener("click", function (e) {
  // prevent the default link behavior
  e.preventDefault();

  // get the value of the active dropdown item
  let selectedSize = dropdown.querySelector('.active');

  if (selectedSize) {
    // the product information
    let product = {
      id: 2,
      name: "00001TEE",
      price: 88.88,
      priceId: 'price_1MeGnjGxHZYMtDr3NayzfMrO',
      quantity: selectedQuantity,
      size: size
    };



    // check if the product is already in the cart
    let itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      // if the product is not in the cart, add it
      cart.push(product);
    } else {
      // if the product is already in the cart, update its quantity
      cart[itemIndex].quantity += product.quantity;
    }

    // store the updated cart in session storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // update the cart amount display
    updateCartAmount();
  } else {
    // show the message if no size is selected
    if (sizeNotSelected) {
      sizeNotSelected.innerHTML = 'Please select a size before continuing'
    }
  }
});





// update the cart amount on page load



document.querySelector('.cart-add').addEventListener('click', function() {
  this.classList.add('cart-active');
});
document.querySelector('.cart-add').addEventListener('click', function(){
  this.classList.add('cart-active');
});


const images = [
  {
    url: "./../Images/GPTempDownload3.webp",
    top: "BAG ON PLINTH",
    bottom: "SYDNEY NSW"
  },
  {
    url: "./../Images/GPTempDownload2.webp",
    top: "ANNA IN THE STUDIO",
    bottom: "SYDNEY NSW"
  },
  {
    url: "/Images/TEMKAINTUNNEL.webp",
    top: "TEMKA IN THE STUDIO",
    bottom: "SYDNEY NSW"
  }
];

const iteration = 0;

const topValues = ["0001TEE ON YOUR FLOOR", "TEMKA IN TUNNEL ", "TEMKA IN TUNNEL 2"];
const bottomValues = ["SYDNEY AUS", "PETERSHAM NSW", "PETERSHAM NSW"];

let currentIndex = 0;
let currentTop = "";
let currentBottom = "";
let currentShotBY = ""
let intervalId = null;

const updateImage = (direction, Iteration) => {
  clearInterval(intervalId);

  if (direction === "left") {


    currentIndex = currentIndex === 0 ? topValues.length - 1 : currentIndex - 1;
  } else {

    
    currentIndex = currentIndex === topValues.length - 1 ? 0 : currentIndex + 1;
  }
  

  currentTop = topValues[currentIndex];
  currentBottom = bottomValues[currentIndex];

  document.querySelector(".img-desc-top").innerHTML = currentTop;
  document.querySelector(".img-desc-bottom").innerHTML = currentBottom;
  document.querySelector("#bag-wrap").style.backgroundImage = `url(${images[currentIndex].url})`;


  let iteration = 0;
  intervalId = setInterval(() => {
    let topDisplay = document.querySelector(".img-desc-top").innerHTML;
    let bottomDisplay = document.querySelector(".img-desc-bottom").innerHTML;
    
    topDisplay = topDisplay.substring(1) + topDisplay[0];
    bottomDisplay = bottomDisplay.substring(1) + bottomDisplay[0];
    
    document.querySelector(".img-desc-top").innerHTML = topDisplay;

    iteration++;

    if (iteration === currentTop.length) {
      clearInterval(intervalId);
    }
  }, 50);
};

document.querySelector(".c-left").addEventListener("click", () => {
  updateImage("left");
});

document.querySelector(".c-right").addEventListener("click", () => {
  updateImage("right");
});

const circleLeft = document.querySelector(".c-left");
const circleRight = document.querySelector(".c-right");
const imgDesc = document.querySelector(".img-desc");


circleLeft.addEventListener("mouseover", () => {
  imgDesc.classList.remove('display-none');
  hideDiv.style.opacity = "1";
  
});

circleLeft.addEventListener("mouseleave", () => {
  hideDiv.style.opacity = "0";

  
});

circleRight.addEventListener("mouseover", () => {
  imgDesc.classList.remove('display-none');
  hideDiv.style.opacity = "1";
});

circleRight.addEventListener("mouseleave", () => {
  hideDiv.style.opacity = "0";
});

/* Storing user's device details in a variable*/
  let details = navigator.userAgent;
  
  /* Creating a regular expression
  containing some mobile devices keywords
  to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;
  
  /* Using test() method to search regexp in details
  it returns boolean value*/
  let isMobileDevice = regexp.test(details);

function nextPage(){
  let firstSection = document.querySelector('.main-wrap')
  firstSection.setAttribute("style","transition: all 2000ms linear; color:white;")

  if (isMobileDevice) {
    window.location.href = "/Pages/bbobag.html";
  }
  else{
    let bagWrap = document.querySelector('.bag-wrap');
    bagWrap.setAttribute("style", "opacity:1 !important; transition: all 2000ms linear !important; background-image:url('/Images/bag-on-pillar.webp'); transform:translateX(-4vw); height:100% !important; width:50vw !important;")
    



      let tl = anime.timeline({
        easing: 'easeOutExpo'
      });
      tl
      .add({
        targets: '.shop-nav',
        delay: 100, 
        duration: 3000, 
        translateX: '50vw'
      })
      .add({
        targets: '.main-wrap',
        delay: -3000, 
        duration: 3000, 
        translateX: '-50vw',
        opacity:0,
      })
      .add({
        targets: '.main-wrap',
        delay: -3000, 
        duration: 1500, 
        opacity:0,
      })
      .add({
        targets: '.main-wrap',
        delay: -3000, 
        duration: 3000, 
        innerHeight: '-50vw'
      })
      .add({
        targets: '.svg-nav a',
        delay: -1000, 
        duration: 500, 
        opacity: '0'
      })
  
      window.location.href = "#top";
    
    
    
    
      setTimeout(()=>{
        window.location.href = "/Pages/bbobag.html";
      },2150)
    
    };  
  }




if (!isMobileDevice) {
  // Check if the referring URL ends with "/Pages/bbobag.html"
  if (referringURL.endsWith("/Pages/bbobag.html")) {
    // Perform your function here
    let bagWrap = document.querySelector('.bag-wrap');
    bagWrap.setAttribute("style", "transition-duration:0ms !important;transform:translateX(4vw)")
    
  } else {
    let box8 = anime({
      duration: 500,
      targets: '.bag-wrap',
      translateX: "4vw"
    });
  }
}






let mainRaise = anime({
  targets: '.bag-information',
  delay: 500, 
  duration: 2000,
  opacity: 1, 
  translateY: -20,
})


let box1 = anime({
  targets: '.bag-title',
  delay: 500, 
  duration: 2000,
  opacity: 1, 

}); 
let box2 = anime({
  duration: 2000,
  targets: '.second-load',
  delay: 550,
  opacity:1
});
let box3 = anime({
  duration: 2000,
  targets: '.third-load',
  delay: 750,
  opacity:1
});
let box4 = anime({
  duration: 2000,
  targets: '.fourth-load',
  delay: 900,
  opacity:1
});
let lastload = anime({
  duration: 2000,
  targets:'.last-load',
  delay: 2000,
  opacity:1
})
let box5 = anime({
  duration: 2000,
  targets: '.fifth-load',
  delay: 1000,
  opacity:1
});
let box6 = anime({
  duration: 2000,
  targets: '.sixth-load span',
  delay: anime.stagger(300, {start:1700}),
  translateY: 40,
  opacity:1
});
let box7 = anime({
  duration: 2000,
  targets: '.desc-item',
  delay: anime.stagger(300 ,{start: 1300}),
  translateX: 10,
  
});
if (referringURL.endsWith("/Pages/bbobag.html")) {
  // Perform your function here
  let bagWrap = document.querySelector('.bag-wrap');
  console.log("The referring URL ends with /Pages/bbobag.html lolol");
} else {
  console.log("The referring URL does not end with /Pages/tee.html lolol");
}
const viewLoad = document.querySelector('.view-load');

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    // check if the observed element is in the viewport
    if (entry.isIntersecting) {
      // animate the opacity of the element using anime.js
      anime({
        duration: 2000,
        targets: '.view-load',
        opacity:1,
        delay:200,
        translateY:-20
      });

      // stop observing the element once it becomes visible
      observer.unobserve(entry.target);
    }
  });
}

// create an intersection observer and observe the element
const options = {
  threshold: 0.5 // the percentage of the element that needs to be visible before triggering the intersection
};
const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(viewLoad);


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