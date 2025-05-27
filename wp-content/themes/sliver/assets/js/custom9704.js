// js product slider start
jQuery(document).ready(function(jQuery) {

  globle();

  jQuery(".file-upload label").on("click", function (event) {
    event.preventDefault();
    /* Act on the event */
    jQuery(this)
      .parents(".file-upload")
      .find(".form-control-file")
      .trigger("click");
  });
  jQuery(".form-control-file").on("change", function (event) {
    event.preventDefault();
    /* Act on the event */
    var fileName = event.target.files[0].name;
    jQuery(".file-upload label span").text(fileName);
  });

  
  //counter js
  
  var counted = 0;
  jQuery(window).scroll(function() {
    if (jQuery('.counter-sec').length) {
      var oTop = jQuery('.counter-sec').offset().top - window.innerHeight;
      if (counted == 0 && jQuery(window).scrollTop() > oTop) {
        jQuery('.number span').each(function() {
          var $this = jQuery(this),
            countTo = $this.attr('data-count');
            jQuery({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        counted = 1;
      }
    }
});

  // counter js

  jQuery(".popup-trigger").on("click", function (e) {
    e.preventDefault();
    var videoURL = jQuery(this).data("video-url");
    jQuery("#youtube-video-frame").attr("src", videoURL);
    jQuery("#popmake-1075").popmake("open");
  });
  jQuery(document).on("pumAfterClose", function () {
    jQuery("#youtube-video-frame").attr("src", "");
  });

});
jQuery(document).ready(function() {
  var seenFancyBoxValues = new Set();
  jQuery('.product-list').each(function() {
      var fancyboxValue = jQuery(this).find('a').attr('data-fancybox');
      console.log('Checking:', fancyboxValue);

      if (seenFancyBoxValues.has(fancyboxValue)) {
          console.log('Duplicate found:', fancyboxValue);
          jQuery(this).hide();
      } else {
          seenFancyBoxValues.add(fancyboxValue);
      }
  });

  jQuery(document).on('wpcf7mailsent', function() {
    // Clear the content of the span with class 'file_name'
    jQuery('.file_name').text('');
});

});


equalheight = function (container) {
  if (jQuery(window).width() > 319) {
    var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      jQueryel;

    jQuery(container).each(function () {
      jQueryel = jQuery(this);
      jQuery(jQueryel).innerHeight("auto");
      rowDivs.push(jQueryel);
      currentTallest =
        currentTallest < jQueryel.innerHeight()
          ? jQueryel.innerHeight()
          : currentTallest;

      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].innerHeight(currentTallest);
      }
    });
  } else {
    jQuery(container).height("auto");
  }
};

function globle() {
  

  jQuery(document).ready(function(){
    function initSlick() {
        if ($(window).width() <= 1200) {
            if (!$('.product-slider').hasClass('slick-initialized')) {
                $('.product-slider').slick({
                    arrows: true,
                    autoplay:true,
                    cssEase: 'linear',
                    slidesToShow: 3,
                    centerPadding:'20px',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: true,
                                autoplay:false,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: true,
                                autoplay:false,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 700,
                            settings: {
                                arrows: true,
                                autoplay:false,
                                slidesToShow: 1,
                                dots:true
                            }
                        }
                    ]
                });
            }
        } else {
            if ($('.product-slider').hasClass('slick-initialized')) {
                $('.product-slider').slick('unslick');
            }
        }
    }

    initSlick();

    $(window).resize(function() {
        initSlick();
    });
});

  // js product slider end

  // js video slider start

  jQuery(".video-slider").slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // js video slider end

  // awards section start
  $(".awards-slider").slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          dots:false,
          autoplay: false,
          slidesToShow: 1,
         
        },
      },
    ],
  });
  // awards section end

  // Press section start
  $(".pres-img-box-slider").slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
  // Press section end

  // team slider start for about us page

  jQuery(".team-slider").slick({
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // team slider end for about us page

  // menu js start //

  jQuery(".hamburger-menu").click(function () {
    jQuery(this).siblings(".menu-list").toggle();
  });

  jQuery(".close-menu").click(function () {
    jQuery(".menu-list").css("display", "none");
  });


  
  // animtate
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  // Equal height property

  equalheight(".counter-main-content .counter-dec p");
}

$(document).ready(function () {
  $(".feedback-slider").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  });

});

