// Adding User Agent to HTML tag //
$(document).ready(function () {
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
});


// Youtube API //
// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



// setting the home url on load //
var stateObj = { state: "home" };
history.pushState(stateObj, "page 1", "#home");




/* PRELOAD BACKGROUND IMAGES */
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $('<img />').attr('src', arguments[i]);
  }
}
$.preloadImages('../img/discover-bg-1v2.png','../img/discover-bg-2v2.png','../img/discover-bg-3v2.png','../img/discover-bg-1v2mobile.png','../img/discover-bg-2v2mobile.png','../img/discover-bg-3v2mobile.png');


/* VARIABLES */
var windowHeight = $(window).height();
var windowWidth = $(window).width();
console.log(windowWidth); // testing //
var logoReveal = $('#shape');
var loader = $('#load');



/* LOGO & PRELOADER ANIMATIONS */
$(document).ready(function () {
   TweenMax.to('#figure', 0.5, {delay:0, repeat:-1, yoyo:true, css:{opacity:0.5}});
});



/* MATCHING WINDOW HEIGHT */
$(document).ready(function () {
     $('#content-wrapper').css({height:windowHeight});
    console.log(windowHeight * 0.35);
      $(window).resize(function() {
          windowHeight = $(window).height();
      $('#content-wrapper').css({height:windowHeight});
      });
   });

















