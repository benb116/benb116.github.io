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

function GetMusicInfo(){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    	xmlDoc=xmlhttp.responseXML;

			document.getElementById("TrackName").innerHTML=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
			document.getElementById("TrackArtist").innerHTML=xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue;
			document.getElementById("TrackLink").href=xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
			try {
				document.getElementById("TrackArt").style.backgroundImage =  "url("+(xmlDoc.getElementsByTagName("image")[3].childNodes[0].nodeValue)+")";
			}
			catch(err) {
				document.getElementById("TrackArt").style.backgroundImage =  "url(/Icons%20and%20Attr/Music/icon_8996.svg)";
				console.log("No album art found.");
			}
			try {
				var playval = xmlDoc.getElementsByTagName("track")[0].attributes.getNamedItem("nowplaying").value;
				if(playval == "true") {
					document.getElementById("NowRecent").innerHTML="Now Playing";
					document.getElementById("TrackArt").className="pulse-grow";
				} else {
					document.getElementById("NowRecent").innerHTML="Recently Played";
					document.getElementById("TrackArt").className="Other";
				}
			} 
			catch(err) {
				console.log("No Now-Playing track found.");
			}
			    }
	  }
	xmlhttp.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit=1",true);
	xmlhttp.send();


	var NumOfImage = document.getElementById('TopArtists').getElementsByTagName('div').length;

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
			xmlDoc=xmlhttp.responseXML;

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
	    }
	  }
	xmlhttp.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit="+NumOfImage,true);
	xmlhttp.send();
}

function Write() {
	console.log('Begin chalk animation');
	var divtext = '<div id="WriteChalk">&nbsp;</div>';
	window.newtext = '<i>Activities:</i>Grade Treasurer, Chief Layout Editor of Hebrew Newspaper';
	var fulltext = ', Robotics Club, Annenberg Science Symposium';

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