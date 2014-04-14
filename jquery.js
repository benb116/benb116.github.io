$(window).scroll(function() {    
    var scroll = $(window).scrollTop() + 200;
    var CodeAnchor = $('#CodePage').offset().top;
    var MusicAnchor = $('#MusicPage').offset().top;
    var SchoolAnchor = $('#SchoolPage').offset().top;
    var ResearchAnchor = $('#ResearchPage').offset().top - 300;
    CurrentPage = "Home";

    if (scroll < CodeAnchor) {
        $('#IconOverlay').css('background-image', '');
    }  
    if (scroll >= CodeAnchor && scroll < MusicAnchor) {
        $('#IconOverlay').delay(500).css('background-image', 'url(/Icons%20and%20Attr/Code/icon_20826.svg)');
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