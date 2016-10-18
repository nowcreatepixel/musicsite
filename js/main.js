/* PRELOADER */
$(window).load(function(){
	$('#load').fadeOut('slow',function(){$(this).detach();});
});



/* VARIABLES */
var windowHeight = $(window).height();
var logoReveal = $('#shape');
var loader = $('#load');



/* LOGO & PRELOADER ANIMATIONS */
$(document).ready(function () {
   TweenMax.to('#figure', 0.5, {delay:0, repeat:-1, yoyo:true, css:{opacity:0.5}});
   TweenMax.to(logoReveal, 1, {delay:2.2, attr:{points:"298.969,212.265 289.719,241.265 224.969,241.14 224.969,212.14"}});
});



/* MATCHING WINDOW HEIGHT */
$(document).ready(function () {
     $('#content-wrapper').css({height:windowHeight});
      $(window).resize(function() {
          windowHeight = $(window).height();
      $('#content-wrapper').css({height:windowHeight});
      });
   });



/* ROTATING BACKGROUND IMAGE */
/*$(document).ready(function () {
function cycleBackgrounds() {

    var index = 0;
    $imageEls = $('.photo-holder'); // Get the images to be cycled.

    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        // Show the next image.
        $imageEls.eq(index).addClass('show');
        // Hide the previous image.
        $imageEls.eq(index - 1).removeClass('show');
        }, 6000);
    };
$(function () {cycleBackgrounds();});
 });*/


/* LYRICS */
$(document).ready(function () {
  function cycleLyrics() {

    var lyrics = ["Lets lose ourselves in a Universal Sky", "In my heart you will live forever", "All I see is a Beautiful Render", "There's a glory in a distant town" ];
    var titles = ["Universal Sky 2015", "Reunited 2014", "Beautiful Render 2012", "Warrior In The Night 2012" ];
    var index = 0;
    $lyricEls = $('.introLyric');
    $titleEls = $('.introTitle');

    setInterval(function () {
        $lyricEls.removeClass('introLyric');
        $lyricEls.addClass('lyricAnimate');
        $titleEls.removeClass('introTitle');
        $titleEls.addClass('titleAnimate');
        TweenMax.to('.lyricAnimate', 0.8, {css:{opacity:0, transform:'translateY(200px)'}});
        TweenMax.to('.titleAnimate', 0.8, {css:{opacity:0}});
        index = index + 1 < lyrics.length ? index + 1 : 0;

        var introTimer = setTimeout(function () {
        $('.lyricAnimate').text(lyrics[index]);
        $('.titleAnimate').text(titles[index]);
        TweenMax.to('.lyricAnimate', 0.5, {css:{opacity:1, transform:'translateY(0px)'}});
        TweenMax.to('.titleAnimate', 0.5, {css:{opacity:1}});
        }, 700);

    }, 6000);

  };
  $(function () {cycleLyrics();});

});



/* HOME BUTTON */
$(document).ready(function () {
    $('.feature-btn').on('click', function (event) {

        /* firefox issue with event needs investigated
        added it in as a parameter above and seems to have fixed it*/
      if (event.preventDefault) {
           event.preventDefault();
       } else {
           event.returnValue = false;
        }

        $('span.breakdefault').removeClass('break');
        $('span.breakdefault').addClass('hidebreak');
         $('.bgmask').removeClass('show');
        $('.bgmask').addClass('hide');
        TweenMax.to('.lead-title', 0.8, {css:{opacity:0}});
        $('.lead-content-holder h4').css({visibility:'hidden'});
        $('.lead-photo').css({left:'-100%'});
        $('.feature-btn').addClass('btnHide');
        $("#discover").addClass('show');
				$("#discoverLoad").addClass('show');



        setTimeout(function () {
        $("#discover").load("discover.html .discover-container", function(){
					$('#load-alt').fadeOut('slow',function(){$('#discoverLoad').detach();});
				});
			}, 2000);


       });

    });
