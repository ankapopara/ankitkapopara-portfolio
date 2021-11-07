$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // INITIALIZE AOS
    AOS.init();

    //Number count
    (function($) {
        $.fn.countTo = function(options) {
        return this.each(function() {
            //-- Arrange
            var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
            var $el = $(this);
            var countFrom = parseInt($el.attr('data-count-from'));
            var countTo = parseInt($el.attr('data-count-to'));
            var countSpeed = $el.attr('data-count-speed'); // Number increment per second
    
            //-- Action
            var rafId;
            var increment;
            var currentCount = countFrom;
            var countAction = function() {              // Self looping local function via requestAnimationFrame
            if(currentCount < countTo) {              // Perform number incremeant
                $el.text(Math.floor(currentCount));     // Update HTML display
                increment = countSpeed / FRAME_RATE;    // Calculate increment step
                currentCount += increment;              // Increment counter
                rafId = requestAnimationFrame(countAction);
            } else {                                  // Terminate animation once it reaches the target count number
                $el.text(countTo);                      // Set to the final value before everything stops
                //cancelAnimationFrame(rafId);
            }
            };
            rafId = requestAnimationFrame(countAction); // Initiates the looping function
        });
        };
    }(jQuery));
    
    //-- Executing
    $('.counter').countTo();


    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

});


// window.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             const id = entry.target.getAttribute('id');
//             if (entry.intersectionRatio > 0) {
//                 document.querySelector(`nav li a[href="#${id}"]`)
//                 .parentElement.classList.add('active');
//             } else {
//                 document.querySelector(`nav li a[href="#${id}"]`)
//                 .parentElement.classList.remove('active');
//             }
//         });
//     });
//     // Track all sections that have an `id` applied
//     document.querySelectorAll('section[id]').forEach((section) => {
//         observer.observe(section);
//     });
// });