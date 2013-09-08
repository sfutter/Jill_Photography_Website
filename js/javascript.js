// MOUSEENTER AND MOUSELEAVE FOR LOVE NAVBAR

$('nav ul #subNavOnLove li a').mouseenter(function(){
    $('.subNavPortraits').stop(true).slideUp(350, function(){ 
        $('.subNavEditorial').stop(true).slideUp(350, function(){ 
            $('.subNavCommercial').stop(true).slideUp(350, function(){ 
	           $('.subNavLove').stop(true).slideDown(350, function(){
                });
           });
        });
    });
});



$('nav ul #subNavOff li a').mouseenter(function(){
	$('.subNavLove').stop(true).slideUp(350, function(){

	});
});


$('.subNavOnLove').mouseenter(function(){
	$(this).find(".subNavOnLove").stop().slideToggle();
});

// *****************END OF LOVE NAVBAR JQUERY*****************************


// // MOUSEENTER AND MOUSELEAVE FOR PORTRAITS NAVBAR

$('nav ul #subNavOnPortraits li a').mouseenter(function(){
    $('.subNavLove').stop(true).slideUp(350, function(){ 
        $('.subNavEditorial').stop(true).slideUp(350, function(){ 
            $('.subNavCommercial').stop(true).slideUp(350, function(){ 
               $('.subNavPortraits').stop(true).slideDown(350, function(){
                });
           });
        });
    });
});



$('nav ul #subNavOff li a').mouseenter(function(){
    $('.subNavPortraits').stop(true).slideUp(350, function(){

    });
});


$('.subNavOnPortraits').mouseenter(function(){
    $(this).find(".subNavOnPortraits").stop().slideToggle();
});


// // *****************END OF PORTRAITS NAVBAR JQUERY************************


// // MOUSEENTER AND MOUSELEAVE FOR EDITORIAL NAVBAR

$('nav ul #subNavOnEditorial li a').mouseenter(function(){
    $('.subNavLove').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
            $('.subNavCommercial').stop(true).slideUp(350, function(){ 
               $('.subNavEditorial').stop(true).slideDown(350, function(){
                });
           });
        });
    });
});



$('nav ul #subNavOff li a').mouseenter(function(){
    $('.subNavEditorial').stop(true).slideUp(350, function(){

    });
});


$('.subNavOnEditorial').mouseenter(function(){
    $(this).find(".subNavOnEditorial").stop().slideToggle();
});


// // *****************END OF EDITORIAL NAVBAR JQUERY************************


// // MOUSEENTER AND MOUSELEAVE FOR COMMERCIAL NAVBAR

$('nav ul #subNavOnCommercial li a').mouseenter(function(){
    $('.subNavLove').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
            $('.subNavEditorial').stop(true).slideUp(350, function(){ 
               $('.subNavCommercial').stop(true).slideDown(350, function(){
                });
           });
        });
    });
});



$('nav ul #subNavOff li a').mouseenter(function(){
    $('.subNavEditorial').stop(true).slideUp(350, function(){

    });
});


$('.subNavOnEditorial').mouseenter(function(){
    $(this).find(".subNavOnEditorial").stop().slideToggle();
});

// *****************END OF COMMERCIAL NAVBAR JQUERY************************



// MOUSEENTER AND MOUSELEAVE FOR OTHER PARTS OF WEBPAGE

$('.mainPicture img').MOUSEENTER(function(){   
    $('.subNavLove').stop(true).slideUp(350, function(){
        $('.subNavPortraits').stop(true).slideUp(350, function(){
            $('.subNavEditorial').stop(true).slideUp(350, function(){
                $('.subNavCommercial').stop(true).slideUp(350, function(){
                });
            });
        });
    });
});

// *****************END OF 'OTHER PARTS' NAVBAR JQUERY*********************



