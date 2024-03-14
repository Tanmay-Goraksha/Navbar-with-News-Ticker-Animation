const navbar = document.getElementById('navbar');
const logoButton = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const textElement = document.querySelector('.text-element');

let isOpen = true;
let tickerTween;

logoButton.addEventListener('click', () => {
  if (isOpen) {
   
    gsap.to(navbar, { width: logoButton.offsetWidth, duration: 0.3 });
    gsap.to(menu, { opacity: 0, duration: 0.3, onComplete: () => {
      menu.style.display = "none";
    }});
    stopTicker();
    isOpen = false;
  } else {
  
    menu.style.display = "flex";
    gsap.to(navbar, { width: "100%", duration: 0.3 });
    gsap.to(menu, { opacity: 1, duration: 0.3 });
    startTicker();
    isOpen = true;
  }
});

function startTicker() {
  tickerTween = gsap.fromTo(textElement, { x: navbar.offsetWidth }, {
    x: -textElement.offsetWidth,
    duration: 10, 
    ease: "none",
    repeat: -1
  });
}

function stopTicker() {
  if (tickerTween) {
    tickerTween.kill();
  }
}


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.menu');
    const tickerContainer = document.querySelector('.ticker-container');

    logo.addEventListener('click', function () {
        navbar.classList.toggle('collapsed');
        menu.classList.toggle('collapsed'); 
        tickerContainer.classList.toggle('collapsed'); 
    });
});

