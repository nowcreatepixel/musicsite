/* preloader */
$(document).ready(function(){
$(window).load(function(){
	$('#load').fadeOut('slow',function(){$(this).remove();});
});
});


/* VARIABLES */
var windowHeight = $(window).height();
var logoReveal = $('#shape');

$(document).ready(function () {
     TweenMax.to('#figure', 0.5, {delay:0, repeat:-1, yoyo:true, css:{opacity:0.3}});

   TweenMax.to(logoReveal, 1, {delay:2.2, attr:{points:"298.969,212.265 289.719,241.265 224.969,241.14 224.969,212.14"}});
});


$(document).ready(function () {

     $('#content-wrapper').css({height:windowHeight});

      $(window).resize(function() {
          windowHeight = $(window).height();
      $('#content-wrapper').css({height:windowHeight});
      });

   });
