(function( $ ){
    $.fn.emvi = function() {
        $(this).each(function (index) {
            if($(this).attr("data-service") == "youtube.com"){
                var url = 'http://www.youtube.com/embed/' +$(this).attr("data-code");
            }
            if($(this).attr("data-service") == "vimeo.com"){
                var url = 'http://player.vimeo.com/video/' + $(this).attr("data-code");
            }
            if($(this).attr("data-service") == "coub.com"){
                var url = 'http://coub.com/embed/' +$(this).attr("data-code") + '?muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false';
            }
            var style = "";
            var ifr = $('<iframe />');
            ifr.attr('src', url);
            ifr.attr('frameborder', 0);
            ifr.attr('allowfullscreen', 1);
            if($(this).attr("data-width")){
                ifr.attr('width', $(this).attr("data-width"));
                ifr.attr('height', $(this).attr("data-width")/1.7);
            }else{
                style = "width:100%;height:"+($(this).width()/1.7)+"px;";
            }
            ifr.attr('style',style);
            $(this).html(ifr);
        });
    };
})( jQuery );