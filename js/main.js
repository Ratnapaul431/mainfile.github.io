(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    */
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

//trigger


	// Menu Dropdown Toggle*/

    if($('.menu-trigger').length){

        $(".menu-trigger").on('click', function() { 
    
          $(this).toggleClass('active');
    
          $('.header-area .nav').slideToggle(200);
    
        });
    
      }
    
    
    
      // Menu elevator animation
    
      $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    
          var target = $(this.hash);
    
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    
          if (target.length) {
    
            var width = $(window).width();
    
            if(width < 991) {
    
              $('.menu-trigger').removeClass('active');
    
              $('.header-area .nav').slideUp(200);  
    
            }       
    
            $('html,body').animate({
    
              scrollTop: (target.offset().top) + 1
    
            }, 700);
    
            return false;
    
          }
    
        }
    
      });
    
    
    
      $(document).ready(function () {
    
          $(document).on("scroll", onScroll);
    

    
          //smoothscroll
    
          $('.scroll-to-section a[href^="#"]').on('click', function (e) {
    
              e.preventDefault();
    
              $(document).off("scroll");
    
              
    
              $('.scroll-to-section a').each(function () {
    
                  $(this).removeClass('active');
    
              })
    
              $(this).addClass('active');
    
            
    
              var target = this.hash,
    
              menu = target;
    
              var target = $(this.hash);
    
              $('html, body').stop().animate({
    
                  scrollTop: (target.offset().top) + 1
    
              }, 500, 'swing', function () {
    
                  window.location.hash = target;
    
                  $(document).on("scroll", onScroll);
    
              });
    
          });
    
      });
    
    
    
      function onScroll(event){
    
          var scrollPos = $(document).scrollTop();
    
          $('.nav a').each(function () {
    
              var currLink = $(this);
    
              var refElement = $(currLink.attr("href"));
    
              if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    
                  $('.nav ul li a').removeClass("active");
    
                  currLink.addClass("active");
    
              }
    
              else{
    
                  currLink.removeClass("active");
    
              }
    
          });
    
      }
    

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

