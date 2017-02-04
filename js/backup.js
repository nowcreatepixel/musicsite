  // START OF GALLERY SECTION /////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////
            
            function gallerySection () {
              navBehaviour(alternative);
            stateObj = { state: "gallery" };
            history.pushState(stateObj, "page 5", "#gallery"); 
            var whiteMask = $('.gallery-container .mask');
            $('.mainlogo').removeClass('introAnimate');
            $('.mainlogo').addClass('hide');
            $('#navtoggle').addClass('activeAlt');
            $('#navtoggle').removeClass('introAnimation');
            $('.slide-container.scale').addClass('active');
            $('.gallery-container').addClass('active');
    
                
                // fade out bg image //
                setTimeout(function () {            
               var gallerybgimg = $('.gallery-container .bg-img > img');       
               $(gallerybgimg).addClass('fade');
                   
               console.log('img fade out');
                
                    
               
               }, 2000);
                
                // animate gallery in //
                setTimeout(function () { 
                $('.first img').css({transform:'translateX(0%)'});
                $('#gallery-indicator-holder').addClass('active');
                }, 3000);
                
                
                // New responsive method of applying slick slider //
                $gallerySlider = $('.gallery-holder');
                var slickSettings = {
              slidesToShow: 1,
                 dots:false,
                    infinite:false
                }
                $gallerySlider.slick(slickSettings);
                
                if ($(window).width() < 1040) {
               $gallerySlider.slick('unslick');
                $gallerySlider.addClass('mobile');
               }
                
                
          
                
                
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
                   
                $(paraElem[0]).on('click', function (e) {
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
                   
               
                   
                   
                ////////////////////////////////////////////////////   
                // working on an alternative to above function 
                   
                function clickNumbers (galleryIndex) {
                
                // on click function that gets passed the gallery index //
                $(paraElem[galleryIndex]).on('click', function (e) {
                e.preventDefault(); 
                $gallerySlider.slick('slickGoTo', galleryIndex);
                // remove class from all non gallery index and add it to current gallery index //
                $(paraElem[!galleryIndex]).removeClass('current');
                $(this).addClass('current');
                // remove class from all non gallery index and add it to current gallery index //
                $(titlePara[!galleryIndex]).removeClass('current');
                $(titlePara[galleryIndex]).addClass('current');
                // set arrow state //
                arrowState(galleryIndex);
                });
                    
                }
                   
                // invoke it //
                clickNumbers(); 
                   
              // end of alternative to above function //
              //////////////////////////////////////////////////
                   
                   
                 
                   
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
            
              
            // unslicking and slicking the slider //
            if ($(window).width() < 1040) { 
                
                /* $('.music-container .ui.embed').embed('reset');*/
                
                if ($gallerySlider.hasClass('slick-initialized')) {
                     $gallerySlider.slick('unslick');
                    $gallerySlider.addClass('mobile');
                   }
                     return
                 }
                 
                if (!$gallerySlider.hasClass('slick-initialized')) {
                    $gallerySlider.removeClass('mobile');
                     return $gallerySlider.slick(slickSettings);
                  }
            
            });
                
                
            }
              
            // END OF GALLERY SECTION /////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////