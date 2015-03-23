(function( $ ){
    $.fn.emvi = function() {
        $(this).each(function (index) {
            if($(this).attr("data-service") == "youtube.com"){
                var url = '//www.youtube.com/embed/' +$(this).attr("data-code");
            }
            if($(this).attr("data-service") == "vimeo.com"){
                var url = '//player.vimeo.com/video/' + $(this).attr("data-code");
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


//
//if (__mvJQLoading === undefined && window.__emviJQ === undefined) {
//    var __mvJQLoading = true;
//    console.info("EMVI:LOAD JQuery");
//    var js = document.createElement('SCRIPT');
//    js.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
//    js.type = "text/javascript";
//    js.onload = _emviInit;
//    js.onreadystatechange = function () { // IE
//        if (this.readyState == 'complete' || this.readyState == 'loaded') {
//            _emviInit();
//        }
//    };
//    (document.getElementsByTagName('head')[0]).appendChild(js);
//} else {
//    _emviInit();
//}
//
//function _emviInit() {
//    if (window.jQuery === undefined && window.__emviJQ == undefined) {
//        console.info("EMVI:WAIT_LOADING");
//        setTimeout('_emviInit()', 100);
//        return;
//    }
//    if (window.__emviJQ === undefined) {
//        console.info("EMVI:NOCONFLICT");
//        window.__emviJQ = jQuery.noConflict(true);
//    }
//    console.info("EMVI:JQv:" + window.__emviJQ.fn.jquery);
//
//    window.__emviJQ(function () {
//        window.__emviJQ(".emvi").each(function (index) {
//
//            if(window.__emviJQ(this).attr("data-service") == "youtube.com"){
//                var url = '//www.youtube.com/embed/' + window.__emviJQ(this).attr("data-code");
//            }
//
//            if(window.__emviJQ(this).attr("data-service") == "vimeo.com"){
//                var url = '//player.vimeo.com/video/' + window.__emviJQ(this).attr("data-code");
//            }
//
//            if(window.__emviJQ(this).attr("data-service") == "coub.com"){
//                var url = 'http://coub.com/embed/' + window.__emviJQ(this).attr("data-code") + '?muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false';
//            }
//
//            var style = "";
//            var ifr = window.__emviJQ('<iframe />');
//                ifr.attr('src', url);
//                ifr.attr('frameborder', 0);
//                ifr.attr('allowfullscreen', 1);
//                if(window.__emviJQ(this).attr("data-width")){
//                    ifr.attr('width', window.__emviJQ(this).attr("data-width"));
//                    ifr.attr('height', window.__emviJQ(this).attr("data-width")/1.7);
//                }else{
//                    style = "width:100%;height:"+(window.__emviJQ(this).width()/1.7)+"px;";
//                }
//                ifr.attr('style',style);
//                $(this).html(ifr);
//                $(this).append('<div style="text-align: right; font-size: 12px;float: right;">by <a href="http://emvi.selx.net/" target="_blank"><img src="http://static.selx.net/emvi/logo/1.png" style="float: right;margin-top: 4px; width: 15px !important; height: 10px !important; " width="15" height="10">emvi&nbsp;</a></div>');
//
//            //var html = '<iframe src="' + url + '" width="600" height="213" frameborder="0" allowfullscreen="true" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
//            //$(this).attr("data-service");
//            //$(this).attr("data-code");
//        });
//    });
//}


