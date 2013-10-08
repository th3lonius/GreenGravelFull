$(document).ready(function() {

$('.banner').click(function() {
    var wrapPos = parseInt($('#wrapper').css('left'),10);
    if (wrapPos < 10) {
        $('#wrapper').animate({
        left: "30%"
    }, 80, 'linear', function() {
        // Animation complete.
    });
        
    }
    else {
         $('#wrapper').animate({
        left: "0"
    }, 80, 'linear', function() {
        // Animation complete.
    });
    }
});
        

$('.slideLeft').click(function(event) {
    
    $('#wrapper').toggleClass('leftSide');
    
    return false;
        
    event.preventDefault();
    
});
    
});