/* ONCE LOADED */
$(window).load(function(){

    setTimeout(function () {
	$('#load').fadeOut('slow',function(){$(this).detach();});
    }, 1000);

    setTimeout(function () {
    $('#content-wrapper').removeClass('hideUntilLoaded');
    $('#top-nav-logo').removeClass('hideUntilLoaded');
    TweenMax.to(logoReveal, 1, {delay:2.2, attr:{points:"298.969,212.265 289.719,241.265 224.969,241.14 224.969,212.14"}});

    function cycleLyrics() {

    var lyrics = ["Lose ourselves in a Universal Sky", "In my heart you will live forever", "All I see is a Beautiful Render", "There's a glory in a distant town" ];
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

    }, 2000);

});






/* SECTIONS FUNCTION */
$(document).ready(function () {

    // back button function //
     window.onpopstate = function(event) {
    $('.back').removeClass('back');
             $("#discover").removeClass('show');
             $("#discover").addClass('hide');
             $("#aboutwrapper").removeClass('show');
             $("#aboutwrapper").addClass('hide');
             $('span.breakdefault').removeClass('hidebreak');
             $('span.breakdefault').addClass('breakNoDelay');
             /*$('.bgmask').removeClass('hide');
             $('.bgmask').addClass('show');*/
              TweenMax.to('.lead-title', 0.8, {css:{opacity:1}});
              $('.lead-content-holder').removeClass('hide');
              $('.lead-content-holder h4').css({visibility:'visible'});
              $('.lead-photo').css({left:'0'});
              $('.lead-photo-alt').css({opacity:1});
              $('.lead-art').removeClass('hide');
              $('.feature-btn').removeClass('btnHide');
              $("#discoverLoad").removeClass('show');
              $("#load-alt").css({display:'block'});
              // revert to default logo and nav icon //
              $('.mainlogo').removeClass('hide');
              $('#navtoggle').removeClass('activeAlt');
              var resetNav = setTimeout(function () {
                  console.log('now');
              navBehaviour(normal);
              }, 400);
              // remove active styling on video page //
              $('.music-container').removeClass('active');
              $('.slide-container').removeClass('active');
              $('.music-container .ui.embed').embed('reset');
              $('.soundcloud-container .ui.embed').embed('reset');

}; // END back button //


    // Navigation variables //
    var normal = [];
    var alternative = [];
    // Navigation //
      function navBehaviour (status) {

        if (status == normal) {

        var navigationMenu = function () {
        $('#navtoggle').toggleClass('active');
        $('#navtoggle').removeClass('introAnimation');
        $('#nav-menu-holder').toggleClass('show');
        $('.mainlogo').toggleClass('active');
        };

        $('#navtoggle').off('click');
            setTimeout(function () {
               $('#navtoggle').on('click', navigationMenu);
              }, 1000);

        } else if (status == alternative) {

        var navigationMenu = function () {
        $('#navtoggle').removeClass('activeAlt');
        $('.music-container').removeClass('active');
        $('.slide-container').removeClass('active');
        };

        $('#navtoggle').off('click');
              setTimeout(function () {

              $('#navtoggle').on('click', function () {
              $('.mainlogo').removeClass('hide');
              $('#navtoggle').removeClass('activeAlt');
              $('#navtoggle').removeClass('dark');
              $('.music-container').removeClass('active');
              $('.slide-container').removeClass('active');
              $('.music-container .ui.embed').embed('reset');
              $('.listen-container').removeClass('active');
              $('.year-select-container').removeClass('active');
              $('.year-link-holder>a').removeClass('active');
              $('.year-select-container .label>h4').removeClass('active');
              $('.bg-img>img').removeClass('active');
              $('.active-red-line').css({opacity:1});
              $('.year-title.animated').removeClass('active');
              $('.year-info.animated').removeClass('active');
              $('.soundcloud-container.animated').removeClass('active');
              $('.soundcloud-container .ui.embed').embed('reset');
              $('.alt-year-select-container.animated').removeClass('active');
              $('.playlist-strip').css({left:'0'});
              $('.gallery-container').removeClass('active');
              $('.gallery-container .bg-img > img').removeClass('fade');
              setTimeout(function () {
                var galleryIndex = 0;
                $('.gallery-holder .slick-next').removeClass('disable');
              $('.first img').css({transform:'translateX(100%)'});
              $('#gallery-indicator-holder').removeClass('active');
              $('.gallery-holder').slick('slickGoTo', 0); }, 600);



              var innerPlaylistLink = $('.alt-year-select-container.animated .year-nav .year-link-holder>a');
              $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $(innerPlaylistLink[0]).offset().left});


              var resetNav = setTimeout(function () {
              navBehaviour(normal);
              }, 400);

             var updateColWidths = setTimeout(function () {
             windowHeight = $(window).height();
			 windowWidth = $(window).width();
             $('.col').css({height:windowHeight});
             var colItem = document.getElementsByClassName('col');
             var colNumber = $('.col').length;
             var colWidth = $(colItem)[0].getBoundingClientRect().width;
             var totalWidth = colWidth * colNumber;
			 var indicatorSpacerAmount = colNumber - 1;
             $('.slide-holder').css({width:totalWidth});
             }, 1400);

            });

            console.log('x button now clickable');

            }, 1000);

        }



    }
    navBehaviour(normal);
    // END Navigation //




    // START Discover Section //
    function discover () {


        stateObj = { state: "discover" };
        history.pushState(stateObj, "page 2", "#discover");

        /* firefox issue with event needs investigated
        added it in as a parameter above and seems to have fixed it*/
      /*if (event.preventDefault) {
           event.preventDefault();
       } else {
           event.returnValue = false;
        }*/
        windowWidth = $(window).width();
        $('span.breakdefault').removeClass('break');
        $('span.breakdefault').removeClass('breakNoDelay');
        $('span.breakdefault').addClass('hidebreak');
         /*$('.bgmask').removeClass('show');
        $('.bgmask').addClass('hide');*/
        TweenMax.to('.lead-title', 0.8, {css:{opacity:0}});
        $('.lead-content-holder').removeClass('animateIntro');
        $('.lead-content-holder').addClass('hide');
        $('.lead-content-holder h4').css({visibility:'hidden'});
        $('.lead-photo').css({left:'-100%'});
        $('.lead-photo-alt').css({opacity:0});
        $('.lead-art').removeClass('animateIntro');
        $('.lead-art').addClass('hide');
        $('.feature-btn').addClass('btnHide');
        $("#discover").removeClass('hide');
        /*$("#discover").addClass('show');*/
		$("#discoverLoad").addClass('show');
        $(".mainlogo").addClass('back');

        setTimeout(function () {
        $("#discover").load("discovertwo.html .discover-container", function(){

            // first load col images before doing rest of function //
          $('.col-img img').load(function () {


            $('#load-alt').fadeOut('slow',function(){$('#discoverLoad');});
            $("#discover").addClass('show');
            $('.feature-btn').removeClass('btnHide');
            $('.col').css({height:windowHeight});
            var colItem = document.getElementsByClassName('col');
            var colNumber = $('.col').length;
            var colWidth = $(colItem)[0].getBoundingClientRect().width;
            var totalWidth = colWidth * colNumber;
            console.log('the width of a col is ' + colWidth); // testing //
            console.log('the total width of all cols is ' + totalWidth); // testing //
            console.log('the width of the screen is ' + windowWidth); // testing //



            /* Slide Indicator */
			var indicatorHolder = $('.indicator-holder');
			var indicatorSpacerAmount = colNumber - 1;
            /* uncomment if using manual spacer divs direct in mark up
			var indicatorWidth = (windowWidth - indicatorSpacerAmount) / colNumber;*/
            /* spacers as borders on the elements in css */
			var indicatorWidth = windowWidth / colNumber;
            var currentIndex = 0;
            var moveValue = 0;
            var indicatorArray = [];


            $('.slide-holder').css({width:totalWidth});
			$('.indicator').css({width:indicatorWidth});

            function move(newIndex) {

                if (newIndex > currentIndex) {
                var moveCalc = newIndex + '00';
                var arrowAnimate = '-' + newIndex + '00%';
                $('.slide-holder').css({left: arrowAnimate});
                currentIndex = newIndex;
                moveValue = moveValue - moveCalc;
                console.log(newIndex);
                console.log(moveValue);
                } else if (newIndex < currentIndex) {
                    var moveCalc = newIndex + '00';
                var arrowAnimate = '-' + newIndex + '00%';
                $('.slide-holder').css({left: arrowAnimate});
                currentIndex = newIndex;
                moveValue = moveValue - moveCalc;
                console.log(newIndex);
                console.log(moveValue);
                    console.log('fuck');
                } else if (newIndex === currentIndex) {
                    currentIndex = newIndex;
                console.log(newIndex);
                    return;
                }
                }


             function arrowNav(newIndex, value) {
                var arrowAnimate = value + '%';
                $('.slide-holder').css({left: arrowAnimate});
                currentIndex = newIndex;
                moveValue = value;
                }



            $('.right').on('click', function (e) {

                e.preventDefault();

                  if (currentIndex < 1) {
                   arrowNav(currentIndex + 1, moveValue - 100);
                    $('.left').removeClass('unactive');
                    $('.left').addClass('active');
                    indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex - 1].removeClass('active');
                      console.log(moveValue);
                } else if (currentIndex >= 1 && currentIndex < colNumber - 2) {
                    arrowNav(currentIndex + 1, moveValue - 100);
                    indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex - 1].removeClass('active');
                } else if (currentIndex == colNumber - 2) {
                    arrowNav(currentIndex + 1, moveValue - 100);
                    $(this).removeClass('active');
                    $(this).addClass('unactive');
                    indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex - 1].removeClass('active');
                } else if (currentIndex == colNumber - 1) {
                    return false;
                }

            });



            $('.left').on('click', function (e) {
                e.preventDefault();

                 if (currentIndex == colNumber - 1) {
                   arrowNav(currentIndex - 1, moveValue + 100);
                     $('.right').removeClass('unactive');
                    $('.right').addClass('active');
                     indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex + 1].removeClass('active');
                } else if (currentIndex < colNumber - 1 && currentIndex > 1) {
                    arrowNav(currentIndex - 1, moveValue + 100);
                     indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex + 1].removeClass('active');
                } else if (currentIndex == 1) {
                    arrowNav(currentIndex - 1, moveValue + 100);
                    $(this).removeClass('active');
                    $(this).addClass('unactive');
                    console.log('hi');
                     indicatorArray[currentIndex].addClass('active');
                    indicatorArray[currentIndex + 1].removeClass('active');
                } else if (currentIndex == 0) {
                    return;
                }
            });


            $.each(colItem, function(index) {
					    // Create a button element for the button
					    var $indicator = $('<div class="indicator"></div>');
							var indicatorWidth = (windowWidth - indicatorSpacerAmount) / colNumber;


					    if (index === currentIndex) {    // If index is the current item
					      $indicator.addClass('active');    // Add the active class
					    }
					    $indicator.on('click', function() { // Create event handler for the button
					      move(index);                   // It calls the move() function
					    }).appendTo(indicatorHolder);   // Add to the buttons holder
					    indicatorArray.push($indicator);     // Add it to the button array

							$('.indicator').css({width:indicatorWidth});
					  });



            $('.back').on('click', function (e) {

                stateObj = { state: "home" };
                history.pushState(stateObj, "page 1", "#home");

                /*history.pushState({state:home}, "page 1", "home.html");*/
                /*$(window).bind('popstate', function() {
                   history.pushState({state:home}, "page 1", "home.html");
                });*/

             /*if (event.preventDefault) {
              event.preventDefault();
              } else {
              event.returnValue = false;
              }*/

                e.preventDefault();

             $(this).removeClass('back');
             $("#discover").removeClass('show');
             $("#discover").addClass('hide');
             $('span.breakdefault').removeClass('hidebreak');
             $('span.breakdefault').addClass('breakNoDelay');
             /*$('.bgmask').removeClass('hide');
             $('.bgmask').addClass('show');*/
                  TweenMax.to('.lead-title', 0.8, {css:{opacity:1}});
                $('.lead-content-holder').removeClass('hide');
                 $('.lead-content-holder h4').css({visibility:'visible'});
                 $('.lead-photo').css({left:'0'});
                $('.lead-photo-alt').css({opacity:1});
                $('.lead-art').removeClass('hide');
                 $('.feature-btn').removeClass('btnHide');
                 $("#discoverLoad").removeClass('show');
                 $("#load-alt").css({display:'block'});

            });

            $(window).resize(function() {
            windowHeight = $(window).height();
			windowWidth = $(window).width();
            $('.col').css({height:windowHeight});
            var colItem = document.getElementsByClassName('col');
            var colNumber = $('.col').length;
            var colWidth = $(colItem)[0].getBoundingClientRect().width;
            var totalWidth = colWidth * colNumber;
			var indicatorSpacerAmount = colNumber - 1;

            /* uncomment if using manual spacer divs direct in mark up
			var indicatorWidth = (windowWidth - indicatorSpacerAmount) / colNumber;*/

            /* spacers as borders on the elements in css */
            var indicatorWidth = windowWidth / colNumber;

            $('.slide-holder').css({width:totalWidth});
			$('.indicator').css({width:indicatorWidth});

            if ($(window).width() > 1040 || $(window).height() < 400) {
             $('.slide-holder').css({left:'0px'});
             currentIndex = 0;
             moveValue = 0;
            }
            });




            // VIDEO SECTION /////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////

             // serve up and populate the slider so that its ready for musicSection //
             function videoSlider () {
              $('.music-container .ui.embed').embed();
             }
             videoSlider();

            // music section //
            function musicSection () {

                navBehaviour(alternative);

                stateObj = { state: "watch" };
        history.pushState(stateObj, "page 3", "#watch");

             $('.mainlogo').removeClass('introAnimate');
             $('.mainlogo').addClass('hide');
             $('#navtoggle').addClass('activeAlt');
             $('#navtoggle').removeClass('introAnimation');
             $('.slide-container.scale').addClass('active');
             $('.music-container').addClass('active');
                console.log(totalWidth);

                // New responsive method of applying slick slider //
              var vidSlider = $('.video-holder');
                var slickSettings = {
                  centerMode: true,
              centerPadding: '20%',
              slidesToShow: 1,
                 dots:true
                }
                $(vidSlider).not('.slick-initialized').slick(slickSettings);

                if ($(window).width() < 880) {
               vidSlider.slick('unslick');
                vidSlider.addClass('mobile');
               }


              // Old method of applying slick slider //
            /* $('.video-holder').slick({
               centerMode: true,
              centerPadding: '20%',
              slidesToShow: 1,
                 dots:true
               responsive: [ {
                breakpoint: 768,
                 settings: {
                  arrows: false,
                 centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                   arrows: false,
                centerMode: true,
                 centerPadding: '40px',
                 slidesToShow: 1
                 }
                 }
                ]
             }); */

                $('.slick-arrow, ul.slick-dots').on('click', function (e) {
                 e.preventDefault();
                 $('.music-container .ui.embed').embed('reset');

                });


            $(window).resize(function() {
             windowHeight = $(window).height();
			windowWidth = $(window).width();
            $('.col').css({height:windowHeight});
            var colItem = document.getElementsByClassName('col');
            var colNumber = $('.col').length;
            var colWidth = $(colItem)[0].getBoundingClientRect().width;
            var totalWidth = colWidth * colNumber;
			var indicatorSpacerAmount = colNumber - 1;
            $('.slide-holder').css({width:totalWidth});

            // unslicking and slicking the slider //
            if ($(window).width() < 880) {

                 $('.music-container .ui.embed').embed('reset');

                if (vidSlider.hasClass('slick-initialized')) {
                     vidSlider.slick('unslick');
                    vidSlider.addClass('mobile');
                   }
                     return
                 }

                if (!vidSlider.hasClass('slick-initialized')) {
                    vidSlider.removeClass('mobile');
                     return vidSlider.slick(slickSettings);
                  }

            });


            } // End of music section //

             // END OF VIDEO SECTION //////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////





            // START OF SONGS SECTION /////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////

            function songSection (lightbg) {

            navBehaviour(alternative);
            stateObj = { state: "listen" };
            history.pushState(stateObj, "page 4", "#listen");
            var whiteMask = $('.listen-container .mask');
            var bgimg = $('.listen-container .bg-img');
            var playlistItem = document.getElementsByClassName('playlist-holder');
            var playlistNumber = $('.playlist-holder').length;
            var playlistWidth = $(playlistItem)[0].getBoundingClientRect().width;
            var totalPlaylistWidth = playlistWidth * playlistNumber;
            var introPlaylistLink = $('.year-select-container .year-nav .year-link-holder>a');
            var innerPlaylistLink = $('.alt-year-select-container.animated .year-nav .year-link-holder>a');
            var currentPlaylistIndex = 0;
            var movePlaylistValue = 0;

            // if background is going to be light this makes the nav toggle dark //
            if (lightbg == true) {$('#navtoggle').addClass('dark');};

            // remove white mask on non desktop //
             if (windowWidth < 1040) {
             $(whiteMask).remove();
            };

            // remove bg image on mobile //
            if ($(window).width() < 1040) {
                 $(bgimg).remove();
             }

            $('.mainlogo').removeClass('introAnimate');
            $('.mainlogo').addClass('hide');
            $('#navtoggle').addClass('activeAlt');
            $('#navtoggle').removeClass('introAnimation');
            $('.slide-container.scale').addClass('active');
            $('.listen-container').addClass('active');
            $('.playlist-strip').css({width:totalPlaylistWidth});
            $('.soundcloud-container .ui.embed').embed({
                    icon:'video play'
                });


            if (windowWidth < 1040) {
             // making the first year active if going to playlist direct //
             $(innerPlaylistLink[0]).addClass('active');
            };


            function yearsOnMobile () {
                if (windowWidth < 630) {
            // Changing year links to 2 digits for mobile //
                var mobileDateA = $(innerPlaylistLink[0]).text('01 - 06');
                var mobileDateB = $(innerPlaylistLink[1]).text('06 - 11');
                var mobileDateC = $(innerPlaylistLink[2]).text('11 - 16');
                } else {
                var mobileDateA = $(innerPlaylistLink[0]).text('2001 - 2006');
                var mobileDateB = $(innerPlaylistLink[1]).text('2006 - 2011');
                var mobileDateC = $(innerPlaylistLink[2]).text('2011 - 2016');
                };
            }
             yearsOnMobile();



          // REDLINE ON INTRO PLAYLIST NAV //
                // redline works on both intro playlist nav and inner playlist nav //
                var $redHoverLineIntro = $('.year-select-container .year-nav .year-red-line .active-red-line');
               $('.year-select-container .year-nav .year-link-holder>a').on('mouseover', function(){
                $redHoverLineIntro.css({left: $(this).offset().left });
                   $(innerPlaylistLink[0]).removeClass('active');
                  });

                var $redHoverLineInside = $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line');
               $('.alt-year-select-container.animated .year-nav .year-link-holder>a').on('mouseover', function(){
                $redHoverLineInside.css({left: $(this).offset().left });
                  });

                // this sets position of redline to middle on hover off - refers only to intro playlist nav//
              $('.year-select-container .year-nav .year-link-holder').on('mouseout', function(){
               $('.year-select-container .year-nav .year-red-line .active-red-line').css({left: '37.5%'});
                });

                // this sets position of redline to middle on hover off - refers only to inner playlist nav//
              $('.alt-year-select-container.animated .year-nav .year-link-holder').on('mouseout', function(){
               $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active').offset().left});
                });

          // END OF REDLINE ON INTRO PLAYLIST NAV //



           ///////////////////////////////////////////////////////////////////////////////////////////
          // ON CLICK ON INTRO PLAYLIST NAV //
                $('.year-select-container .year-nav .year-link-holder>a').on('click', function(e){

                e.preventDefault();
                $('.year-select-container').addClass('active');
                $('.year-select-container .year-nav .year-link-holder>a').addClass('active');
                $('.year-select-container .label>h4').addClass('active');
                $('.bg-img>img').addClass('active');
                $('.year-select-container .year-nav .year-red-line .active-red-line').css({opacity:0});
                $('.year-title.animated').addClass('active');
                $('.year-info.animated').addClass('active');
                $('.soundcloud-container.animated').addClass('active');
                $('.alt-year-select-container.animated').addClass('active');


               // REDLINE ON INNER PLAYLIST NAV //
                //positioning red line on inner playlist nav when hover off  //
               setTimeout(function () {
               var $redHoverLineAlt = $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active');
               $('.alt-year-select-container.animated .year-nav .year-link-holder').on('mouseout', function(){
               $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $redHoverLineAlt.offset().left});
               });

               console.log('the left position of active link is ' + $redHoverLineAlt.offset().left);

               }, 1000);
               // END OF REDLINE ON INNER PLAYLIST NAV //



                // =====================================================================================
                // show relevant content depending on what button was clicked using class recognition //
                    if ($(this).hasClass('2001')) {
                        currentPlaylistIndex = 0;
                        movePlaylistValue = 0;
                        $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'7%' });
                        $('.alt-year-select-container.animated .year-nav .year-link-holder>a.2001').addClass('active');
                        console.log(movePlaylistValue);
                    } else if ($(this).hasClass('2006')) {
                        currentPlaylistIndex = 1;
                        movePlaylistValue = movePlaylistValue - 100;
                        $('.playlist-strip').css({left:'-100%'});
                        $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'37.5%' });
                        $('.alt-year-select-container.animated .year-nav .year-link-holder>a.2006').addClass('active');
                    }  else if ($(this).hasClass('2011')) {
                        currentPlaylistIndex = 2;
                        movePlaylistValue = movePlaylistValue - 200;
                       $('.playlist-strip').css({left:'-200%'});
                        $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'68%' });
                        $('.alt-year-select-container.animated .year-nav .year-link-holder>a.2011').addClass('active');
                        console.log(currentPlaylistIndex);
                    }
                // =================================================================================

                 insidePlaylistNav(currentPlaylistIndex, movePlaylistValue);

                });
        // END OF ON CLICK ON INTRO PLAYLIST NAV //
        ///////////////////////////////////////////////////////////////////////////////////////////

               function insidePlaylistNav (currentPlaylistIndex, movePlaylistValue) {


               function playlistNav(newPlaylistIndex, playlistMoveValue) {
                var playlistAnimate = playlistMoveValue + '%';
                $('.playlist-strip').css({left: playlistAnimate});
                currentPlaylistIndex = newPlaylistIndex;
                movePlaylistValue = playlistMoveValue;
                var redlineHoverNoDelay = setTimeout(function () {
               var $redHoverLineAlt = $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active');
               $('.alt-year-select-container.animated .year-nav .year-link-holder').on('mouseout', function(){
               $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $redHoverLineAlt.offset().left});
               });
               }, 0);
                }


              var playlistmenuOne = $(innerPlaylistLink[0]).on('click', function (e) {
                e.preventDefault();
                     $(this).addClass('active')
                    $(innerPlaylistLink[1]).removeClass('active');
                     $(innerPlaylistLink[2]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                   console.log('this is first 2001 one');
                   return false;
                } else if (currentPlaylistIndex == 1) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 1, movePlaylistValue + 100);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'7%' });
                    console.log('this is second 2001 one');
                } else if (currentPlaylistIndex == 2) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 2, movePlaylistValue + 200);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'7%' });
                    console.log('this is third 2001 one');
                }
                });


                var playlistmenuTwo = $(innerPlaylistLink[1]).on('click', function (e) {
                e.preventDefault();
                    $(this).addClass('active')
                    $(innerPlaylistLink[0]).removeClass('active');
                     $(innerPlaylistLink[2]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                      $('.soundcloud-container .ui.embed').embed('reset');
                      playlistNav(currentPlaylistIndex + 1, movePlaylistValue - 100);
                      $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'37.5%' });
                   console.log('this is first 2006 one');
                } else if (currentPlaylistIndex == 1) {
                    console.log('this is second 2006 one');
                     return false;
                } else if (currentPlaylistIndex == 2) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 1, movePlaylistValue + 100);
                     $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'37.5%' });
                    console.log('this is third 2006 one');
                }
                });


                 var playlistmenuThree = $(innerPlaylistLink[2]).on('click', function (e) {
                e.preventDefault();
                      $(this).addClass('active')
                    $(innerPlaylistLink[0]).removeClass('active');
                     $(innerPlaylistLink[1]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                      $('.soundcloud-container .ui.embed').embed('reset');
                      playlistNav(currentPlaylistIndex + 2, movePlaylistValue - 200);
                       $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'68%' });
                   console.log('this is first 2011 one');
                } else if (currentPlaylistIndex == 1) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                     playlistNav(currentPlaylistIndex + 1, movePlaylistValue - 100);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'68%' });
                    console.log('this is second 2011 one');
                } else if (currentPlaylistIndex == 2) {
                    console.log('this is third 2011 one');
                     return false;
                }
                });

               }
                insidePlaylistNav(0, 0);






            // BROSWER RESIZE ////////////////////////////////////////////////////////////////////////

            $(window).resize(function() {
            windowHeight = $(window).height();
			windowWidth = $(window).width();
            var playlistItem = document.getElementsByClassName('playlist-holder');
            var playlistNumber = $('.playlist-holder').length;
            var playlistWidth = $(playlistItem)[0].getBoundingClientRect().width;
            var totalPlaylistWidth = playlistWidth * playlistNumber;
            var $activePlaylistLink = $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active');
            var defaultPlaylistLink = $('.alt-year-select-container.animated .year-nav .year-link-holder>a');
            var currentPlaylistIndex = 0;
            var movePlaylistValue = 0;

            $('.playlist-strip').css({width:totalPlaylistWidth});



                console.log('wtf');


             if (windowWidth < 1040) {
                 var currentPlaylistIndex = 0;
                 var movePlaylistValue = 0;

             // making the first year active if going to playlist direct //
                 $(innerPlaylistLink[1]).removeClass('active');
                 $(innerPlaylistLink[2]).removeClass('active');
                 $(innerPlaylistLink[0]).addClass('active');
                 $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $activePlaylistLink.offset().left});

                  // this sets position of redline on hover off - refers only to inner playlist nav//
                $('.alt-year-select-container.animated .year-nav .year-link-holder').on('mouseout', function(){
                $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active').offset().left});
                });

                 // returns the playlist slide to position 0 //
                 $('.playlist-strip').css({left:'0'});

                 // reset soundcloud player //
                 $('.soundcloud-container .ui.embed').embed('reset');

                 // reset playlist nav //
                 insidePlaylistNav(0, 0);

                 // changing years to 2 digits on mobile //
                 yearsOnMobile();

            };

              // if no active class is present, add it to the first link //
            if (!$('.alt-year-select-container.animated .year-nav .year-link-holder>a').hasClass('active')) {

                $(defaultPlaylistLink[0]).addClass('active');
                $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $(defaultPlaylistLink[0]).offset().left});
                console.log('wtf');

                };

            // remove active class from first link if accessing from intro year nav //
            if ($('.year-select-container').css('display') == 'block') {
                $(defaultPlaylistLink[0]).removeClass('active');
            };

            // update position of red line to active link item //
                $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $activePlaylistLink.offset().left});










          /*  function playlistNav(newPlaylistIndex, playlistMoveValue) {
                var playlistAnimate = playlistMoveValue + '%';
                $('.playlist-strip').css({left: playlistAnimate});
                currentPlaylistIndex = newPlaylistIndex;
                movePlaylistValue = playlistMoveValue;

                var redlineHover = setTimeout(function () {
               var $redHoverLineAlt = $('.alt-year-select-container.animated .year-nav .year-link-holder>a.active');
               $('.alt-year-select-container.animated .year-nav .year-link-holder').on('mouseout', function(){
               $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left: $redHoverLineAlt.offset().left});
               });
               }, 0);

                }


              var playlistmenuOne = $(innerPlaylistLink[0]).on('click', function (e) {
                e.preventDefault();
                     $(this).addClass('active')
                    $(innerPlaylistLink[1]).removeClass('active');
                     $(innerPlaylistLink[2]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                   return false;
                } else if (currentPlaylistIndex == 1) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 1, movePlaylistValue + 100);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'7%' });
                } else if (currentPlaylistIndex == 2) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 2, movePlaylistValue + 200);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'7%' });
                }
                });


                var playlistmenuTwo = $(innerPlaylistLink[1]).on('click', function (e) {
                e.preventDefault();
                    $(this).addClass('active')
                    $(innerPlaylistLink[0]).removeClass('active');
                     $(innerPlaylistLink[2]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                      $('.soundcloud-container .ui.embed').embed('reset');
                      playlistNav(currentPlaylistIndex + 1, movePlaylistValue - 100);
                      $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'37.5%' });
                } else if (currentPlaylistIndex == 1) {
                     return false;
                } else if (currentPlaylistIndex == 2) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                    playlistNav(currentPlaylistIndex - 1, movePlaylistValue + 100);
                     $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'37.5%' });
                }
                });


                 var playlistmenuThree = $(innerPlaylistLink[2]).on('click', function (e) {
                e.preventDefault();
                      $(this).addClass('active')
                    $(innerPlaylistLink[0]).removeClass('active');
                     $(innerPlaylistLink[1]).removeClass('active');
                  if (currentPlaylistIndex == 0) {
                      $('.soundcloud-container .ui.embed').embed('reset');
                      playlistNav(currentPlaylistIndex + 2, movePlaylistValue - 200);
                       $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'68%' });
                } else if (currentPlaylistIndex == 1) {
                    $('.soundcloud-container .ui.embed').embed('reset');
                     playlistNav(currentPlaylistIndex + 1, movePlaylistValue - 100);
                    $('.alt-year-select-container.animated .year-nav .year-red-line .active-red-line').css({left:'68%' });
                } else if (currentPlaylistIndex == 2) {
                     return false;
                }
                });*/

            });
        // END OF RESIZE //
            //////////////////////////////////////////////////////////////////////////////////////



            }

            // END OF SONGS SECTION ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////





             // START OF GALLERY SECTION /////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////

            function gallerySection () {
              navBehaviour(alternative);
            stateObj = { state: "gallery" };
            history.pushState(stateObj, "page 5", "#gallery");
            var whiteMask = $('.gallery-container .mask');
            var windowHeight = $(window).height();
            var galleryInfo = $('#gallery-indicator-holder');
            var firstGalleryImg = $('.first img');

            $('.mainlogo').removeClass('introAnimate');
            $('.mainlogo').addClass('hide');
            $('#navtoggle').addClass('activeAlt');
            $('#navtoggle').removeClass('introAnimation');
            $('.slide-container.scale').addClass('active');
            $('.gallery-container').addClass('active');


                // function for positioning info panel //
                function infoPanel () {
                var slideHeight = $('.gallery-img').height();
                var slideDistanceTop = $('.gallery-img').offset().top;
                var posInfo = slideHeight + slideDistanceTop;
                var galleryInfo = $('#gallery-indicator-holder');
                $(galleryInfo).css({top: posInfo + 'px'});
                }


                // fade out bg image //
                setTimeout(function () {
               var gallerybgimg = $('.gallery-container .bg-img > img');
               $(gallerybgimg).addClass('fade');
               }, 2000);

                // animate gallery in and position info panel //
                setTimeout(function () {
                $(firstGalleryImg).css({transform:'translateX(0%)'});
                $(galleryInfo).addClass('active');
                if ($(window).width() < 830) { infoPanel(); }
                }, 3000);


                // New responsive method of applying slick slider //
                $gallerySlider = $('.gallery-holder');
                var slickSettings = {
              slidesToShow: 1,
                 dots:false,
                    infinite:false
                }
                $gallerySlider.not('.slick-initialized').slick(slickSettings);

              /*  if ($(window).width() < 1040) {
               $gallerySlider.slick('unslick');
                $gallerySlider.addClass('mobile');
               }*/





            /* setting up gallery indicators  */
            /////////////////////////////////////
            var galleryIndex = 0;
            var galleryNumber = [];
            var galleryTitles = [];
            var galleryImages = $('.gallery-img');
            var prevArrow = $('.gallery-holder .slick-prev');
            var nextArrow = $('.gallery-holder .slick-next');



               setTimeout(function () {

                var galleryIndex = 0;
                   console.log(galleryIndex);

                /* setting the current class on first number and making them clickable */
                var paraElem = $('#gallery-numbers > p');
                $(paraElem[0]).addClass('current');

             /*   $(paraElem[0]).on('click', function (e) {
                e.preventDefault();
                galleryIndex = 0;
                    console.log(galleryIndex);
                $gallerySlider.slick('slickGoTo', 0);
                $(paraElem[1]).removeClass('current');
                $(paraElem[2]).removeClass('current');
                $(paraElem[3]).removeClass('current');
                $(this).addClass('current');
                $(titlePara[1]).removeClass('current');
                $(titlePara[2]).removeClass('current');
                $(titlePara[3]).removeClass('current');
                $(titlePara[0]).addClass('current');
                arrowState(galleryIndex);
                });

                $(paraElem[1]).on('click', function (e) {
                e.preventDefault();
                galleryIndex = 1;
                    console.log(galleryIndex);
                $gallerySlider.slick('slickGoTo', 1);
                $(paraElem[0]).removeClass('current');
                $(paraElem[2]).removeClass('current');
                $(paraElem[3]).removeClass('current');
                $(this).addClass('current');
                $(titlePara[0]).removeClass('current');
                $(titlePara[2]).removeClass('current');
                $(titlePara[3]).removeClass('current');
                $(titlePara[1]).addClass('current');
                arrowState(galleryIndex);
                });

                $(paraElem[2]).on('click', function (e) {
                e.preventDefault();
                galleryIndex = 2;
                    console.log(galleryIndex);
                $gallerySlider.slick('slickGoTo', 2);
                $(paraElem[0]).removeClass('current');
                $(paraElem[1]).removeClass('current');
                $(paraElem[3]).removeClass('current');
                $(this).addClass('current');
                $(titlePara[0]).removeClass('current');
                $(titlePara[1]).removeClass('current');
                $(titlePara[3]).removeClass('current');
                $(titlePara[2]).addClass('current');
                arrowState(galleryIndex);
                });

                $(paraElem[3]).on('click', function (e) {
                e.preventDefault();
                galleryIndex = 3;
                    console.log(galleryIndex);
                $gallerySlider.slick('slickGoTo', 3);
                $(paraElem[0]).removeClass('current');
                $(paraElem[1]).removeClass('current');
                $(paraElem[2]).removeClass('current');
                $(this).addClass('current');
                $(titlePara[0]).removeClass('current');
                $(titlePara[1]).removeClass('current');
                $(titlePara[2]).removeClass('current');
                $(titlePara[3]).addClass('current');
                arrowState(galleryIndex);
                });
                // end of clickable numbers //

                */




            /* iterate over each number and make it link to correct photo */
           $.each(paraElem, function(index) {

           $(this).on('click', function (e) {
                e.preventDefault();

                galleryIndex = index;
                $gallerySlider.slick('slickGoTo', index);
                arrowState(galleryIndex);

               $('#gallery-numbers p.current').removeClass('current');
               $(this).addClass('current');

               $('#gallery-titles p.current').removeClass('current');
               $(titlePara[index]).addClass('current');

                });
            });
            ////////////////////////////////////







                // gallery arrows //

                /* sending current class to gallery number when arrow nav is used */
                function currentNumber (index) {
                $(paraElem[index + 1]).removeClass('current');
                $(paraElem[index - 1]).removeClass('current');
                $(paraElem[index]).addClass('current');
                }

                prevArrow.on('click', function (e) {
                 e.preventDefault();
                    if (galleryIndex == 0) {
                        console.log('index is 0 so do nothing');
                         console.log(galleryIndex);
                        return false;
                    } else if (galleryIndex > 0) {
                        galleryIndex--;
                        currentNumber(galleryIndex);
                        currentTitle(galleryIndex);
                        arrowState(galleryIndex);
                        console.log('index is more than 0')
                        console.log(galleryIndex);
                    }
                });

                 nextArrow.on('click', function (e) {
                e.preventDefault();
                    if (galleryIndex == galleryImages.length - 1) {
                        console.log('index is at last slide so do nothing');
                        console.log(galleryIndex);
                        return false;
                    } else if (galleryIndex < galleryImages.length - 1) {
                        galleryIndex++;
                        currentNumber(galleryIndex);
                        currentTitle(galleryIndex);
                        arrowState(galleryIndex);
                        console.log('index is increasing')
                        console.log(galleryIndex);
                    }
                });
                // end gallery arrows ///



                // Titles //
                var titlePara = $('#gallery-titles > p');
                $(titlePara[0]).addClass('current');

                /* sending current class to gallery title when arrow nav is used */
                function currentTitle (index) {
                $(titlePara[index + 1]).removeClass('current');
                $(titlePara[index - 1]).removeClass('current');
                $(titlePara[index]).addClass('current');
                }
                // End Titles //



                // updating number and titles on swipe event //
                $($gallerySlider).on('swipe', function(event, slick, direction){

                var getDirection = direction;

               if (galleryIndex == 0 && getDirection == 'right') {
                    return false;
                } else if (galleryIndex == galleryImages.length - 1 && getDirection == 'left') {
                    return false;
                } else if (getDirection == 'left') {
                  galleryIndex++;
                  currentNumber(galleryIndex);
                  currentTitle(galleryIndex);
                  arrowState(galleryIndex);
                } else if (getDirection == 'right') {
                  galleryIndex--;
                  currentNumber(galleryIndex);
                  currentTitle(galleryIndex);
                  arrowState(galleryIndex);
                }

                });
                // End of on swipe event //



                // Arrow State //


                $(prevArrow).addClass('disable');



               function arrowState (index) {
                    if (index == 0) {
                      $(prevArrow).addClass('disable');
                      $(nextArrow).removeClass('disable');
                   } else if (index > 0 && index < galleryImages.length - 1) {
                      $(prevArrow).removeClass('disable');
                      $(nextArrow).removeClass('disable');
                   } else if (index == galleryImages.length - 1) {
                      $(prevArrow).removeClass('disable');
                      $(nextArrow).addClass('disable');
                   }
                }




               }, 2000);



            /* iterate over each image in slide and add number to string */
           $.each(galleryImages, function(index) {

            /* populating the numbers */
            var digit = index + 1;
            galleryNumber.push('<p>' + digit + '</p>');
            var digitString = galleryNumber.toString();
            var digitStringSplit = digitString.replace(/,/g, "");

            var el = document.getElementById('gallery-numbers');
            el.innerHTML = digitStringSplit;

            /* populating the titles */
            var titles = $(this).find('img').attr('data-title');
            galleryTitles.push('<p>' + titles + '</p>');
            var titleString = galleryTitles.toString();
            var titleStringSplit = titleString.replace(/,/g, "");
            console.log(titles);

            var titleElement = document.getElementById('gallery-titles');
            titleElement.innerHTML = titleStringSplit;


            });
            ////////////////////////////////////



            $(window).resize(function() {
             windowHeight = $(window).height();
			windowWidth = $(window).width();

            // positioning the info panel //
            if ($(window).width() < 830) {
                 setTimeout(function () {
               infoPanel();
               }, 1000);
             } else {
                 document.getElementById('gallery-indicator-holder').removeAttribute('style');
             }

            });


            }

            // END OF GALLERY SECTION /////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////





            // The Three Discover Buttons //
             $('.col-one .feature-btn').on('click', function (e) {
             e.preventDefault();
             musicSection();
             });
             $('.col-two .feature-btn').on('click', function (e) {
             e.preventDefault();
             songSection();
             });
             $('.col-three .feature-btn').on('click', function (e) {
             e.preventDefault();
             gallerySection();
             });
            // End of the Three Discover Buttons //


            });

			});
			}, 2000);




    } /* END of Discover Section */



    // About Section //
    function aboutSection () {

        stateObj = { state: "about" };
        history.pushState(stateObj, "page 6", "#about");

        window = $(window);
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $('span.breakdefault').removeClass('break');
        $('span.breakdefault').removeClass('breakNoDelay');
        $('span.breakdefault').addClass('hidebreak');
        TweenMax.to('.lead-title', 0.8, {css:{opacity:0}});
        $('.lead-content-holder').removeClass('animateIntro');
        $('.lead-content-holder').addClass('hide');
        $('.lead-content-holder h4').css({visibility:'hidden'});
        $('.lead-photo').css({left:'-100%'});
        $('.lead-photo-alt').css({opacity:0});
        $('.lead-art').removeClass('animateIntro');
        $('.lead-art').addClass('hide');
        $('.feature-btn').addClass('btnHide');
        $("#aboutwrapper").removeClass('hide');
        $("#aboutwrapper").addClass('show');
		$("#discoverLoad").addClass('show');
        $(".mainlogo").addClass('back');


          setTimeout(function () {
        $("#aboutwrapper").load("about.html #about-container", function(){

            $('#load-alt').fadeOut('slow',function(){$('#discoverLoad');});

            setTimeout(function () {

                // setting the height of the background //
    var sceneEl = document.getElementsByClassName('intro-section');
    var sceneAmount = sceneEl.length;
    var sceneHeight = $(sceneEl).height();
    var totalBgHeight = sceneHeight * sceneAmount;
    $('.about-bg').css({height:totalBgHeight});
    $('.intro-title h3').removeClass('hide');
    $('.intro-title h3').addClass('show');
    $('.about-bg').removeClass('hide');
    $('.about-bg').addClass('show');
    $('.intro-subtitle h4').removeClass('hide');
    $('.intro-subtitle h4').addClass('show');
    var aboutContainer = $('#about-container');
    var markerHolder = $('.marker-holder');
    var arrowControlsHolder = $('.arrow-controls-holder');
    var upArrow = $('.arrow-controls-holder .up');
    var downArrow = $('.arrow-controls-holder .down');
    var backToTop = $('.backtotop');
    var aboutContainerFromTop = $(aboutContainer).scrollTop();
    var yearScenes = document.getElementsByClassName('yearscene');
    var firstSceneDistanceTop = $(yearScenes[0]).offset().top;
    var percentageToSubtract = firstSceneDistanceTop - (firstSceneDistanceTop * .50);
    var currentIndex = 0;
    var markerArray = [];




          // displaying controls  //
           $(aboutContainer).scroll(function() {

                if (aboutContainer.scrollTop() >= percentageToSubtract) {
                  $(markerHolder).addClass('active');
                  $(arrowControlsHolder).addClass('active');
                  $(backToTop).addClass('active');
                } else {
                    $(markerHolder).removeClass('active');
                    $(arrowControlsHolder).removeClass('active');
                    $(backToTop).removeClass('active');
                }

                markerStatus();
               whatsScene();
               endpointClass();

            });


                // what scene is in viewport //
            function whatsScene () {
              $.each (yearScenes, function(index) {
                /*if ($(yearScenes[index]).offset().top < (windowHeight - 40) && $(yearScenes[index]).offset().top >= 0) {*/
                  if ($(yearScenes[index]).offset().top < windowHeight && $(yearScenes[index]).offset().top >= 0) {
                 currentIndex = index;
                 console.log('scene number ' + currentIndex);
                }
              });
            }


            // updating active class when scroll to matching scene //
            function markerStatus (currentIndex) {

              var markerItems = $('.marker-holder .marker');

              $.each (markerItems, function(index) {
                if ($(yearScenes[index]).offset().top < $(markerItems[index]).offset().top) {
                  $(markerItems[index - 1]).removeClass('active');
                  $(markerItems[index]).addClass('active');
                } else if ($(yearScenes[index]).offset().top > $(markerItems[index]).offset().top) {
                  $(markerItems[index]).removeClass('active');
                }
              });

            }


            // adding endpoint class to first and last scenes //
            function endpointClass () {

            if ($(yearScenes[0]).offset().top >= 0 && $(yearScenes[0]).offset().top < windowHeight ) {
              $(upArrow).addClass('endpoint');
            } else {
              $(upArrow).removeClass('endpoint');
            }

            if ($(yearScenes[3]).offset().top >= 0 && $(yearScenes[3]).offset().top < windowHeight ) {
              $(downArrow).addClass('endpoint');
            } else {
              $(downArrow).removeClass('endpoint');
            }


            }






            // arrow navigation //
           function arrowNavigation () {


               $(downArrow).on('click', function(e) {

                   e.preventDefault();

            if ($(yearScenes[currentIndex]).offset().top <= 0) {
              if (currentIndex === 3) {
                console.log('cant go down last scene');
                return false;
              }
                currentIndex++;
                var nextScene = yearScenes[currentIndex].offsetTop;
                console.log(nextScene);
                 console.log('move to next scene');
                console.log('the current index is ' + currentIndex);
              $('#about-container').animate({
             scrollTop: nextScene
             }, 'slow');

            } else if ($(yearScenes[currentIndex]).offset().top < windowHeight /*&& $(yearScenes[currentIndex]).offset().top > 0*/) {
              var thisScene = yearScenes[currentIndex].offsetTop;
                console.log('stay on this scene');
                console.log('the current index is ' + currentIndex);
                $('#about-container').animate({
             scrollTop: thisScene
             }, 'slow');

            }

            });




               $(upArrow).on('click', function(e) {


                e.preventDefault();


            if ($(yearScenes[currentIndex]).offset().top <= 0 || $(yearScenes[currentIndex]).offset().top > 200) {
              if (currentIndex === 0) {
                console.log('cant go up first scene');
                return false;
              }
                currentIndex--;
                var prevScene = yearScenes[currentIndex].offsetTop;
                console.log(prevScene);
                console.log('move to prev scene');
                console.log('the current index is ' + currentIndex);
              $('#about-container').animate({
             scrollTop: prevScene
             }, 'slow');

            } else if ($(yearScenes[currentIndex]).offset().top < 200 && $(yearScenes[currentIndex]).offset().top > 0) {
              var thisScene = yearScenes[currentIndex].offsetTop;
                console.log('stay on this scene');
                console.log('the current index is ' + currentIndex);
                $('#about-container').animate({
             scrollTop: thisScene
             }, 'slow');

            }

            });
               
            
            $(backToTop).on('click', function(e) { 
               e.preventDefault();
               $('#about-container').animate({
               scrollTop: 0
               }, 'slow');
            });


            }
            arrowNavigation();




           function scrollToScene (sceneIndex) {
                var theScene = yearScenes[sceneIndex].offsetTop;
                $('#about-container').animate({
                 scrollTop: theScene
                 }, 'slow');
            }


           /* iterate over each year scene and add bull */
           $.each(yearScenes, function(index) {

               var dotIndicator = $('<span class="marker">&bull;</span>');
               $(dotIndicator).appendTo('.marker-holder');

              $(dotIndicator).on('click', function(e) {
                  e.preventDefault();
                  console.log(index);
                  scrollToScene(index);
                   /*$('.marker').removeClass('active');
                  $(this).addClass('active');*/

                });

               markerArray.push(dotIndicator);
               $(markerArray[0]).addClass('active');

               /*var markerItem = $('.marker-holder .marker');
               var markerDistanceTop = $(markerItem).offset().top;*/





            });
            ////////////////////////////////////







    // init scrollmagic
    var controller = new ScrollMagic.Controller();



  var sceneOne = new ScrollMagic.Scene({
     triggerElement: '.intro-content-holder' ,
    triggerHook: 0,
        duration:'30%'
    }).setTween('.intro-content-inner', {opacity: 0})
    .addTo(controller);




    // add multiple tweens, wrapped in a timeline.
var timelineOne = new TimelineMax();
    timelineOne
   /* .from('.big-year', 0.7, {opacity:0}, 0)*/
   .to('.photo.first.animated', 1, {y: -150}, 0)
    .to('.big-year.first.animated', 1, {y: 100}, 0);

var timelineTwo = new TimelineMax();
    timelineTwo
   .to('.photo.second.animated', 1, {y: -150}, 0)
    .to('.big-year.second.animated', 1, {y: 100}, 0);

var timelineThree = new TimelineMax();
    timelineThree
   .to('.photo.third.animated', 1, {y: -150}, 0)
    .to('.big-year.third.animated', 1, {y: 100}, 0);

var timelineFour = new TimelineMax();
    timelineFour
   .to('.photo.fourth.animated', 1, {y: -150}, 0)
    .to('.big-year.fourth.animated', 1, {y: 100}, 0);





    // scenes ////////////////////////////////////

    var sceneTwo = new ScrollMagic.Scene({
     triggerElement: '.photo.first.animated' ,
    triggerHook: 1,
        duration:'125%'
    }).setTween(timelineOne)
    .addTo(controller);


     var sceneThree = new ScrollMagic.Scene({
     triggerElement: '.photo.second.animated' ,
    triggerHook: 'onEnter',
        duration:'125%'
    }).setTween(timelineTwo)
    .addTo(controller);

     var sceneFour = new ScrollMagic.Scene({
     triggerElement: '.photo.third.animated' ,
    triggerHook: 'onEnter',
        duration:'125%'
    }).setTween(timelineThree)
    .addTo(controller);

    var sceneFive = new ScrollMagic.Scene({
     triggerElement: '.photo.fourth.animated' ,
    triggerHook: 'onEnter',
        duration:'125%'
    }).setTween(timelineFour)
    .addTo(controller);



   /* var sceneSix = new ScrollMagic.Scene({
     triggerElement: '.big-year.first.animated' ,
    triggerHook: 0.5,
        duration:'125%'
    }).setPin('.big-year.first.animated', {pushFollowers: false})
    .addIndicators()
    .addTo(controller);*/






            }, 1000);






            });


			}, 2000);





    }

    // END of About Section //





    // Links to Discover Section //

     $('.feature-btn').on('click', function (e) {
         e.preventDefault();
         $(function () {discover();});
    });

   $('.nav-discover').on('click', function (e) {
        e.preventDefault();
        $('#navtoggle').removeClass('active');
    $('#nav-menu-holder').removeClass('show');
        $('.mainlogo').toggleClass('active');
       $(function () {discover();});
    });

