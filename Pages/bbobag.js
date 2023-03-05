

let cart = JSON.parse(localStorage.getItem("cart")) || [];
var referringURL = document.referrer;
// get the cart div
let cartAmountDiv = document.getElementById("cart-amount");

const hideDiv = document.querySelector(".hide");

hideDiv.classList.add = 'display-none';

document.querySelector('#tee-wrap').setAttribute("style", "height:110vh !important;")
if (referringURL.endsWith("/Pages/tee.html")) {
  console.log('test')

  document.querySelector('#bag-wrap').setAttribute("style", "transition:0ms; opacity:0 !important;");
}else{
  
  document.querySelector('#bag-wrap').setAttribute("style", "  opacity:0 !important;");
}



document.querySelector('#bag-wrap').setAttribute("style", "transition: all linear 1000ms; height:110vh")
document.querySelector('#tee-wrap').setAttribute("style", "transition: all linear 200ms; opacity:0")



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
    selectedQuantity++;
    quantityDiv.innerHTML = selectedQuantity;
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







//Display Cart
function displayCart() {

  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let item = document.createElement("li");

      navWrap = document.getElementsByClassName('.nav-wrap');

      let tl = anime.timeline({
        easing: 'easeOutExpo'
      });

      tl
      .add({
        targets: '.nav-wrap',
        delay: 100, 
        duration: 0, 
        translateY: '100vh'
      })

      .add({
        targets: '.nav-wrap',
        delay: 100, 
        duration: 3000, 
        translateY: '-0vh',
        });

        
      
        let cartThumbnail = document.createElement("span");
        cartThumbnail.classList.add("cart-thumb");
        item.appendChild(cartThumbnail);
        if (cart[i].name === "BBOBAG") {
          cartThumbnail.style.backgroundImage = "url('/Images/IMG_5613_2-removebg-preview.png')";
        } else {
          cartThumbnail.style.backgroundImage = "url('/Images/Tee-thumbnail.webp')";
        }         

      item.innerHTML += 

                      "<span class='cart-item item-1'>" + cart[i].name + "</span>" +
                       " - " +
                       "<span class='cart-item'>" + cart[i].quantity + " - $" +                       "<span class='cart-item'>" + cart[i].price * cart[i].quantity + "</span>"
                       ;
   

                 


                       let removeButton = document.createElement("button");
                       removeButton.innerHTML = "Remove";
                       removeButton.onclick = function() {
                         removeFromCart(i);
                       };
                       item.appendChild(removeButton);
        


      document.querySelectorAll('.main-wrap, nav, .logo').forEach(function(element) {
  element.classList.add("blur");
});

      cartItems.appendChild(item);
    }

    document.getElementById("cart-popup").style.display = "block";

  } else {
    let item = document.createElement("li");
    item.innerHTML = "Your cart is empty";
    cartItems.appendChild(item);
    document.getElementById("cart-popup").style.display = "block";
    
  }
}





//close cart
function closeCart() {
  
  let tl = anime.timeline({
    easing: 'easeOutExpo'
  });

  var cartheight = document.getElementById('cart-popup').clientHeight;

  tl
  .add({
    targets: '.nav-wrap',
    delay: 100, 
    duration: 3000, 
    translateY: cartheight+5 + 'px',
  })


  document.querySelectorAll('.main-wrap, nav, .logo, .bag-wrap').forEach(function(element) {
    element.classList.remove("blur");
  });


}

