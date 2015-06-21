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
            if($(this).attr("data-service") == "mp4"){
                var url = $(this).attr("data-url");
            }

            var style = "";
            if($(this).attr("data-service") == "mp4"){
                var obj = $('<video />');
                obj.attr('controls',1);
            }else{
                var obj = $('<iframe />');
                obj.attr('frameborder', 0);
                obj.attr('allowfullscreen', 1);
            }

            obj.attr('src', url);

            if($(this).attr("data-width")){
                obj.attr('width', $(this).attr("data-width"));
                obj.attr('height', $(this).attr("data-width")/1.7);
            }else{
                style = "width:100%;";
                if($(this).width() != 0){
                    style = style+"height:"+($(this).width()/1.7)+"px;";
                }
            }
            obj.attr('style',style);
            $(this).html(obj);
        });
    };
})( jQuery );