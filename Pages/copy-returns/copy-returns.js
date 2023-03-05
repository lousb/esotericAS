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

//spotlight shop nav

