$(document).ready(function() {

    var nav = ('header nav ul li a');
    

    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('header nav ul li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
    
    $(nav).click(function(){
        if (!$(this).hasClass("current")) {
            $("nav ul li a").removeClass("current");
            $(this).addClass("current");
        }
    
    var toLoad = $(this).attr('href')+'#content';
    $('#content').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
        
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
        
    function loadContent() {
    	$('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
    	$('#content').show('normal',hideLoader());
    }
    function hideLoader() {
    	$('#load').fadeOut('normal');
    }
    return false;
    
    });
    
   
});
