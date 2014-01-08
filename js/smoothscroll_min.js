(function($){$.fn.SmoothAnchors=function(){function scrollBodyTo(destination,hash){var scrollmem=$(document).scrollTop();window.location.hash=hash;$(document).scrollTop(scrollmem);$("html,body").animate({scrollTop:destination},1200);}
if(typeof $().on=="function"){$(document).on('click','a[href^="#"]',function(){var href=$(this).attr("href");if($(href).length==0){var nameSelector="[name="+href.replace("#","")+"]";if(href=="#"){scrollBodyTo(0,href);}
else if($(nameSelector).length!=0){scrollBodyTo($(nameSelector).offset().top,href);}
else{window.location=href;}}
else{scrollBodyTo($(href).offset().top,href);}
return false;});}
else{$('a[href^="#"]').click(function(){var href=$(this).attr("href");if($(href).length==0){var nameSelector="[name="+href.replace("#","")+"]";if(href=="#"){scrollBodyTo(0,href);}
else if($(nameSelector).length!=0){scrollBodyTo($(nameSelector).offset().top,href);}
else{window.location=href;}}
else{scrollBodyTo($(href).offset().top,href);}
return false;});}};})(jQuery);$(document).ready(function(){$().SmoothAnchors();});