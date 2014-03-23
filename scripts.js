function GATrack(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-49014722-1', 'benbernste.in');
	ga('send', 'pageview');
}

function SmoothScroll(){
	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 500);
		        return false;
		      }
		    }
		  });
		});
}

function ShowArrow(){
	var $logo = $('#BackCell');
	$(document).scroll(function() {
	    $logo.css({background-image: $(this).scrollTop() > 700? url(/Icons%20and%20Attr/Home/icon_293.png):""});
	});
}

function GetRecentPlay(){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit=1",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;

	document.getElementById("TrackName").innerHTML=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	document.getElementById("TrackArtist").innerHTML=xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue;
	document.getElementById("TrackArt").className="Other";
	document.getElementById("TrackLink").href=xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
	document.getElementById("TrackArt").src=xmlDoc.getElementsByTagName("image")[3].childNodes[0].nodeValue;
}

function GetLastFMData(){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Benb116&api_key=d6b2ab49b0a34737be62158c0ddfd7c5&limit=1",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;

	/*document.getElementById("NowRecent").innerHTML=*/
	var playval = xmlDoc.getElementsByTagName("track")[0].attributes.getNamedItem("nowplaying").value;
	if(playval == "true") {
		document.getElementById("NowRecent").innerHTML="Now Playing";
		document.getElementById("TrackArt").className="pulse-grow";
	} else {
		document.getElementById("NowRecent").innerHTML="Recently Played";
	}
	document.getElementById("TrackName").innerHTML=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	document.getElementById("TrackArtist").innerHTML=xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue;
	document.getElementById("TrackLink").href=xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
	document.getElementById("TrackArt").src=xmlDoc.getElementsByTagName("image")[3].childNodes[0].nodeValue;
}