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



// $('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
//     var src = $(this).attr('src');
//     var modal;
  
//     function removeModal() {
//       modal.remove();
//       $('body').off('keyup.modal-close');
//     }
//     modal = $('<div>').css({
//       background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
//       backgroundSize: 'contain',
//       width: '100%',
//       height: '100%',
//       position: 'fixed',
//       zIndex: '10000',
//       top: '0',
//       left: '0',
//       cursor: 'zoom-out'
//     }).click(function() {
//       removeModal();
//     }).appendTo('body');
//     //handling ESC
//     $('body').on('keyup.modal-close', function(e) {
//       if (e.key === 'Escape') {
//         removeModal();
//       }
//     });
//   });


  $(document).on('click', 'img[data-enlargeable]', function() {
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

    // Handling ESC key to close the modal
    $('body').on('keyup.modal-close', function(e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });

    // Prevent multiple click events by unbinding the handler
    $(this).off('click').click(function() {
        removeModal();
    });
});



// masonry
$(document).ready(function() {
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
});






/////////////////////////////////////// heading 





// chevron heading opacity

document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-chevron-opacity-header');

  window.addEventListener('scroll', function () {

      const scrollPosition = window.scrollY;
      
      const opacityValue = 1 - (scrollPosition / 700);

      scrollTransformElement.style.opacity = opacityValue;
  });
});



// navbar text

document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-navbar-animation');

  window.addEventListener('scroll', function () {
      
      const scrollPosition = window.scrollY;

      const translateXValue = (1.008) ** scrollPosition + 'px'; 
      const opacityValue = 1 - (scrollPosition / 2000);
      
      scrollTransformElement.style.transform = `translateX(${translateXValue})`;
      scrollTransformElement.style.opacity = opacityValue;
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-2');

//   window.addEventListener('scroll', function () {
     
//       const scrollPosition = window.scrollY;

//         const opacityValue = 1 - (scrollPosition- 300 / 700) + 'px';

     
//         scrollTransformElement.style.transform = `translateX(${translateXValue})`;
//         scrollTransformElement.style.opacity = opacityValue;
    
//   });
// });



// Tommy Roy text

document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-3');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      const translateXValue = -(1.01 ** scrollPosition) + 'px'; 
      const opacityValue = 1 - (scrollPosition / 1000);
      

      scrollTransformElement.style.transform = `translateX(${translateXValue})`;
      scrollTransformElement.style.opacity = opacityValue;
     

  });
});


// Voir plus button

document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-4');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      const translateXValue = (1.01 ** scrollPosition) + 'px'; 
      const opacityValue = 1 - (scrollPosition / 1000);
     
  
      scrollTransformElement.style.transform = `translateX(${translateXValue})`;
      scrollTransformElement.style.opacity = opacityValue;
 

  });
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-1');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      const translateYValue = -(1.0045 ** scrollPosition) + 'px'; 
     

  
      scrollTransformElement.style.transform = `translateY(${translateYValue})`;
  

  });
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-7');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      const translateXValue = (1.007 ** scrollPosition) + 'px'; 
      const opacityValue = 1 - (scrollPosition / 1000);
     
  
      scrollTransformElement.style.transform = `translateX(${translateXValue})`;
      scrollTransformElement.style.opacity = opacityValue;
 

  });
});