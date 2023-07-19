$(document).ready(function() {
    $(window).scroll(function() {
      // sticky navbar on scroll script
      if ($(this).scrollTop() > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if ($(this).scrollTop() > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function() {
      $('html').animate({ scrollTop: 0 }, 500);
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function() {
      // applying smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Student", "Junior Developer", "Content Creator", "Hoopster", "Home Cook"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed2 = new Typed(".typing-2", {
      strings: ["Student", "Junior Developer", "Content Creator", "Hoopster", "Home Cook"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  