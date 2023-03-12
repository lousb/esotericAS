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


const numberOfPhotos = 17;
const galleryDir = './../Images/gallery/gallery';

const container = document.querySelector('.gallery-images');

for (let i = 1; i <= numberOfPhotos; i++) {
  const div = document.createElement('div');
  const img = document.createElement('img');

  img.src = galleryDir + i + '.webp';
  img.alt = 'gallery image';
  div.classList.add('image-wrap');
  div.classList.add('gallery-' + i); // add class gallery-i
  div.appendChild(img);
  container.appendChild(div);
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


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".title", 10, { y: 400 })
  .to('.copy-text', 10, {y:-450}, "-=10")
  .to('.firstsection', 10, {y:600}, "-=10")
  .to('.first-screen-overlay', 10, {y:300}, "-=9.5")
  .to('.first-screen-overlay', 10, {scale:1.3}, "-=10")
  .to('.images-first-section-text', 3, {scale:0.85}, "-=7")
  .to(
    '.gallery-images', 3, {opacity:1}, "-=7")
    .to('.gallery-images', 3, {y:-100}, "-=7"
  
  );
  
  

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".first-section")
  .addTo(controller);



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
  

