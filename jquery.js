$(document).ready(function() {
    
    $('#IntroHead').delay(1000).animate({opacity: 1}, 1000);
    $('#TopBar').delay(2000).animate({top: 0}, 500);
    $('#IconOverlay').delay(2000).animate({top: "15px"}, 500);
    $('#BottomMenu').delay(2000).animate({"margin-top": "6.5%"}, 500);
    $('#CodePage').delay(2000).animate({"margin-top": "0"}, 500);
    $('#BannerWrap').delay(3000).animate({opacity: 1}, 1000);

    setTimeout(function(){$('#CodeCell').addClass("CodeBar");},3500);
    setTimeout(function(){$('#SchoolCell').addClass("SchoolBar");},3700);
    setTimeout(function(){$('#MusicCell').addClass("MusicBar"); $('#CodeCell').removeClass("CodeBar");},3900);
    setTimeout(function(){$('#ResearchCell').addClass("ResearchBar"); $('#SchoolCell').removeClass("SchoolBar");},4100);
    setTimeout(function(){$('#MusicCell').removeClass("MusicBar");},4300);
    setTimeout(function(){$('#ResearchCell').removeClass("ResearchBar");},4500);

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop() + 300;
        var CodeAnchor = $('#CodePage').offset().top;
        var MusicAnchor = $('#MusicPage').offset().top;
        var SchoolAnchor = $('#SchoolPage').offset().top;
        var ResearchAnchor = $('#ResearchPage').offset().top - 200;
        CurrentPage = "Home";

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