var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQAwZWGtfB6ohlsMMZGaIHvn4sFqJkhR_FqlgCPGYPxYoa9Dkg-jJGvZdoqPLBsUoz6tfFGNoQm8awpnktz8zhZQ4e2m6vjxPgbU-k87ApAp7Hi_FFFZLQ3eC_ujnC78TGtoYGD9oVxXC24A63a7BymJU3KfcXncM7kcq3OcZjUUHc1fG3FbbJ3nAtybi7dBFcyzMqSU09XTcJ4HECJwzc7FKqGgmOxs3MWeBC8vulhSHU3pSu0yzomSabYb1u33RQqWGn0tgOaqe1uaYE0wIcINooSi-32b7uo-tw";

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
