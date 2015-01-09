function GATrack(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-49014722-1', 'auto');
	ga('send', 'pageview');
}

function SmoothScroll(){
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $(target).velocity("scroll", 500);
	        return false;
	      }
	    }
	});
}

function GetNowPlaying(){
	$.ajax({
		url: "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit=1"
	})
	.done(function(data) {
		xmlDoc=data;

		var thetrack = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var theartist = xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue;

		document.getElementById("TrackName").innerHTML = thetrack;
		document.getElementById("TrackArtist").innerHTML = theartist;
		document.getElementById("TrackLink").href = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
		try {
			document.getElementById("TrackArt").style.backgroundImage =  "url("+(xmlDoc.getElementsByTagName("image")[3].childNodes[0].nodeValue)+")";
		}
		catch(err) {
			document.getElementById("TrackArt").style.backgroundImage =  "url(/Icons%20and%20Attr/Music/icon_8996.svg)";
			console.log("No album art found: "+err);
		}
		try {
			var playval = xmlDoc.getElementsByTagName("track")[0].attributes.getNamedItem("nowplaying").value;
			if(playval == "true") {
				document.getElementById("NowRecent").innerHTML = "Now Playing";
				getBPMInfo(theartist, thetrack)
				document.getElementById("TrackArt").className = "pulse-grow";
			} else {
				document.getElementById("NowRecent").innerHTML = "Recently Played";
				document.getElementById("TrackArt").className = "Other";
				console.log("No Now-Playing track found.");
			}
		} 
		catch(err) {
			console.log("Error getting NowPlaying status: "+err);
		}
	})
}

function GetTopArtists(){
	var NumOfImage = document.getElementById('TopArtists').getElementsByTagName('div').length;

	$.ajax({
		url: "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit="+NumOfImage
	})
	.done(function(data) {
		xmlDoc=data;

		for (var i = 0; i < NumOfImage; i++) {
			try {
				var imageLink = xmlDoc.getElementsByTagName("image")[(5*i+3)].childNodes[0].nodeValue;
				$('#TopArtists div').get(i).style.backgroundImage = "url("+imageLink+")";
			}
			catch(err) {
				console.log("No Artist image found for artist " + i.toString());
			}

			var ArtistName = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
			$('#TopArtists span').get(i).innerHTML=ArtistName;

			var ArtistLink = xmlDoc.getElementsByTagName("url")[i].childNodes[0].nodeValue;
			$('#TopArtists a').get(i).href=ArtistLink;
		}
	})
}

function getBPMInfo(artist, track) {
	var apiKey = 'TYVPU4DLLRB0DZMYD';
	$.ajax({
		url: "http://developer.echonest.com/api/v4/song/search?api_key="+apiKey+"&artist="+artist+"&title="+track+"&bucket=audio_summary"
	})
	.done(function(data) {
		var songBPM = data.response.songs[0].audio_summary.tempo;
		console.log(songBPM);
		var BPS = songBPM / 60;
		var halfPeriod = 1 / (2 * BPS);
		$('.pulse-grow').css('-webkit-animation-duration', halfPeriod+'s')
		$('.pulse-grow').css('animation-duration', halfPeriod+'s')
	});
}

function Write() {
	console.log('Begin chalk animation');
	var divtext = '<div id="WriteChalk">&nbsp;</div>';
	window.newtext = '<i>Activities:</i>Grade Treasurer, Chief Layout Editor of Hebrew Newspaper, Robotics Club, ';
	var fulltext = 'Annenberg Science Symposium';
	try {
		$.each(fulltext.split(''), function(i, letter){
	        //we add 100*i ms delay to each letter 
	        setTimeout(function(){
	            //we add the letter to the container
	            //$('#container').html($('#container').html() + letter);
	        	newtext += letter
	        	var fullcode = window.newtext+divtext;
	        	$('#WriteChalk').velocity({'margin-top': "0em"}, 40);
				setTimeout(function(){
					$('#ChalkLine').html(fullcode);
					$('#WriteChalk').velocity({'margin-top': "1em"}, 40);
				}, 100);
				if (i == 43) {
					setTimeout(function(){
						$('#WriteChalk').delay(1000).css('opacity', 0);
					}, 100);
				};
	        }, 150*(i+1));
	    });
	} 
	catch(err) {
		$('#ChalkLine').html(window.newtext + fulltext);
	}
    
}