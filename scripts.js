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
	var $logo = $('#UpArrow');
	$(document).scroll(function() {
	    $logo.css({opacity: $(this).scrollTop() > 700? "1":"0"});
	   	$logo.css({display: $(this).scrollTop() > 300? "inline-block":"none"});
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