function removeFromCart(index) {
  cart.splice(index, 1);
  cartAmountDiv.innerHTML = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function updateCartAmount() {
  // get the cart amount display element
  let cartAmount = document.querySelector("#cart-amount");

  // get the cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // update the cart amount display
  cartAmount.innerHTML = cart.length;
}



// get the add to cart link
let addToCartLink = document.querySelector(".cart-add");

// add a click event to the link
addToCartLink.addEventListener("click", function (e) {
  // prevent the default link behavior
  e.preventDefault();

  // the product information
  let product = {
    id: 1,
    name: "BBOBAG",
    price:188.88,
    priceId:'price_1MeGmtGxHZYMtDr3QTU2dphQ',
    quantity: selectedQuantity,
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
    url: "/Images/Artboard4_1.webp",
    top: "BAG ON PLINTH",
    bottom: "SYDNEY NSW"
  },
  {
    url: "/Images/Artboard4.webp",
    top: "ANNA IN THE STUDIO",
    bottom: "SYDNEY NSW"
  },
  {
    url: "/Images/Artboard4_2.webp",
    top: "TEMKA IN THE STUDIO",
    bottom: "SYDNEY NSW"
  }
];

const topValues = ["BAG ON PLINTH ", "ANNA IN THE STUDIO ", "TEMKA IN THE STUDIO "];
const bottomValues = ["SYDNEY AUS", "SYDNEY AUS", "SYDNEY AUS"];

let currentIndex = 0;
let currentTop = "";
let currentBottom = "";
let intervalId = null;

const updateImage = (direction) => {
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
    window.location.href = "/Pages/tee.html";
  } else {
    
    let bagWrap = document.querySelector('.bag-wrap');
     bagWrap.setAttribute("style", "opacity:1 !important; transition: all 2000ms linear !important;  background-position-y: 0; background-image:url('/Images/img-7707.webp'); transform:translateX(4vw); height:100% !important; width:50vw !important;")


  let tl = anime.timeline({
    easing: 'easeOutExpo'
  });
  tl
  .add({
    targets: '.shop-nav',
    delay: 100, 
    duration: 3000, 
    translateX: '-50vw'
  })
  .add({
    targets: '.main-wrap',
    delay: -3000, 
    duration: 3000, 
    translateX: '50vw',
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
    innerHeight: '50vw'
  })
  .add({
    targets: '.svg-nav a',
    delay: -1000, 
    duration: 500, 
    opacity: '0'
  })
  window.location.href = "#top";




  setTimeout(()=>{
    window.location.href = "/Pages/tee.html";
  },2150)
  }

};




if (!isMobileDevice) {
  let bagWrap = document.querySelector('.bag-wrap');
  // Check if the referring URL ends with "/Pages/bbobag.html"
  if (referringURL.endsWith("/Pages/tee.html")) {
    // Perform your function here

    bagWrap.setAttribute("style", "transition-duration:0ms;transform:translateX(-4vw);height:100vh")
    console.log("The referring URL ends with /Pages/tee.html");
  } else {
    let box8 = anime({
      duration: 300,
      targets: '.bag-wrap',
      translateX: "-4vw"
    });
    bagWrap.setAttribute("style", "background-position-x:2em; height:100vh")
    console.log("The referring URL does not end with /Pages/tee.html");
    setTimeout(()=>{

    },50)

  }
}




let mainRaise = anime({
  targets: '.bag-information',
  delay: 500, 
  duration: 1700,
  opacity: 1, 
  translateY: -20,
})
let box1 = anime({
  targets: '.bag-title',
  delay: 500, 
  duration: 1700,
  opacity: 1, 

}); 

let box2 = anime({
  duration: 2000,
  targets: '.second-load',
  delay: 950,
  opacity:1
});
let box3 = anime({
  duration: 2000,
  targets: '.third-load',
  delay: 1250,
  opacity:1
});
let box4 = anime({
  duration: 2000,
  targets: '.fourth-load',
  delay: 1500,
  opacity:1
});
let lastload = anime({
  duration: 2000,
  targets:'.last-load',
  delay: 2100,
  opacity:1
})
let box5 = anime({
  duration: 2000,
  targets: '.fifth-load',
  delay: 1700,
  opacity:1
});
let box6 = anime({
  duration: 2000,
  targets: '.sixth-load',
  delay: 2000,
  translateY: -20,
  opacity:1
});
let box7 = anime({
  duration: 3000,
  targets: '.desc-item',
  delay: anime.stagger(300 ,{start: 2200}),
  translateX: 20,
  opacity:1
  
});
if (referringURL.endsWith("/Pages/tee.html")) {
  // Perform your function here
  let bagWrap = document.querySelector('.bag-wrap');
  let box9 = anime({
    duration:-100,
    targets: '.overlay-blk',
    opacity:0
  })
  console.log("The referring URL ends with /Pages/tee.html lolol");
} else {
  let box9 = anime({
    duration:3000,
    targets: '.overlay-blk',
    
    opacity:0
  })
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
        delay:300,
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