// menu
if(document.querySelector("#burger")){
  var berger = document.querySelector("#burger");
  var menu = document.querySelector("#menu");

  burger.addEventListener("click", openMobMenu = () => {
    return menu.classList.toggle("open");
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
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'dots-cla',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
}

if(document.querySelector(".header_bg__wrap")){
  $(".header_bg__wrap").slick({
  // autoplay: true,
  autoplaySpeed: 4000,
  arrows: false
});
}