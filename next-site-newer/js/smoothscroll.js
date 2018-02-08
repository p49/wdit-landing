$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
// NEED TO FIX SO THAT GET INVOLVED HAS NO BLEED FROM PREVIOUS ELEMENT
});


// WE LINKED THIS TO JUMBOTRON SO THAT IT LANDED AT TOP OF PAGE 
$("a.navbar-brand a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

("#back-to-top a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});