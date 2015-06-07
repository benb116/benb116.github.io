$(document).ready(function() {

    if ($('#MobileBar').css('display') == 'none' && 1 === 0) { // No animations on mobile
        // Initial animations
        $('#IntroHead').delay(500).animate({opacity: 1}, 1000);
        $('#TopBar').delay(1000).animate({top: 0}, 500);
        $('#IconOverlay').delay(1000).animate({top: "15px"}, 500);
        $('#BottomMenu').delay(1500).animate({opacity: 1}, 500);
        $('#BannerWrap').delay(1500).animate({opacity: 1}, 500);
    } else {
        //On mobile:
        $('#IntroHead').css('opacity', 1);
        $('#TopBar').css('top', 0);
        $('#IconOverlay').css('top', '15px');
        $('#BottomMenu').css('opacity', 1);
        $('#BannerWrap').css('opacity', 1);
    }

    SmoothScroll();
    GATrack();

    window.CurrentIcon = "";
    window.MetLetLoaded = false;
    window.MusicLoaded = false;
    window.cheatsenabled = false;
    $(window).scroll(function() { // As the user scrolls...
        // Determine anchor positions
        var ProjectsAnchor = $('#ProjectsPage').offset().top;
        var CodeAnchor = $('#CodePage').offset().top;
        var SchoolAnchor = $('#SchoolPage').offset().top;
        var MusicAnchor = $('#MusicPage').offset().top;
        var scroll = $(window).scrollTop() + 300; // Get current scroll. Offset changes the icon when most of the section is displayed. 

        if (scroll < ProjectsAnchor) { // If at home
            if (window.cheatsenabled === true) { // If cheats are enabled
                window.CurrentIcon = "url(/Icons%20and%20Attr/Egg/icon_14559.svg)";
            } else {
                window.CurrentIcon = "";
            }
        }  
        if (scroll >= ProjectsAnchor && scroll < CodeAnchor) { // If at Code section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Earth/icon_10812.svg)";
            $('#ProjectsCell').addClass("ProjectsBar");
        } else {
            $('#ProjectsCell').removeClass("ProjectsBar");
        }
        if (scroll >= CodeAnchor && scroll < SchoolAnchor) { // If at School section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Code/icon_20826.svg)";
            $('#CodeCell').addClass("CodeBar"); // Add Menubar highlight
        } else {
            $('#CodeCell').removeClass("CodeBar"); // Remove Menubar highlight
        }
        if (scroll >= SchoolAnchor && scroll < MusicAnchor) { // If at Music section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Book/icon_4584.svg)";
            $('#SchoolCell').addClass("SchoolBar");
        } else {
            $('#SchoolCell').removeClass("SchoolBar");
        }
        if (scroll >= MusicAnchor) { // If at Projects section
            window.CurrentIcon = "url(/Icons%20and%20Attr/Music/icon_8996.svg)";
            $('#MusicCell').addClass("MusicBar");
        } else {
            $('#MusicCell').removeClass("MusicBar");
        }
        
        if ($('#IconOverlay').css('background-image') != window.CurrentIcon) {
            $('#IconOverlay').css('background-image', window.CurrentIcon); // Set current icon
        }

        if (scroll >= SchoolAnchor && window.MetLetLoaded === false) {
            //Lazy load thumbnails when a user scrolls to the area
            $('#MetLet2012F').css('background-image', 'url(/Resources/School/Met%20Let/2012Fthumb.jpg)');
            $('#MetLet2013S').css('background-image', 'url(/Resources/School/Met%20Let/2013Sthumb.jpg)');
            $('#MetLet2013F').css('background-image', 'url(/Resources/School/Met%20Let/2013Fthumb.jpg)');
            $('#MetLet2013W').css('background-image', 'url(/Resources/School/Met%20Let/2013Wthumb.jpg)');
            $('#MetLet2014S').css('background-image', 'url(/Resources/School/Met%20Let/2014Sthumb.jpg)');
            console.log("Met Let loaded.");
            //Write(); // Begin chalk animation
            window.MetLetLoaded = true; // Prevents constant reloading and flashing on mobile browsers
        }

        if (scroll >= SchoolAnchor && window.MusicLoaded === false) {
            GetTopArtists();
            GetNowPlaying();
            window.MusicLoaded = true;
        }
    });

    $('a[rel*=leanModal]').leanModal({ top : 70, closeButton: ".modal_close" }); // Define modal close button
    $('#slickProjects').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });
    $(".rslides").responsiveSlides({auto: false, pager: true});

    selTags = [];

    $('.ProjectTag').click(function() {
        $(this).toggleClass('ProjectTagSel');
        $('#slickProjects').slick('slickUnfilter');
        var selClass = $(this).attr('attr');
        var tagIndex = selTags.indexOf(selClass);
        if (tagIndex == -1) {
            selTags.push(selClass);
        } else {
            selTags.splice(tagIndex, 1);
        }

        $('.Project').removeClass('selProject');
        for (var selTag in selTags) {
            $('.'+selTags[selTag]).addClass('selProject');
        }
        if (selTags.length !== 0) {
            $('#slickProjects').slick('slickFilter', '.selProject');
        }
    });

    // Easter eggs below
    window.cheatsenabled = false;
    alertify.set({ delay: 3000 });
    cheet('up up down down left right left right b a', function () { // Konami code to enable
        if (window.cheatsenabled === false) {
            window.cheatsenabled = true;
            alertify.log("You have enabled easter eggs."); 
            setTimeout(function(){
                alertify.log("Type back, glasses, jew, or bart.");
            },4000);
            $(window).scrollTop($(window).scrollTop()+1); // Reset home icon by triggering $(window).scroll()
            
            // Define the cheat codes
            cheet('j e w', function () {
                alertify.log("Type nazi to kill.");
                $('#IntroHead').prepend("<iframe class=\"jew\" style=\"display: none;\" width=\"100%\" height=\"150\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89125487&amp;auto_play=true&amp;hide_related=true&amp;visual=false\"></iframe>");
            });

            cheet('n a z i', function () {$('.jew').remove();});

            cheet('g l a s s e s', function () {$('body').toggleClass('GlassesClass');});

            cheet('b a c k', function () {
                alertify.log("Background enabled."); 
                $('#HomeBlack').css('display', 'block');
                //Change colors
                $('#IntroHead').css('color', 'white');
                $('#BBLogo').css('background-image', 'url(/Resources/logo-white.svg)');
            });

            // cheet('b a r t', function () {
            //     if ($('#Bart').css('opacity') == 0) {
            //         $('#Bart').css('opacity', 1);
            //         $('#SchoolPage h2').animate("scroll", 500);
            //     } else {
            //         $('#Bart').css('opacity', 0);
            //     };
            // });

        } else {
            //Disable codes
            window.cheatsenabled = false;
            alertify.log("You have disabled easter eggs."); 
            cheet.disable('j e w');
            cheet.disable('n a z i');
            cheet.disable('g l a s s e s');
            cheet.disable('b a c k');
            cheet.disable('b a r t');
            $(window).scrollTop($(window).scrollTop()+1); // Reset home icon by triggering $(window).scroll()
        };
    });
});