$(document).ready(function () {
    $(".product-ls-slider").slick({
      arrows: true,
      dots: false,
      autoplay: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
});

jQuery(document).ready(function ($) {
  $.js = function (el) {
    return $("[data-js=" + el + "]");
  };

  function carousel() {
    $.js("timeline-carousel").slick({
      infinite: false,
      arrows: true,
      dots: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true, // Ensure dragging is enabled
      swipeToSlide: true, // Allow swiping to slide
      touchThreshold: 10, // Set lower threshold for more sensitive touch
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  carousel();
});

jQuery(document).ready(function () {
  jQuery(".contents").btnLoadmore({
    showItem: 8,

    whenClickBtn: 8,

    textBtn: "Load more",

    classBtn: "btn btn-danger",
  });

  jQuery('.btn-danger').click(function(){
    jQuery('.csr-back-btn').fadeIn();
  });  
});







jQuery(document).ready(function () {

// awards section start 
  jQuery('.awards-slider').slick({
    arrows: true,
    autoplay:true,
    slidesToShow: 3,
    centerPadding:'20px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 1,
          dots:true
        }
      }
    ]
  });
  // awards section end

  jQuery('.pres-img-box-slider').slick({
    arrows: true,
    autoplay:true,
    slidesToShow: 1,
    centerPadding:'20px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          autoplay:false,
          slidesToShow: 1,
          dots:true
        }
      }
    ]
  });


});

jQuery(document).ready(function() {
 
  $('[data-fancybox="womensday"]').fancybox({
    loop: true,
    buttons: [ "fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="office-celebration"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="independence-day"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="holi"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="diwali"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="employee-training"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="diwali-20"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });
  
  $('[data-fancybox="sports"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });

  $('[data-fancybox="diwali-21"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });

  $('[data-fancybox="diwali-23"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });

  $('[data-fancybox="diwali-22"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });

  $('[data-fancybox="Heaters"]').fancybox({
    loop: true,
    buttons: ["fullScreen", "thumbs", "close"],
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
  });

});


const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("cust-button");
const customTxt = document.getElementById("cust-text");



jQuery(window).on('load', function() {
    jQuery('.banner-slider').slick({
        dots: true,
        infinite: true,
       // speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        arrows: true,
    });
});


jQuery(document).ready(function($) {
  jQuery('.related-products-slider .products').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows:true,
      autoplaySpeed: 3000,
      dots: false, // Optionally add dots for navigation
      responsive: [
        {
          breakpoint: 1399,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              arrows:true,
              dots:false
          }
      },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows:true,
              dots:false
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  arrows:true,
                  dots:false
                  
              }
          }
      ]
  });

    
 
    
});

// dispaly file name in file input - career fomm and caree popup form 
document.addEventListener('DOMContentLoaded', function() {
  // First form handling
  const fileInput1 = document.querySelector('.cv-file-design-btn input[type="file"]');
  const fileNameDisplay1 = document.querySelector('.cv-file-design-btn .file-name');

  if (fileInput1 && fileNameDisplay1) {
      fileInput1.addEventListener('change', function() {
          const selectedFile = fileInput1.files[0];
          if (selectedFile) {
              fileNameDisplay1.textContent = selectedFile.name; // Display selected file name
          } else {
              fileNameDisplay1.textContent = 'No file selected'; // Reset if no file is selected
          }
      });
  }

  // Second form handling
  const fileInput2 = document.querySelector('.cv-file-design-btn-popup input[type="file"]');
  const fileNameDisplay2 = document.querySelector('.cv-file-design-btn-popup .file-name-popup');

  if (fileInput2 && fileNameDisplay2) {
      fileInput2.addEventListener('change', function() {
          const selectedFile = fileInput2.files[0];
          if (selectedFile) {
              fileNameDisplay2.textContent = selectedFile.name; // Display selected file name
          } else {
              fileNameDisplay2.textContent = 'No file selected'; // Reset if no file is selected
          }
      });
  }
});


jQuery(document).ready(function ($) {
    
    if (jQuery(window).width() < 991) {
        
        jQuery(document).on('click', '.mega-menu li .mega-menu-link', function (e) {
            const link = $(this).attr('href'); 
            if (link) {
                window.location.href = link; 
            }
          
            setTimeout(function () {
                jQuery(".menu-list").css("display", "none");
            }, 300); 
        });
        
        jQuery(document).on('click', function () {
            jQuery(".menu-list").css("display", "none");
        });
        jQuery(".close-menu, .hamburger-menu").on('click', function (e) {
    		e.stopPropagation();
    	});
    }
});

