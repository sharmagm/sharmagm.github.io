jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    function goToByScroll(id) {
        // Scroll
        $('html,body').animate({
            scrollTop: $(id).offset().top
        },
            'slow');
    }

    $("#sidebar > ul > li > a").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("href"));
        return false;
    });

    /*==========================================
 PARALLAX SCRIPTS
  =====================================================*/

    $('.parallax').scrolly({ bgParallax: true });
});