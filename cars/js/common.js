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
function youtube(){
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
    videoId: 'pVuqMFgmny4',
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
youtube();



$(".sold_stat__content").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
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


$(".feedbacks-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
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



// $(".slider_bg-wrap").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: true,
//   adaptiveHeight: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   arrows: false,
//   dots: true,
//   responsive: [
//   {
//     breakpoint: 769,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//   }
//   ]
// });