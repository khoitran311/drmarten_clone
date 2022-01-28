/*slider-js*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("btn__Change");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/*color-change-js*/
/*Oder-congtainer*/

// function showOrder(){
//   orderContainer.classList.add('js-open');
// }
/*Render--shoes--list*/
const showShoes = document.querySelector('.shoes__box_1');
const app ={
  listShoes:[
    {
      id:1,
      shoes_img:"boot1.jpg",
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['Black'],
    },
    {
      id:2,
      shoes_img:'boot2.jpg',
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['Black','White','Blue'],
    },
    {
      id:3,
      shoes_img:'boot3.jpg',
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['White','Black'],
    },
    {
      id:4,
      shoes_img:'boot4.jpg',
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['Black','Brown'],
    },
    {
      id:5,
      shoes_img:'boot5.jpg',
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['Black','White'],
    },
    {
      id:6,
      shoes_img:'boot6.jpg',
      shoes_name:'SINGLAIR PATENT CROC EMBOSS PLATFORM BOOTS',
      shoes_price:'99$',
      shoes_color:['Black'],
    },
  ],
      render: function(){
        const htmls = this.listShoes.map(shoes =>{
             return `
             <div class="shoes__item">
             <img class="img__shoes" src="/image/${shoes.shoes_img}" alt="">
             <h3>${shoes.shoes_name}</h3>
             <p>${shoes.shoes_price}</p>
             <div class="shoes__color">
             <span class="btn-color" style="background-color:${shoes.shoes_color[0]}"></span>
             <span class="btn-color" style="background-color:${shoes.shoes_color[1]}"></span>
             <span class="btn-color" style="background-color:${shoes.shoes_color[2]}"></span>
             </div>
             <div class="btn__buy">
             <button>ADD TO BAG</button>
             </div>
             </div>
             `
        });
        showShoes.innerHTML = htmls.join('');
      },
     start: function(){
       this.render();
     },
}
app.start();
const orderContainer = document.querySelector('.order__container');
const btnBuys = document.querySelectorAll('.btn__buy');
const orderBox = document.querySelector('.order__box');
const btnClose = document.querySelectorAll('.btn-close');
function showOrder(){
  orderContainer.classList.add("js-open");
}
function closeOrder(){
  orderContainer.classList.remove("js-open");
}
// btnClose.addEventListener("click", closeOrder());
// orderBox.addEventListener("click", function(event){
//   event.stopPropagation();
// }
// );
btnBuys.forEach(function(button, index){
  button.addEventListener("click", function(event){
    var btnItem = event.target;
    var product = btnItem.parentElement.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("h3").innerText;
    var productPrice = product.querySelector("p").innerText;
  })
})

function addOrder(productImg,productName,productPrice){
  var orderDiv = document.createElement('div.order__box');
  console.log(orderDiv)
  var orderImage = productImg;
  var orderName = productName;
  var orderPrice = productPrice;
  var content = `
  <div class="order__box">
  <div class="order__box-header">
   <h3> ADD TO YOUR SHOPPING CART</h3>
   <button class="btn-close" onclick="closeOrder()"><ti class="ti-close"></ti></button>
  </div>
 <div class="order__img">
  <img src="`+orderImage+`" alt="">
 </div>
<div class="order__content">
  <div class="shoes__name">`+orderName+`</div>
  <div class="shoes__price">`+orderPrice+`</div>
  <div class="order__size">
               </div>
 <div class="order__confirm">
      <button class="btn-confirm">CONFIRM ORDER</button>
      <button class="btn-continue">CONTINUE SHOPPING</button>
  </div>
</div>
</div>
  `
  orderDiv.innerHTML = content;
  orderContainer.append(orderDiv);
}