

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












