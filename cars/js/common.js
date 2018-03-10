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


  // todo
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

if(document.querySelector('#player')){
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    }

// product popup image resize
if(document.querySelector('.img-product-slider1')){
  $('.bg-shop_1').click(function(e){
    let img = $('.bg-shop_1').prev();
    let popImg = $('.popImg');
    let imgVal = img.attr('src');
    popImg.attr('src', `${imgVal}`);
    $('.popupImg').fadeIn();
    $('body').addClass('body-overflow');
  })

  $('.popupLayer, .close').click(function(e){
    $('body').removeClass('body-overflow');
    $('.popupImg').fadeOut();
  })
}




//popup
if(document.getElementById('myModal')){
  var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("btn_popup");
var but = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  $("#myModal").fadeIn();
  $('body').toggleClass('body-overflow');
}

but.onclick = function() {
  $('body').removeClass('body-overflow');
  $("#myModal").fadeOut();
}
}

// popup request
if(document.querySelector('#popupRequest')){
  $('.request').click( function(){
    $('#popupRequest').fadeIn();
    $('body').toggleClass('body-overflow');
  })

  $('.popup__close, .popup__layer').click( function(){
    $('body').removeClass('body-overflow');
    $('#popupRequest').fadeOut();
  })
    // 
  // $('.popup__close').$('#popupRequest').fadeOut();
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

// popup gallery catalog

// .contant_main__open-img open popup and change image on current
if(document.querySelector(".contant_main__open-img")){
  let openGallery = document.querySelectorAll('.contant_main__open-img');
  let popupGal = document.querySelector('#popupGallery');
  let img = popupGal.querySelector('img');
  openGallery.forEach( (elem) => {
    elem.addEventListener('click', () => {
      let imgGal = elem.previousSibling.getAttribute('src');
      img.setAttribute('src', imgGal);
      $('#popupGallery').fadeIn();
      $('body').toggleClass('body-overflow');
    });
  });
  $('.popup__layer').click( function(){
    $('body').removeClass('body-overflow');
    $('#popupGallery').fadeOut();
  });
}


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


// slider contant
if(document.querySelector(".contant_main__slider")){
  $(".contant_main__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'contant_main__slide-dots',
    responsive: [
    {
      breakpoint: 768,
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

// slider-car-catalog
if(document.querySelector(".contant_main__wraps-slider")){
  $('.contant_main__wraps-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    dotsClass: 'contant_main__slide-dots',
    responsive: [
    {
      breakpoint: 768,
      settings:{
        dots: false
      }
    }]
  });

}

if(document.querySelector('.img-product-slider1')){
  $('.img-product-slider1').slick({
    arrows: false,
    slideToShow: 1,
    infinite: true,
    slideToScroll: 1,
    autoplay: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    asNavFor: ".gallery-img-slider2"
  });
}

if(document.querySelector('.gallery-img-slider2')){
  $('.gallery-img-slider2').slick({
    arrows: false,
    slidesToShow: 6,
    infinite: true,
    centerPadding: "10px",
    slidesToScroll: 5,
    centerMode: false,
    autoplay: false,
    asNavFor: ".img-product-slider1",
    dots: true,
    appendDots: '.gallery-img-slider2'
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

if(document.querySelector(".contant_main__sup-title")){
  let accordion = document.querySelectorAll('.contant_main__sup-title'); 
  accordion.forEach( (elemAccord) => {
    elemAccord.addEventListener('click', () => {
      let nextNode = elemAccord.nextSibling;
      nextNode.classList.toggle('openAcc');
      elemAccord.classList.toggle('contant_main__sup-title-after')
    })
  })
}


// product radiobuttons

// type
if(document.querySelector('.contant_main__type')){
  let dom = document.querySelector('.contant_main__type')
  let input = dom.querySelectorAll('.contact_main__input');
  let ind = null;
  input.forEach((elem,index) => {
    let next = elem.nextSibling;
    next.addEventListener('click', () =>{
      // input[number].firstElementChild.classList.remove('block-class');
      if(typeof ind != "object"){ 
        input[ind].firstElementChild.classList.remove('block-class')
      }
      elem.firstElementChild.classList.toggle('block-class');
      ind = index;
    })
    // val.classList.remove('block-class');
  })
}

// brand
if(document.querySelector('.contant_main__brand')){
  let dom = document.querySelector('.contant_main__brand')
  let input = dom.querySelectorAll('.contact_main__input');
  let ind = null;
  input.forEach((elem,index) => {
    let next = elem.nextSibling;
    next.addEventListener('click', () =>{
      // input[number].firstElementChild.classList.remove('block-class');
      if(typeof ind != "object"){ 
        input[ind].firstElementChild.classList.remove('block-class')
      }
      elem.firstElementChild.classList.toggle('block-class');
      ind = index;
    })
    // val.classList.remove('block-class');
  })
}

// oil
if(document.querySelector('.contant_main__oil')){
  let dom = document.querySelector('.contant_main__oil')
  let input = dom.querySelectorAll('.contact_main__input');
  let ind = null;
  input.forEach((elem,index) => {
    let next = elem.nextSibling;
    next.addEventListener('click', () =>{
      // input[number].firstElementChild.classList.remove('block-class');
      if(typeof ind != "object"){ 
        input[ind].firstElementChild.classList.remove('block-class')
      }
      elem.firstElementChild.classList.toggle('block-class');
      ind = index;
    })
    // val.classList.remove('block-class');
  })
}

// kpp
if(document.querySelector('.contant_main__kpp')){
  let dom = document.querySelector('.contant_main__kpp')
  let input = dom.querySelectorAll('.contact_main__input');
  let ind = null;
  input.forEach((elem,index) => {
    let next = elem.nextSibling;
    next.addEventListener('click', () =>{
      // input[number].firstElementChild.classList.remove('block-class');
      if(typeof ind != "object"){ 
        input[ind].firstElementChild.classList.remove('block-class')
      }
      elem.firstElementChild.classList.toggle('block-class');
      ind = index;
    })
    // val.classList.remove('block-class');
  })
}

// privod
if(document.querySelector('.contant_main__privod')){
  let dom = document.querySelector('.contant_main__privod')
  let input = dom.querySelectorAll('.contact_main__input');
  let ind = null;
  input.forEach((elem,index) => {
    let next = elem.nextSibling;
    next.addEventListener('click', () =>{
      // input[number].firstElementChild.classList.remove('block-class');
      if(typeof ind != "object"){ 
        input[ind].firstElementChild.classList.remove('block-class')
      }
      elem.firstElementChild.classList.toggle('block-class');
      ind = index;
    })
    // val.classList.remove('block-class');
  })
}