document.addEventListener('DOMContentLoaded', function() {



// course logic
if(document.querySelector('.s_course__cards'))

   // click on list element
   $('.s_course__card').click( function(e){

      // create relation with block descr and view dataattribute
      let node = e.currentTarget,
          dataAtr = node.getAttribute('data-num');

      // find block equal by data-num
      let block = document.querySelector(`div[data-num="${dataAtr}"]`);
      $('.s_course__skills').fadeOut();
      $(block).fadeIn();

      // add class for animate
      $('.s_course__card').removeClass('s_course__card--active');
      $(this).addClass('s_course__card--active');
   })


   // activate rellax
   let rellax = new Rellax('.rellax', {
      center: true
   });
})