$('.nav-about').on('click', function (e) {
        e.preventDefault();
        $('#navtoggle').removeClass('active');
    $('#nav-menu-holder').removeClass('show');
        $('.mainlogo').toggleClass('active');
       $(function () {aboutSection();});
    });

    // END of Links to Discover Section //



    });
/* END OF SECTIONS function */





/* NAV ITEMS */
$(document).ready(function () {

   /* $('.col-two').on('click', function (e) {
         e.preventDefault();
         alert('This is listen button');
    });*/

    /*$('.nav-discover').on('click', function (event) {
        $('#navtoggle').removeClass('active');
    $('#nav-menu-holder').removeClass('show');
       discover();
    });*/

});



/* SCROLLMAGIC STUFF */
/*$(document).ready(function () {

    // setting the height of the background //
    var sceneEl = document.getElementsByClassName('intro-section');
    var sceneAmount = sceneEl.length;
    var sceneHeight = $(sceneEl).height();
    var totalBgHeight = sceneHeight * sceneAmount;
    $('.about-bg').css({height:totalBgHeight});


    // init scrollmagic
    var controller = new ScrollMagic.Controller();




    var sceneOne = new ScrollMagic.Scene({
     triggerElement: '.intro-content-holder' ,
    triggerHook: 0,
        duration:'30%'
    }).setTween('.intro-content-inner', {opacity: 0})
    .addTo(controller);


    // add multiple tweens, wrapped in a timeline.
var timelineOne = new TimelineMax();

    timelineOne
    .from('.big-year', 0.7, {opacity:0}, 0)
    .to('.photo', 1, {y: -150}, 0)
    .to('.big-year', 1, {y: 100}, 0);



    var sceneTwo = new ScrollMagic.Scene({
     triggerElement: '.photo' ,
    triggerHook: 1,
        duration:'100%'
    }).setTween(timelineOne)
    .addIndicators()
    .addTo(controller);



});*/
