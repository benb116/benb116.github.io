$(document).ready(function() {

    $('#IntroHead').delay(500).animate({opacity: 1}, 1000);
    $('#TopBar').delay(2000).animate({top: 0}, 500);
    $('#IconOverlay').delay(2000).animate({top: "15px"}, 500);
    $('#BottomMenu').delay(2000).animate({"margin-top": "5%"}, 500);
    $('#CodePage').delay(2000).animate({"margin-top": "0"}, 500);
    $('#DownArrow').delay(2000).animate({"margin-top": "0"}, 500);
    $('#BannerWrap').delay(4500).animate({opacity: 1}, 1000);

    setTimeout(function(){$('#CodeCell').addClass("CodeBar");},3300);
    setTimeout(function(){$('#SchoolCell').addClass("SchoolBar");},3500);
    setTimeout(function(){$('#MusicCell').addClass("MusicBar"); $('#CodeCell').removeClass("CodeBar");},3700);
    setTimeout(function(){$('#ResearchCell').addClass("ResearchBar"); $('#SchoolCell').removeClass("SchoolBar");},3900);
    setTimeout(function(){$('#MusicCell').removeClass("MusicBar");},4100);
    setTimeout(function(){$('#ResearchCell').removeClass("ResearchBar");},4300);

    setTimeout(function(){$('#DownArrow').addClass("hover");},15000);


    SmoothScroll();
    GATrack();
    GetRecentPlay();
    window.setInterval(function(){GetNowPlaying()}, 5000);
    GetTopArtists();

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
});