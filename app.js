/* HEADER */
const navigation = document.querySelector('.header .nav-bar .nav-list .navigation');
const mobile_menu =document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

navigation.addEventListener('click', () => {
	navigation.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

/* */
document.addEventListener('scroll',() =>{
  var scroll_position = window.scrollY;
  if (scroll_position > 250){
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor ='transparent';
  }
})


/* CARD SLIDE , CAROUSEL */
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

