/* DISCOVER BUTTON */
$(document).ready(function () {
    $('.feature-btn').on('click', function (event) {
        
        var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "#discover");

        /* firefox issue with event needs investigated
        added it in as a parameter above and seems to have fixed it*/
      if (event.preventDefault) {
           event.preventDefault();
       } else {
           event.returnValue = false;
        }
        windowWidth = $(window).width();     
        $('span.breakdefault').removeClass('break');
        $('span.breakdefault').removeClass('breakNoDelay');
        $('span.breakdefault').addClass('hidebreak');
         /*$('.bgmask').removeClass('show');
        $('.bgmask').addClass('hide');*/
        TweenMax.to('.lead-title', 0.8, {css:{opacity:0}});
        $('.lead-content-holder h4').css({visibility:'hidden'});
        $('.lead-photo').css({left:'-100%'});
        $('.lead-photo-alt').css({opacity:0});
        $('.feature-btn').addClass('btnHide');
        $("#discover").removeClass('hide');
        $("#discover").addClass('show');
		$("#discoverLoad").addClass('show');
        $(".mainlogo").addClass('back');

        setTimeout(function () {
        $("#discover").load("discovertwo.html .discover-container", function(){

            /*$('#load-alt').fadeOut('slow',function(){$('#discoverLoad');});*/  
            $('.col').css({height:windowHeight});
            var colItem = document.getElementsByClassName('col');
            var colNumber = $('.col').length;
            var colWidth = $(colItem)[0].getBoundingClientRect().width;
            var totalWidth = colWidth * colNumber;
            
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



            $('.back').on('click', function (event) {
                
                var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 1", "#home");
                
                /*history.pushState({state:home}, "page 1", "home.html");*/
                /*$(window).bind('popstate', function() {
                   history.pushState({state:home}, "page 1", "home.html");
                });*/
                
             if (event.preventDefault) {
              event.preventDefault();
              } else {
              event.returnValue = false;
              }

             $(this).removeClass('back');
             $("#discover").removeClass('show');
             $("#discover").addClass('hide');
             $('span.breakdefault').removeClass('hidebreak');
             $('span.breakdefault').addClass('breakNoDelay');
             /*$('.bgmask').removeClass('hide');
             $('.bgmask').addClass('show');*/
                  TweenMax.to('.lead-title', 0.8, {css:{opacity:1}});
                 $('.lead-content-holder h4').css({visibility:'visible'});
                 $('.lead-photo').css({left:'0'});
                $('.lead-photo-alt').css({opacity:1});
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


			});
			}, 2000);


       });

    });
/* END OF DISCOVER BUTTON */