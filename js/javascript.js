
// MOUSEENTER AND MOUSELEAVE FOR LOVE NAVBAR

$('nav ul #subNavOnWeddings li a').mouseenter(function(){
    $('.subNavPortraits').stop(true).slideUp(350, function(){ 
        $('.subNavLifestyle').stop(true).slideUp(350, function(){ 
               $('.subNavWeddings').stop(true).slideDown(350, function(){
                });
        });
    });
});


// *****************END OF LOVE NAVBAR JQUERY*****************************


// MOUSEENTER AND MOUSELEAVE FOR PORTRAITS NAVBAR

$('nav ul #subNavOnPortraits li a').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavLifestyle').stop(true).slideUp(350, function(){ 
               $('.subNavPortraits').stop(true).slideDown(350, function(){
                });
        });
    });
});

// *****************END OF PORTRAITS NAVBAR JQUERY************************


// // // MOUSEENTER AND MOUSELEAVE FOR EDITORIAL NAVBAR

$('nav ul #subNavOnLifestyle li a').mouseenter(function(){
    $('.subNavWeddings').stop(true).slideUp(350, function(){ 
        $('.subNavPortraits').stop(true).slideUp(350, function(){ 
               $('.subNavLifestyle').stop(true).slideDown(350, function(){
                });
        });
    });
});


// *****************END OF EDITORIAL NAVBAR JQUERY************************


// MOUSEENTER AND MOUSELEAVE FOR CONTACTS NAVBAR

// $('nav ul').mouseleave(function(){
//     $('.subNavWeddings').stop(true).slideUp(350, function(){
//         $('.subNavPortraits').stop(true).slideUp(350, function(){
//             $('.subNavLifestyle').stop(true).slideUp(350, function(){
//             };
//         };
//     });
// });

// $('nav ul #subNavOff li a').mouseenter(function(){
//     // $('.subNavWeddings').stop(true).slideUp(350, function(){
//         // $('.subNavPortraits').stop(true).slideUp(350, function(){
//             // $('.subNavLifestyle').stop(true).slideUp(350, function(){
//             // };
//         // };
//     // });
// });

// // *****************END OF 'CONTACTS' NAVBAR JQUERY*********************




// // MOUSEENTER AND MOUSELEAVE FOR OTHER PARTS OF WEBPAGE

// $('.mainPicture img').MOUSEENTER(function(){   
//     $('.subNavWeddings').stop(true).slideUp(350, function(){
//         $('.subNavPortraits').stop(true).slideUp(350, function(){
//             $('.subNavLifestyle').stop(true).slideUp(350, function(){
//                 // $('.subNavCommercial').stop(true).slideUp(350, function(){
//                 });
//             });
//         });
//     });
// });

// // *****************END OF 'OTHER PARTS' NAVBAR JQUERY*********************



// // MOUSEENTER AND MOUSELEAVE FOR COMMERCIAL NAVBAR

// $('nav ul #subNavOnCommercial li a').mouseenter(function(){
//     $('.subNavLove').stop(true).slideUp(350, function(){ 
//         $('.subNavPortraits').stop(true).slideUp(350, function(){ 
//             $('.subNavEditorial').stop(true).slideUp(350, function(){ 
//                $('.subNavCommercial').stop(true).slideDown(350, function(){
//                 });
//            });
//         });
//     });
// });



// $('nav ul #subNavOff li a').mouseenter(function(){
//     $('.subNavEditorial').stop(true).slideUp(350, function(){

//     });
// });


// $('.subNavOnEditorial').mouseenter(function(){
//     $(this).find(".subNavOnEditorial").stop().slideToggle();
// });

// *****************END OF COMMERCIAL NAVBAR JQUERY************************







