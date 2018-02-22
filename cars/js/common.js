// menu
if(document.querySelector("#burger")){
  var berger = document.querySelector("#burger");
  var menu = document.querySelector("#menu");

  burger.addEventListener("click", openMobMenu = () => {
    return menu.classList.toggle("open");
  });
}


// price catalog slider
if(document.querySelector('#price-slider')){
  $('#price-slider').ionRangeSlider({
    type: 'double',
    from: 1000,
    to: 5000,
    min: 0,
    max: 10000
  });

  //take values to inputs
  $('.irs-from').mouseout(function(){
    document.addEventListener("DOMContentLoaded", lal = () =>{
      console.log("1")
      let from = +$('.irs-from').html();
      $('#from-slide').val(from);


      let to = +$('.irs-to').html();
      $('#to-slide').val(to);
    });
    //todo следить за изменением from  to
    
  });  
}






//popup
if(document.getElementById('myModal')){
  var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("btn_popup");
var but = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

but.onclick = function() {
  modal.style.display = "none";
}
}

//popupProduct
if(document.getElementById('sendRequest')){
  var newWind = document.getElementById('sendRequest');
  var btnReq = document.getElementById("btn_req");
  var close = document.getElementById("close");

  btnReq.onclick = function() {
    newWind.style.display = "block";
  }


  close.onclick = function() {
    newWind.style.display = "none";
  }
}

//yputube api


if(document.querySelector(".sold_stat__content")){
  $(".sold_stat__content").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    adaptiveHeight: true,
    autoPlay: false,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    }
    ]
  });
}

if(document.querySelector(".feedbacks-slider")){
  $(".feedbacks-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    }
    ]
  });
}

if(document.querySelector(".slider-content-main")){
  $(".slider-content-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'dots-cla',
    responsive: [
    {
      breakpoint: 1283,
      settings: "unslick"
    }
    ]
  });
}

if(document.querySelector(".header_bg__slider")){
  $(".header_bg__slider").slick({
  // autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
  {
    breakpoint: 1023,
    settings:{
      dots: true,
      appendDots: ".header_bg__slider",
      arrows: true,
      appendArrows: ".header_bg__slider"
    }
  }]
});
}

// faq accordion
if(document.querySelector(".faq_content__carousel")){
  // js

  // accordion and images close
  let accordion = document.querySelectorAll(".faq_content__header");
  accordion.forEach( (elemAccord) => {
    elemAccord.addEventListener('click', () => {
      let nextNode = elemAccord.nextSibling;
      nextNode.classList.toggle('openAcc');
      if(elemAccord.querySelector('.faq_content__arrow').getAttribute('src') == 'img/faq-arrow-down.png'){
        elemAccord.querySelector('.faq_content__arrow').setAttribute('src', 'img/faq-close.png');
      } else {
        elemAccord.querySelector('.faq_content__arrow').setAttribute('src', 'img/faq-arrow-down.png');
      }
    });
  });
}


// let accordion = document.querySelectorAll(".faq_content__header");
  // accordion.forEach( (elemAccord) => {
  //   elemAccord.addEventListener("click", openItemAcc(elemAccord));
  // });

// todo дописать функцию открывающую итем аккордиона

// function openItemAcc(value){
//   let nextElem = value.nextSibling;
//   console.log(nextElem)
//   nextElem.classList.toggle('openAcc');
// }

