$(document).ready(function() {
    
    $('#IntroHead').delay(1000).animate({opacity: 1}, 1000);
    $('#TopBar').delay(2000).animate({top: 0}, 500);
    $('#IconOverlay').delay(2000).animate({top: "15px"}, 500);
    $('#BottomMenu').delay(2000).animate({"margin-top": "8%"}, 500);
    $('#BannerWrap').delay(3000).animate({opacity: 1}, 1000);

    setTimeout(function(){$('#CodeCell').addClass("CodeBar");},3500);
    setTimeout(function(){$('#MusicCell').addClass("MusicBar");},3700);
    setTimeout(function(){$('#SchoolCell').addClass("SchoolBar"); $('#CodeCell').removeClass("CodeBar");},3900);
    setTimeout(function(){$('#ResearchCell').addClass("ResearchBar"); $('#MusicCell').removeClass("MusicBar");},4100);
    setTimeout(function(){$('#SchoolCell').removeClass("SchoolBar");},4300);
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
        if (scroll >= CodeAnchor && scroll < MusicAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Code/icon_20826.svg)');
            $('#CodeCell').addClass("CodeBar");
        } else {
            $('#CodeCell').removeClass("CodeBar"); 
        }
         if (scroll >= MusicAnchor && scroll < SchoolAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Music/icon_8996.svg)');
            $('#MusicCell').addClass("MusicBar");
        } else {
            $('#MusicCell').removeClass("MusicBar");
        }
         if (scroll >= SchoolAnchor && scroll < ResearchAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Book/icon_4584.svg)');
            $('#SchoolCell').addClass("SchoolBar");
        } else {
            $('#SchoolCell').removeClass("SchoolBar");
        }
         if (scroll >= ResearchAnchor) {
            $('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Earth/icon_10812.svg)');
            $('#ResearchCell').addClass("ResearchBar");
        } else {
            $('#ResearchCell').removeClass("ResearchBar");
        }
    });
});