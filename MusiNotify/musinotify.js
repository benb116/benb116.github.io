$(document).ready(function() {
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("10_8")!=-1) OSVers = "Good";
    if (navigator.appVersion.indexOf("10_9")!=-1) OSVers = "Good";
    
    if (OSName != "MacOS" && OSVers == "Good") $('#Download').css('display', 'none');
    
	var SendNot = function(notID) {
		var notnum = $(notID);
		notnum.addClass('NotifAnim1');
		notnum.click(function() {
			notnum.removeClass('NotifAnim1');
			notnum.addClass('NotifAnim2');
		});
	};

	var HideNot = function(notID) {
		var notnum = $(notID);
		notnum.removeClass('NotifAnim1');
		notnum.addClass('NotifAnim2');
        setTimeout(function() {notnum.css('display', 'none');}, 750);
	};

	setTimeout(function() {SendNot("#Not1");}, 1000);
	setTimeout(function() {HideNot("#Not1");}, 7000);
	setTimeout(function() {
		SendNot("#Not2");
		setTimeout(function() {
			HideNot("#Not2");
		}, 7000);
	}, 11000);

	window.sidepos = "Closed"
	$('#MenuBarIcon').click(function () {
		if (window.sidepos == "Closed") {
			$('#HomePage').velocity({"margin-left": "-250px"}, 250);
			$('#Features').velocity({"margin-left": "-250px"}, 250);
			window.sidepos = "Opened";
		} else {
			$('#HomePage').velocity({"margin-left": "0"}, 250);
			$('#Features').velocity({"margin-left": "0"}, 250);
			window.sidepos = "Closed";
		};
	});
});