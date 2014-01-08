$(document).ready(function() {
    
 $('#venues-slider').superslides();
    
/*----- NAVIGATION -----*/
    
    if (!location.hash) {
        $('nav ul li a:first').addClass('active');
        $('nav ul li:first').addClass('liActive');
    } else if ($('nav ul li a').hasClass('logotype')) {
        $(this).parent().removeClass('liActive');
    }    
    else {
        $('nav ul li a[href=' + location.hash + ']').addClass('active');
        $('nav ul li a[href=' + location.hash + ']').parent().addClass('liActive');
    }

    $('nav ul li a').bind('click', function(event) {
        $('nav ul li a').removeClass('active');
        $('nav ul li').removeClass('liActive');
        $(this).addClass('active');
        if ( $(window).width() > 850 ) {
        $(this).parent().addClass('liActive');
        } else {
            
        }
    });
    
/*----- SCROLLING MENU -----*/

function fade_header() {

		if ( $(window).width() > 300 ) {
            
			window_scroll = $(this).scrollTop();
            
            if ( window_scroll > ($('#home').height())) {

				$('header').css({"height": 40});
                $('header nav ul li a').css({
                    "line-height": '40px'
                });
			} 
            else {
				
				$('header').css({"height": 60});
                $('header nav ul li a').css({
                    "line-height": '60px'
                });            
			}
		}
	}
    $(window).scroll(function() { fade_header(); 
                                
});
    
    fade_header();
    
/*----- RESPONSIVENESS -----*/    
    
    function mobileStyling() {
    
    if ($(window).width() <= 1000) {
        
        $('section p').removeClass("col-1 col-2");
        
    } else {}
        
    }
    
    mobileStyling();
    
    $(window).resize(function() {
    /*If browser resized, check width again */
        if ($(window).width() <= 1000) {
            
            $('section p').removeClass("col-1 col-2");
            
    } else {}
        
    });
    
    /*----- COLOR SCROLLING HEADER -----*/

    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 1000; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgba(32,175,100,0.6)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgba(32,175,100,0.99)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newAlpha = beginning_color.alpha() + ( ( ending_color.alpha() - beginning_color.alpha() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue, newAlpha );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('.overlay').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('.overlay').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('.overlay').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    }); 
        
});
