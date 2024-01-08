// one line that does it all
// $(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});





// function getPics() {} //just for this demo
// const imgs = document.querySelectorAll('.gallery img');
// const fullPage = document.querySelector('#fullpage');

// imgs.forEach(img => {
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     fullPage.style.display = 'block';
//   });
// });



// infinite scroll



// data enlargeable

$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
  });



// masonry

var masonryGrid = new Masonry('#masonry-grid', {
  itemSelector: '.col-md-6', // Adjust this selector based on your column classes
  columnWidth: '.col-md-6',
  percentPosition: true
});


var masonryGrid = new Masonry('#masonry-grid', {
  itemSelector: '.col-12', // Adjust this selector based on your column classes
  columnWidth: '.col-12',
  percentPosition: true
});



// heading 

// $(window).scroll(function() {
//   const 
//     a = $(this).scrollTop(),
//     b = 800;
//   $("h1").css({
//     backgroundPosition: "center " + a / 2 + "px" 
//   });
//   $(".parallax").css({ 
//     top: a / 1.6 + "px", 
//     opacity: 1 - a / b 
//   });
// });
