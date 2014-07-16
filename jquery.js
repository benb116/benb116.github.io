$(document).ready(function() {

    $('#IntroHead').delay(500).velocity({opacity: 1}, 1000);
    $('#TopBar').delay(1000).velocity({top: 0}, 500);
    $('#IconOverlay').delay(1000).velocity({top: "15px"}, 500);
    $('#BottomMenu').delay(1500).velocity({opacity: 1}, 500);
    $('#BannerWrap').delay(1500).velocity({opacity: 1}, 500);

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

    GetNowPlaying();
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

    $('#ResumeLink').hover(
        function () {$('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Resume/icon_30547.svg)');}, 
        function () {$('#IconOverlay').css('background-image', '');
    });
    $('#ContactLink').hover(
        function () {$('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr/Envelope/icon_13468.svg)');}, 
        function () {$('#IconOverlay').css('background-image', '');
    });
    $('#CreditsLink').hover(
        function () {$('#IconOverlay').css('background-image', 'url(/Icons%20and%20Attr//List/icon_11515.svg)');}, 
        function () {$('#IconOverlay').css('background-image', '');
    });
    $('#MetLetLink').click(function () {
        $('#MetLet').slideToggle();
    });

    /*Easter Eggs Below*/
    window.cheatsenabled = false;
    alertify.set({ delay: 3000 });
    cheet('up up down down left right left right b a', function () { 
        if (window.cheatsenabled == false) {
            window.cheatsenabled = true;
            alertify.log("You have enabled easter eggs."); 
            $('#Top').velocity("scroll", 500);

            cheet('j e w', function () {
                alertify.log("Very nice! Great success!");
                $('#IntroHead').prepend("<iframe class=\"jew\" width=\"100%\" height=\"150\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89125487&amp;auto_play=true&amp;hide_related=true&amp;visual=false\"></iframe>");
            });

            cheet('n a z i', function () {
                $('.jew').remove();
            });

            cheet('g l a s s e s', function () {
                $('body').toggleClass('GlassesClass');
            });

            cheet('b a c k', function () {
                alertify.log("Background enabled."); 
                $('#HomeBlack').css('display', 'block');
                $('#IntroHead').css('color', 'white');
                $('.BottomMenuLink').css('color', 'white');
                $('.BottomFirst').css('color', 'white');
                $('#BBLogo').css('background-image', 'url(/Resources/Logo-white.svg)');
            });

        } else {
            window.cheatsenabled = false;
            alertify.log("You have disabled easter eggs."); 
            cheet.disable('j e w');
            cheet.disable('n a z i');
            cheet.disable('g l a s s e s');
            cheet.disable('b a c k');
        };
    });

});