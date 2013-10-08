$(document).ready(function() {
    
/*----- SCROLLING MENU -----*/

    function fade_header() {
    
		if ($(window).width() >= 720) {

			window_scroll = $(this).scrollTop();

			if (window_scroll > $('header').height()) {

				$('#navScroll').slideDown('slow');
                
			} else {
				
				$('#navScroll').fadeOut('fast');
        
			}
            
		} else if ($(window).width() >= 480 && $(this).width() <= 720) {
            
            $('.min').show();
            
        } else {
            
        }

}
    
    $(window).scroll(function() { fade_header() });

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
    var beginning_color = new $.Color( 'rgba(0,166,81,0.4)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgba(50,97,3,0.99)' ); ;//what color we want to use in the end
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
            $('header').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('header').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('header').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });    

/*----- STAFF SECTION -----*/
    
$('#mesaros, #keeler, #watkins').click(function(event){
    xCoord = $(this).position().left - 70;
    console.log(xCoord);
    
    $(this).animate({
        right: xCoord
    }, 200);

    $(this).children('p').fadeToggle('fast');
    
    if (xCoord) {
        
    $(this).siblings().animate({
        opacity: 0
    }, 'fast', 'linear');
        
    } else {
        
    $(this).siblings().animate({
        opacity: 1
    }, 'fast', 'linear');
        
    }

    return false;
});
    

    
$(document).click(function() {
    $('.staffMember p').fadeOut('fast');
    $('.staffMember').fadeIn('fast');
});

/*
$('.staffPhoto').hover(function() {
    var photoWidth = parseInt($(this).css('width'),10);
    if (photoWidth < 170) {
        $(this).animate({
            height: 170,
            width: 170
        }, 200, 'swing', function(){
           
        });
    } else {
        $(this).animate({
            height: 150,
            width: 150
        }, 200, 'swing', function(){
           
        }); 
    }
    
});

*/
    
});
