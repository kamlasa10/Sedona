var btn = document.querySelector('.about-company__write-us_btn');
var popup = document.querySelector('.modal__write-us');
var close = document.querySelector('.modal-close');
var link = document.querySelector('.map__link');
var map = document.querySelector('.modal-map');
var closemap = document.querySelector('.close-map');
btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});
link.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});
closemap.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});




$(document).ready(function(){
  $('.category__slider').bxSlider();
});