var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQD4OfT1YVab0-0L9ppYwEoglPAk2dD1d8NIoP_p7lYj9Yo-py-WkRF1rxokU8hKHBNHrIs0XZygi04IkqN9YuwH3cZmGRbQ3QxV9FERe89BldXxAAsU-dktT4LFgUuPoG9NN4yoDE1bEXzg4yctkK7LAeisQ_fFdlB_GJIfgQtxv16zm2DDwWlj1q8NwQLY8PprwiV_6KIm4hntJWix8mCoGzyxlzH33IyTGWWodTVy15GWAFIL6uws0hTL8f8FEVAZYBT89b6U2p9mowjRQVsL6jkaJpJRn81mF0m4fjyg";

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