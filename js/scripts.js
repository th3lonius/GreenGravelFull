$(document).ready(function() {
    
/*----- SCROLLING MENU -----*/

    function fade_header() {
    
		if ($(window).width() >= 720) {

			winScroll = $(this).scrollTop();

			if (winScroll > $('header').height() - 1) {

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
    var beginning_color = new $.Color( 'rgba(0,161,75,0.3)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgba(0,161,75,0.99)' ); ;//what color we want to use in the end
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
    
    var document = $(document);
    
$('#mesaros, #keeler, #watkins').click(function(event){
    // animate staff bio slide down
    var staffID = $(this).attr('id');
    console.log(yCoord);
    
        $(this).animate({
            top: 20
        }, 1000, function(){

        });
    
    var yCoord = $(this).position.top;

    if (yCoord > 0) {
        $(this).animate({
            top: -20
        })
    } else {

    }
        
    if (staffID == 'mesaros') {
        $('#mesarosBio').slideToggle();
        $(this).prev('div').animate({
            opacity: 0.4
        }, 500, 'linear');
            
        $(this).next('div').animate({
            opacity: 0.4
        }, 500, 'linear');
        staffID = 0;
    } else if (staffID == 'keeler') {
        $('#keelerBio').slideToggle();
    } else if (staffID == 'watkins') {
        $('#watkinsBio').slideToggle();
    } else {
        
    }

    // hide all other staff members not currently selected
    if (staffID == 0) {
        
    $(this).siblings('div').animate({
        opacity: 1
    }, 500, 'linear');
        
    } else {
        
    }

    return false;
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
