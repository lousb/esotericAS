var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
    
    var ps = new ParticleSlider({
      ptlGap: isMobile || isSmall ? 3 : 0,
      ptlSize: isMobile || isSmall ? 3 : 1,
      width: 1e9,
      height: 1e9
    });
      
    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function(value){
      ps.monochrome = true;
      ps.setColor(value);
        ps.init(true);
    });
    
    
    (window.addEventListener
     ? window.addEventListener('click', function(){ps.init(true)}, false)
     : window.onclick = function(){ps.init(true)});
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
      psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
      
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);

//Overlay Functionality
var slide = [];
var galleryContent={
    'assets/images/prod-yourshot-51861-5361943_square.webp':false
    ,'assets/images/nasm-si-98-15068.webp':false
    ,'assets/images/081.webp':false
    ,'assets/images/180905-travel-photo-contest-001.jpeg':false
    ,'assets/images/FYrHnH9i8BCv8GgmiugMaT.jpeg':false
    ,'assets/images/honorable-mention-people.webp':false,
};
var galleryStatus = 0;
var active;

galleryArray = Object.keys(galleryContent);



for (let index = 0; index < galleryArray.length; index++) {
    console.log(galleryArray[index])
    let img = new Image();
    img.src = galleryArray[index];
    console.log(img.src);
    document.getElementById('overlay-images').appendChild(img);
    console.log('hi' + index);
}


linkHover=document.querySelector('.nav-item');
linkHover.addEventListener("mouseover", galleryHover, false);
linkHover.addEventListener("mouseover", galleryHoverActive, false);
linkHover.addEventListener("mouseout", galleryNonHoverActive, false);

function galleryHoverActive(){
    active = true;
    
    document.querySelector('#overlay').setAttribute("style", "background-image:url('"+ galleryArray[galleryStatus] +"');")
}

function galleryNonHoverActive(){
    active = false;
    clearInterval(myInterval);
    document.querySelector('#overlay').setAttribute('style', 'background-image:none;');
}

function galleryHover()
{  
    myInterval = setInterval(function() {
        if(active !== true){
            return;
        } else {

            galleryStatus++;
            document.querySelector('#overlay').setAttribute("style", "background-image:url('"+ galleryArray[galleryStatus] +"');");
        }
        if(galleryStatus>4){galleryStatus=-1}
    }, 800 ); //Overlay Slide Speed
}
//--------------------------------------------------------------------------------------------------------
//shop - hover
shopHover=document.getElementById("shop")
shopModalHover=document.getElementById("shop-section")

//hover nav 'shop' link - listen events
shopHover.addEventListener("mouseover", shopLinkHoverActive, false);


modalActive=false;

//handles active hover status of nav 'shop' link
function shopLinkHoverActive(){
  if(modalActive===false){
    document.querySelector('#shop-section').setAttribute("style", "z-index:3;display:block;pointer-events:all")
    document.querySelector('#close-button').setAttribute("style", "opacity:1;")
    document.querySelector('#nav-shop').setAttribute("style", "opacity:0; pointer-events:all;")
  }
}




//closes shop modal
function closeShopModal(){
  modalActive = true;
  document.querySelector('#shop-section').setAttribute("style", "display:none;pointer-events:none");
  document.querySelector('#close-button').setAttribute("style", "opacity:0;");
  setTimeout(() => {    document.querySelector('#nav-shop').setAttribute("style", "opacity:1; pointer-events:all;") }, 200);
  setTimeout(() => { modalActive = false }, 300);
}