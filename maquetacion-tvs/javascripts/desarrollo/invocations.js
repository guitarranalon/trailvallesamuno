svg4everybody();

$("#header").find('.row').mobileMenu("#main-nav");
$.menuAimCall();

$.scrollUp({scrollText:"Volver arriba"});

$("#content").find(".gallery").featherlightGallery({galleryFadeIn:300,openSpeed:300,type:"image"});