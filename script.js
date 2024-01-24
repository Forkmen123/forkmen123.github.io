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
      
      // const opacityValue = 1 - (scrollPosition / 700);
      const opacityValue = 1 - (scrollPosition / 300);

      scrollTransformElement.style.opacity = opacityValue;
  });
});



// navbar text

document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-navbar-animation');

  window.addEventListener('scroll', function () {
      
      const scrollPosition = window.scrollY;

      // const translateXValue = (1.0135) ** scrollPosition + 'px'; 
      const translateYValue = -(1.0135 ** scrollPosition) + 'px'; 
      const opacityValue = 1 - (scrollPosition / 2000);
      
      scrollTransformElement.style.transform = `translateY(${translateYValue})`;
      scrollTransformElement.style.opacity = opacityValue;
  });
});



// Tommy Roy text

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-3');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;

//       const translateXValue = -(1.01 ** scrollPosition) + 'px'; 
//       const opacityValue = 1 - (scrollPosition / 1000);
      

//       scrollTransformElement.style.transform = `translateX(${translateXValue})`;
//       scrollTransformElement.style.opacity = opacityValue;
     

//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-9');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;

//       const translateXValue = -(1.01 ** scrollPosition) + 'px'; 
//       const opacityValue = 1 - (scrollPosition / 1000);
      

//       scrollTransformElement.style.transform = `translateX(${translateXValue})`;
//       scrollTransformElement.style.opacity = opacityValue;
     

//   });
// });


// Voir plus button

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-4');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;

//       const translateXValue = (1.01 ** scrollPosition) + 'px'; 
//       const opacityValue = 1 - (scrollPosition / 1000);
  
//       scrollTransformElement.style.transform = `translateX(${translateXValue})`;
//       scrollTransformElement.style.opacity = opacityValue;
//   });
// });






document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-1');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // const translateYValue = -(1.0045 ** scrollPosition) + 'px'; 
    const translateYValue = -(1.0090 ** scrollPosition) + 'px'; 

    scrollTransformElement.style.transform = `translateY(${translateYValue})`;
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-7');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;
   
//       const translateXValue = (1.007 ** scrollPosition) + 'px'; 
//       const opacityValue = 1 - (scrollPosition / 1000);
  
//       scrollTransformElement.style.transform = `translateX(${translateXValue})`;
//       scrollTransformElement.style.opacity = opacityValue;
//   });
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-5');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;
   
//       const translateYValue = (1.01 ** scrollPosition) + 'px'; 
  
//       scrollTransformElement.style.transform = `translateY(${translateYValue})`;
//   });
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-2');

//   window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;
   
//       const translateYValue = (1.008 ** scrollPosition) + 'px'; 
  
//       scrollTransformElement.style.transform = `translateY(${translateYValue})`;
//   });
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTransformElement = document.querySelector('.my-svg-item-6');
  
//   window.addEventListener('scroll', function () {
//     const scrollPosition = window.scrollY;
    
//     const translateYValue = (1.010 ** scrollPosition) + 'px'; 
    
//     scrollTransformElement.style.transform = `translateY(${translateYValue})`;
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const scrollTransformElement = document.querySelector('.my-svg-item-8');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
   
      const translateYValue = (1.012 ** scrollPosition) + 'px'; 
  
      scrollTransformElement.style.transform = `translateY(${translateYValue})`;
  });
});





// contact form 


 // Fonction pour enregistrer les données du formulaire dans le stockage local
 var formSaved = false; // Variable to track whether the form has been saved

 // Fonction pour enregistrer les données du formulaire dans le stockage local
 function saveFormData() {
   // Obtenez les valeurs du formulaire
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var message = document.getElementById('message').value;

   // Créez un objet pour stocker les données du formulaire
   var formData = {
     name: name,
     email: email,
     message: message,
     // Ajoutez d'autres propriétés au besoin
   };

   // Convertissez l'objet en une chaîne JSON
   var formDataJson = JSON.stringify(formData);

   // Enregistrez la chaîne JSON dans le stockage local
   localStorage.setItem('formData', formDataJson);

   formSaved = true; // Set the flag to indicate that the form has been saved
 }

 // Fonction pour vérifier si le formulaire a des modifications
 function checkFormChanges() {
   // Vérifiez si les données du formulaire ne sont pas vides et si le formulaire n'a pas été enregistré
   if (localStorage.getItem('formData') && !formSaved) {
     // Affichez un message de confirmation personnalisé
     return 'Les modifications que vous avez apportées ne seront peut-être pas enregistrées.';
   }
 }

 // Fonction pour soumettre le formulaire
 function submitForm(event) {
   // Sauvegardez les données du formulaire si nécessaire
   saveFormData();
   
   // Réinitialisez les données du formulaire
   localStorage.removeItem('formData');

   // Continuez avec la soumission normale du formulaire
   // Vous pouvez également rediriger l'utilisateur vers une autre page si nécessaire
 }

 // Fonction pour charger les données du formulaire depuis le stockage local
 function loadFormData() {
   // Obtenez la chaîne JSON depuis le stockage local
   var formDataJson = localStorage.getItem('formData');

   // S'il y a des données dans le stockage local, analysez-les et remplissez le formulaire
   if (formDataJson) {
     var formData = JSON.parse(formDataJson);

     document.getElementById('name').value = formData.name;
     document.getElementById('email').value = formData.email;
     document.getElementById('message').value = formData.message;
     // Définissez d'autres champs du formulaire au besoin
   }
 }

 // Appelez loadFormData lorsque la page se charge
 loadFormData();