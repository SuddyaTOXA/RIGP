jQuery(function($){
    // // header fade
    // $(function() {
	 //   var header = $('#header');
	 //   setTimeout(function(){
	 //   	header.addClass('show');
	 //   },800);
    // });
    //
    // //header background on scroll
    // var header = $('#header');
    // $(window).on('scroll', function() {
	 //   var st2 = $(this).scrollTop();
		//
	 //   if (st2 > 0) {
	 //      // console.log(st2);
	 //      header.addClass('scrolling');
	 //
	 //   } else {
	 //   	header.removeClass('scrolling');
	 //   }
    //
    // });
    // // for smooth scroll
    // if ( $('a').is('.smooth-scroll') ) {
    //     smoothScroll.init({
    //         selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
    //         speed: 500, // Integer. How fast to complete the scroll in milliseconds
    //         easing: 'easeInQuad', // Easing pattern to use
    //         offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
    //     });
    // }

    $(document).ready(function($){
        // for burger menu
        // $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        //     $('.mobile-menu-toggle').toggleClass('active');
        //     $('.mobile-menu-wrap').toggleClass('showing');
        //     $(document.body).toggleClass('overflow');
        // });
        // $(window).on('scroll', function() {
        //     $('#fullpage').fullpage({
        //         anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
        //         menu: '#menu'
        //     });
        // });
        // FOR FULLPAGE

        // header fade
        $(function() {
            var header = $('#header');

            setTimeout(function(){
                $('.animated-wrap').addClass('visible animated fadeIn');
            },100);

            setTimeout(function(){
                header.addClass('show');
            },800);
        });

        if ( $('#fullpage').length ) {
            var footer = $('#footer'),
                footerSlide = $('.section.footer'),
                footerHeight = footer.outerHeight(),
                rightNav = $('.right-nav'),
                rightNavHeight = rightNav.outerHeight() / 2,
                box = $('.slide-box'),
                maxH = maxHeight(box),
                fullWinHeight = $(window).height(),
                winHeight = fullWinHeight - $('#header').height(),
                respHeight = 0;

            function maxHeight(box) {
                var maxHeight = 0;
                box.each(function () {
                    if ($(this).outerHeight() > maxHeight) {
                        maxHeight = $(this).outerHeight();
                    }
                });
                return maxHeight;
            }

            function fullpageCustomInitialize(respHeight) {
                $('#fullpage').fullpage({
                    keyboardScrolling: false,
                    verticalCentered: true,
                    css3: false,
                    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
                    menu: '#myMenu',
                    navigationPosition: 'right',
                    // continuousHorizontal: true,
                    // continuousHorizontalKey: 'cmFsaWFuY2Uub3JnX3RHNVkyOXVkR2x1ZFc5MWMwaHZjbWw2YjI1MFlXdz1kYkk=',
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',
                    // controlArrows: true,
                    responsiveHeight: respHeight + 20,
                    responsiveWidth: 640,
                    afterLoad: function (anchorLink, index) {
                        setTimeout(function () {
                            if ( !$('body').hasClass('fp-responsive') ) {
                                var slideBox = $('.slide-box').eq(index - 1),
                                    slideTitle = slideBox.find('.slide-title, .since-title'),
                                    slideContent = slideBox.find('.content *, .since-top-box'),
                                    slideContactBox = slideBox.find('.slide-contact-list > li'),
                                    quote = slideBox.find('.quote'),
                                    quoteAuthor = slideBox.find('.quote-author'),
                                    slideBtn = slideBox.find('.btn');

                                if (slideTitle.hasClass('invisible')) {
                                    slideTitle.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                                if (slideContent.hasClass('invisible')) {
                                    slideContent.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                                if (slideBtn.hasClass('invisible')) {
                                    slideBtn.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                                if (slideContactBox.hasClass('invisible')) {
                                    slideContactBox.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                                if (quote.hasClass('invisible')) {
                                    quote.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                                if (quoteAuthor.hasClass('invisible')) {
                                    quoteAuthor.removeClass('invisible').addClass('visible animated fadeInUp');
                                }
                            }
                        }, 10)
                    },
                    onLeave: function(index, nextIndex, direction){
                        var leavingSection = $(this),
                            header = $('#header');

                        //after leaving section 2
                        // if(index == 1 && direction =='down'){
                        //     if (!(header.hasClass('fullpage-bg'))) {
                        //         header.addClass('fullpage-bg');
                        //     }
                        // } else if(index == 2 && direction == 'up'){
                        //     if (header.hasClass('fullpage-bg')) {
                        //         header.removeClass('fullpage-bg');
                        //     }
                        // }
                    }
                });

                setTimeout(function () {
                    footerSlide.height(footerHeight);
                }, 400);
            }

            fullpageCustomInitialize(maxH);

            $(window).on('resize', function () {
                var footerHeight    = footer.outerHeight(),
                    rightNavHeight  = rightNav.outerHeight() / 2,
                    maxH            = maxHeight(box),
                    fullWinHeight   = $(window).height(),
                    winHeight       = fullWinHeight - $('.header').height();

                setTimeout(function () {
                    if ( $('html').hasClass('fp-enabled') ) {
                        $.fn.fullpage.destroy('all');
                    }
                    fullpageCustomInitialize(maxH);
                }, 10);
            });

            //for animate
            function animate() {
                /*viewportchecker to trigger animations throughout*/
                $(".slide-title, .slide-box .content *, .slide-contact-list > li, .since-top-box, .since-title, .quote, .quote-author").addClass("invisible").viewportChecker({
                    classToAdd: 'visible animated fadeInUp',
                    offset: 50
                });
                $(".slide-box .btn").addClass("invisible").viewportChecker({
                    classToAdd: 'visible animated fadeInUp',
                    offset: 0
                });
            }

            animate();
        }
	});
});

