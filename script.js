$(document).ready(function() {
    SmoothScroll();
    GATrack();

    window.CurrentIcon = "";
    window.cheatsenabled = false;
    // Determine anchor positions
    var LifeWatchAnchor = $('#LifeWatchPage').offset().top;
    var ProjectsAnchor = $('#ProjectsPage').offset().top;
    var CodeAnchor = $('#CodePage').offset().top;
    var MusicAnchor = $('#MusicPage').offset().top;
    UpdateIcon();
    $(window).scroll(function() {
        UpdateIcon();
    });

    function UpdateIcon() { // As the user scrolls...
        
        var scroll = $(window).scrollTop() + 300; // Get current scroll. Offset changes the icon when most of the section is displayed. 

        if (scroll < ProjectsAnchor) { // If at home
            if (window.cheatsenabled === true) { // If cheats are enabled
                window.CurrentIcon = "url(/Icons%20and%20Attr/Egg/icon_14559.svg)";
            } else {
                window.CurrentIcon = "";
            }
        }
        if (scroll >= LifeWatchAnchor && scroll < ProjectsAnchor) { // If at LifeWatch section
            window.CurrentIcon = "url(/Icons%20and%20Attr/LifeWatch/WhiteIcon.svg)";
            $('#LifeWatchCell').addClass("LifeWatchBar");
        } else {
            $('#LifeWatchCell').removeClass("LifeWatchBar");
        }
        if (scroll >= ProjectsAnchor && scroll < CodeAnchor) { // If at Project section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Wrench/noun_399553_cc.svg)";
            $('#ProjectsCell').addClass("ProjectsBar");
        } else {
            $('#ProjectsCell').removeClass("ProjectsBar");
        }
        if (scroll >= CodeAnchor && scroll < MusicAnchor) { // If at Code section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Code/icon_20826.svg)";
            $('#CodeCell').addClass("CodeBar"); // Add Menubar highlight
        } else {
            $('#CodeCell').removeClass("CodeBar"); // Remove Menubar highlight
        }
        if (scroll >= MusicAnchor) { // If at Music section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Music/icon_8996.svg)";
            $('#MusicCell').addClass("MusicBar");
        } else {
            $('#MusicCell').removeClass("MusicBar");
        }

        if ($('#IconOverlay').css('background-image') != window.CurrentIcon) {
            $('#IconOverlay').css('background-image', window.CurrentIcon); // Set current icon
        }

        // if (scroll >= LifeWatchAnchor && window.MusicLoaded === false) {
       
            // window.MusicLoaded = true;
        // }
    }
    GetTopArtists();
    GetNowPlaying();
    $('a[rel*=leanModal]').leanModal({ top : 70, closeButton: ".modal_close" }); // Define modal close button
    $(".ProjectMedia").slick({
        dots: true,
        arrows: true,
        // infinite: true,
        slidesToShow: 1,
        initialSlide: 0,
        lazyLoad: 'progressive'
    });
    $(".patch-container").patchpanel();
    $('.patch-item').click(function(element) {
        if (!$(this).find('div').hasClass('patch-open')) {
            ga('send', 'event', 'ProjectView', $(this)[0].dataset.patchPanel);
        }
        $(this).find('div').toggleClass('patch-open');
        $('.patch-item').not(this).find('div').removeClass('patch-open');
        setTimeout(function() {calcAnchors();}, 1000);
    });
    function calcAnchors() {
        ProjectsAnchor = $('#ProjectsPage').offset().top;
        CodeAnchor = $('#CodePage').offset().top;
        LifeWatchAnchor = $('#LifeWatchPage').offset().top;
        MusicAnchor = $('#MusicPage').offset().top;
    }

    // Easter eggs below
    window.cheatsenabled = false;
    alertify.set({ delay: 3000 });
    cheet('up up down down left right left right b a', function () { // Konami code to enable
        if (window.cheatsenabled === false) {
            window.cheatsenabled = true;
            alertify.log("You have enabled easter eggs.");
            setTimeout(function(){
                alertify.log("Type back, glasses, or astro.");
            },4000);
            $(window).scrollTop($(window).scrollTop()+1); // Reset home icon by triggering $(window).scroll()

            cheet('g l a s s e s', function () {$('body').toggleClass('GlassesClass');});

            cheet('b a c k', function () {
                alertify.log("Background enabled.");
                $('#HomeBlack').css('display', 'block');
                //Change colors
                $('#IntroHead').css('color', 'white');
                $('#BBLogo').css('background-image', 'url(/Resources/logo-white.svg)');
                $('#BottomMenu a').mouseover(function() {
                    $(this).css('color', 'white');
                }).mouseout(function(){
                    $(this).css('color', '#b6b6b6');
                });
                $('#ResumeIcon').css('background-image', 'url(/Icons%20and%20Attr/Resume/icon_30547_white.svg)');
                $('#EmailIcon').css('background-image', 'url(/Icons%20and%20Attr/Envelope/icon_13468_white.svg)');
                $('#LinkedInIcon').css('background-image', 'url(/Icons%20and%20Attr/Profiles/linkedin_white.svg)');
                $('#GithubIcon').css('background-image', 'url(/Icons%20and%20Attr/Profiles/github_white.svg)');
                $('#CreditsIcon').css('background-image', 'url(/Icons%20and%20Attr/List/icon_11515_white.svg)');
            });

            cheet('a s t r o', function () {    
                var KICKASSVERSION='2.0';
                var s = document.createElement('script');
                s.type='text/javascript';
                document.body.appendChild(s);
                s.src='//hi.kickassapp.com/kickass.js';
                void(0);
            });

        } else {
            //Disable codes
            window.cheatsenabled = false;
            alertify.log("You have disabled easter eggs.");
            cheet.disable('g l a s s e s');
            cheet.disable('b a c k');
            cheet.disable('b a r t');
            $(window).scrollTop($(window).scrollTop()+1); // Reset home icon by triggering $(window).scroll()
        }
    });
});