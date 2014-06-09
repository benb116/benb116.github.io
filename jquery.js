$(document).ready(function() {

    $('#IntroHead').delay(500).animate({opacity: 1}, 1000);
    $('#TopBar').delay(2500).animate({top: 0}, 500);
    $('#IconOverlay').delay(2500).animate({top: "15px"}, 500);
    $('#DownArrow').delay(3000).animate({opacity: 1}, 500);
    $('#BottomMenu').delay(3000).animate({opacity: 1}, 500);
    $('#BannerWrap').delay(3000).animate({opacity: 1}, 500);

    /*setTimeout(function(){
        $('#CodeCell').addClass("CodeBar");
        $('#SchoolCell').addClass("SchoolBar");
        $('#MusicCell').addClass("MusicBar");
        $('#ResearchCell').addClass("ResearchBar");
    },3300);

    setTimeout(function(){
        $('#CodeCell').removeClass("CodeBar"); 
        $('#SchoolCell').removeClass("SchoolBar"); 
        $('#MusicCell').removeClass("MusicBar"); 
        $('#ResearchCell').removeClass("ResearchBar");
    },3800);*/

    setTimeout(function(){$('#DownArrow').addClass("hover");},17000);

    SmoothScroll();
    GATrack();
    GetTopArtists();
    GetRecentPlay();
    window.setInterval(function(){GetNowPlaying()}, 5000);

    $(window).scroll(function() {    
        var CodeAnchor = $('#CodePage').offset().top;
        var MusicAnchor = $('#MusicPage').offset().top;
        var SchoolAnchor = $('#SchoolPage').offset().top;
        var ResearchAnchor = $('#ResearchPage').offset().top - 200;
        var scroll = $(window).scrollTop() + 300;

        if (scroll < CodeAnchor) {
            $('#IconOverlay').css('background-image', '');
        }  
        if (scroll >= CodeAnchor && scroll < SchoolAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Code/icon_20826.svg)');
            $('#CodeCell').addClass("CodeBar");
        } else {
            $('#CodeCell').removeClass("CodeBar"); 
        }
         if (scroll >= SchoolAnchor && scroll < MusicAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Book/icon_4584.svg)');
            $('#SchoolCell').addClass("SchoolBar");
        } else {
            $('#SchoolCell').removeClass("SchoolBar");
        }
         if (scroll >= MusicAnchor && scroll < ResearchAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Music/icon_8996.svg)');
            $('#MusicCell').addClass("MusicBar");
        } else {
            $('#MusicCell').removeClass("MusicBar");
        }
         if (scroll >= ResearchAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Earth/icon_10812.svg)');
            $('#ResearchCell').addClass("ResearchBar");
        } else {
            $('#ResearchCell').removeClass("ResearchBar");
        }
    });

    /*Cheat Codes Below*/
    window.cheatsenabled = false;
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { 
        if (window.cheatsenabled == false) {
            window.cheatsenabled = true;
            alert('You have enabled cheat codes. Try to find them all! \n\nType the Konami code again to disable cheat codes.'); 
            cheet('j e w', function () {
                $('#IntroHead').prepend("<p>Very nice!</p>");
                $('#IntroHead').prepend("<iframe width=\"100%\" height=\"150\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89125487&amp;auto_play=true&amp;hide_related=true&amp;visual=false\"></iframe>");
            });

            cheet('g l a s s e s', function () {
                $('body').toggleClass('GlassesClass');
            });
        } else {
            window.cheatsenabled = false;
            alert('You have disabled cheat codes.'); 
            cheet.disable('j e w');
            cheet.disable('g l a s s e s');
        };
    });

});