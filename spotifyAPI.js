var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQDNWf3lvAnPARVEOmr7yPt3vlqyiwwckTPJekRiWDHC5apE4mKn5O8i7pY16cmrgxm_8FsOOR_bbAounRipzfeGs5MMuceSWDl1bmIoVowkOW8SPfjInvggnG-zDIljNuElC-tgurmQ7oaTs12n5G3FyrkrTj-pt1weu8Ihva5nUYL23vHOn5GhCJ3Ixgsro4UN75NRcHCM_zP4rz28ZM0FBltkOXuKxZaeatC8XEwf4E9hK4-PIg0cGp7TWv_yThkBhE8Xwu0kJRKziippcwoAJBR_2QhrjLVfxQ";

/*
* Temporary backdoor method of updating OAuth key
* Login to your Spotify Developer account and generate new OAuth token
* Copy to clipboard and go to UniSound
* Access from console and call updateOAuth() with no parameters
* Paste into prompt and run without reloading (which will reset token)
*/
function updateOAuth(){
	var newToken = prompt("Paste OAuth Token Here:");
	alert("...with OAuth(" + cutKey(bearer, 5) + ")");
	bearer = newToken;
	alert("...with OAuth(" + cutKey(bearer, 5) + ")");
	alert("Complete. Do not reload the page, or the OAuth token will revert.");
}

function cutKey(key, cut){
	if(key.length >= cut * 2){
		return key.substr(0, cut) + "..." + key.substr(key.length - cut, cut);	
	}
	else{
		return key;
	}
}

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}
