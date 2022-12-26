
(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active');
    return $('.box').toggleClass('open');
  });

}).call(this);



function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}
document.addEventListener('click', clickEffect);




var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(m){
  let xPos = m.pageX - 5;
  let yPos = m.pageY - 5;

  cursor.style.left = xPos + 'px';
  cursor.style.top = yPos + 'px';
});








const socialButton = document.querySelector("#social-fixed")

window.addEventListener("scroll", scrollSocial);
function scrollSocial() {
  if (window.pageYOffset > 450) {
    socialButton.style.opacity = 1;
    socialButton.style.transition = "1.5s"
  }
  else {
    socialButton.style.opacity = 0;
  }
}





const backToTopButton = document.querySelector("#btn-to-top");

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 950) {
    backToTopButton.style.opacity = 1;
    backToTopButton.style.transition = "1s"
  }
  else {
    backToTopButton.style.opacity = 0;
  }
}


backToTopButton.addEventListener("click", backToTop);
function backToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}


var pagePreloader = document.querySelector('#box-load');


window.addEventListener('load', function(){
  pagePreloader.classList.add('load-fade-out');

  this.setTimeout(function(){
    pagePreloader.style.display = 'none'
  }, 2000);
  
})



window.sr = ScrollReveal({reset: true});

sr.reveal('.eyes', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.title', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.subtitle', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('#btn-home', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.about-title', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.text-about', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.social-links', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.about-skill', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.title-skill', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.project-title', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.cards', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.contact-title', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.contact-form', {
  distance: '100px',
  scale: 0.1,
  duration: 1500
});

sr.reveal('.footer-copy', {
  scale: 0.1,
  duration: 1500
});





$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});




let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "VOLTA AQUI! 😭";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});


let emojis = [
  "🤙🏻",
  "✌🏻",
  "💪🏻",
  "🤏🏻",
  "👈🏻",
  "👇🏻",
  "👍🏻",
  "👌🏻",
  "🖐🏻",
  "👊🏻",
  "🤲🏻",
  "🤝🏻",
]

let urlAnimate = () => {
  window.location.hash = emojis[Math.floor((Date.now() / 100 ) % emojis.length )];
  setTimeout(urlAnimate,1500)
}

urlAnimate()