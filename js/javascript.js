
// MOUSEENTER LOVE NAVBAR
$('nav ul li#subNavOnWeddings a').mouseenter(function(){
    $('.subNavPortraits').stop(true).slideUp(350, function(){ 
        $('.subNavLifestyle').stop(true).slideUp(350, function(){ 
               $('.subNavWeddings').stop(true).slideDown(350, function(){
                });
        });
    });
});

// MOUSEENTER PORTRAITS NAVBAR
$('nav ul li#subNavOnPortraits a').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavLifestyle').stop(true).slideUp(350, function(){ 
               $('.subNavPortraits').stop(true).slideDown(350, function(){
                });
        });
    });
});


// MOUSEENTER AND MOUSELEAVE FOR EDITORIAL NAVBAR
$('nav ul li#subNavOnLifestyle a').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
               $('.subNavLifestyle').stop(true).slideDown(350, function(){
                });
        });
    });
});


// MOUSEENTERs CONTACT OPTION ON NAV BAR. Slide all subnavs up.
$('nav ul li.subNavOff a').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
               $('.subNavLifestyle').stop(true).slideUp(350, function(){
                });
        });
    });
});


// MOUSEENTER LOGO
$('#logo').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
               $('.subNavLifestyle').stop(true).slideUp(350, function(){
                });
        });
    });
});

// MOUSEENTER LOGO slide all subnavs up
$('.mainPicture').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
               $('.subNavLifestyle').stop(true).slideUp(350, function(){
                });
        });
    });
});
