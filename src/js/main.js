$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front-End Web Developer","UI / UX Designer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // INITIALIZE AOS
    AOS.init();

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

    //Counter
    var counted = 0;
    $(window).scroll(function() {
        var oTop = $('#counters').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
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
                }
                });
            });
            counted = 1;
        }
    });



});
