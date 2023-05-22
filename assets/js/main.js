

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);



document.querySelectorAll(".prev").forEach((button) => {
	button.addEventListener("click", () => {
	   const session = button.closest(".session");
	   const slideshow = session.querySelector(".slideshow");
	   const images = slideshow.querySelectorAll("img");
	   let currentIndex = 0;
	   let prevIndex = 0;

	   images.forEach((image, index) => {
		  if (image.style.opacity === "1") {
			 currentIndex = index;
			 prevIndex = (currentIndex - 1 + images.length) % images.length;
		  }
	   });

	   images[currentIndex].style.opacity = 0;
	   images[prevIndex].style.opacity = 1;
	});
 });

 // 다음 버튼 클릭 이벤트 핸들러
 document.querySelectorAll(".next").forEach((button) => {
	button.addEventListener("click", () => {
	   const session = button.closest(".session");
	   const slideshow = session.querySelector(".slideshow");
	   const images = slideshow.querySelectorAll("img");
	   let currentIndex = 0;
	   let nextIndex = 0;

	   images.forEach((image, index) => {
		  if (image.style.opacity === "1") {
			 currentIndex = index;
			 nextIndex = (currentIndex + 1) % images.length;
		  }
	   });

	   images[currentIndex].style.opacity = 0;
	   images[nextIndex].style.opacity = 1;
	});
 });


 lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport:false
})





$(document).ready(function() {
    $(window).scroll( function(){
			
        $('an1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 6;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });
});

let moveToTop = function () {
	document.body.scrollIntoView({ behavior: "smooth" });
	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
};
