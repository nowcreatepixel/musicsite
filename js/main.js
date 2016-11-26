// Adding User Agent to HTML tag //
$(document).ready(function () {
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
});


// setting the home url on load //
var stateObj = { state: "home" };
history.pushState(stateObj, "page 1", "#home");

// back button function //
window.onpopstate = function(event) {  
    $('.back').removeClass('back');
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
};


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


/* NAVIGATION */
$(document).ready(function(){
    
  /*var navigationMenu = function navMenu () { */
    
/*$('#navtoggle').on('click', function (e) {
    e.stopPropagation(); 
      $(this).toggleClass('active');
    $(this).removeClass('introAnimation');      
    $('#nav-menu-holder').toggleClass('show');
    $('.mainlogo').toggleClass('active');  
  }); */
    
    /*
    };
    navMenu();*/
    
    /*console.log(navigationMenu);*/
   /* navigationMenu();*/
    
/*    function navBehaviour () {
    
    var navigationMenu = function (e) {
        e.preventDefault();
        $('#navtoggle').toggleClass('active');
    $('#navtoggle').removeClass('introAnimation');      
    $('#nav-menu-holder').toggleClass('show');
    $('.mainlogo').toggleClass('active');
        alert('default what the fuck');
    };
    
     var navigationMenuAlt = function (e) {
        e.preventDefault();
         alert('alt what the fuck');
        $('.music-container').removeClass('active');
        $('.slide-container').removeClass('active');
    };
    
    
       if ($('#navtoggle').hasClass('default')) {
           /* $('#navtoggle').on('click', navigationMenu);*/
/*           console.log('default');
        }
        else {
            /*$('#navtoggle').off('click', navigationMenu);*/
/*            console.log('alternative');
        }
   
    
    /*$('.default').on('click', navigationMenu);*/
    
/*    }
    navBehaviour();*/
    
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
/*$(document).ready(function () {
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

});*/


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
              $('.music-container').removeClass('active');
              $('.slide-container').removeClass('active');
                   
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
        $("#discover").addClass('show');
		$("#discoverLoad").addClass('show');
        $(".mainlogo").addClass('back');

        setTimeout(function () {
        $("#discover").load("discovertwo.html .discover-container", function(){

            $('#load-alt').fadeOut('slow',function(){$('#discoverLoad');}); 
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
            
            
            
            
            
            // music section //
            function musicSection () {
                
                navBehaviour(alternative);
                
                stateObj = { state: "listen" };
        history.pushState(stateObj, "page 3", "#listen");
              
             $('.mainlogo').removeClass('introAnimate');
             $('.mainlogo').addClass('hide');
             $('#navtoggle').addClass('activeAlt');
             $('#navtoggle').removeClass('introAnimation');
             $('.slide-container.scale').addClass('active');
             $('.music-container').addClass('active');
                console.log(totalWidth);
                
            $('.music-container.active .ui.embed').embed();
                
             $('.video-holder').slick({
               centerMode: true,
              centerPadding: '20%',
              slidesToShow: 1,
                 dots:true,
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
            });
                
                   
            } // End of music section //
            
            
            
            
            
             $('.col-one .feature-btn').on('click', function (e) {                
             e.preventDefault();
             musicSection();
             });
             $('.col-two .feature-btn').on('click', function (e) {                
             e.preventDefault();
             musicSection();
             });
             $('.col-three .feature-btn').on('click', function (e) {                
             e.preventDefault();
             musicSection();
             });


			});
			}, 2000);
        
        
        
         


    } /* END of Discover Section */ 
    
    
    // Buttons In Discover Section //
    
     $('.feature-btn').on('click', function (e) {
         /*if (event.preventDefault) {
           event.preventDefault();
       } else {
           event.returnValue = false;
        }*/
         e.preventDefault();
         $(function () {discover();}); 
    });
    
    $('.nav-discover').on('click', function (e) {
       /* if (event.preventDefault) {
           event.preventDefault();
       } else {
           event.returnValue = false;
        }*/
        e.preventDefault();
        $('#navtoggle').removeClass('active');   
    $('#nav-menu-holder').removeClass('show');
        $('.mainlogo').toggleClass('active');
       $(function () {discover();}); 
    });
    
    // END of Buttons in Discover Section //
    
    

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
    
    
    
