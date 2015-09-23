var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQCQsoRlQX8sLaAwTfmd0RuBU5eXZvQBV3_DlXqTvW94X0EM55amIkBPXH_caep5aJFVOEmL_TJZhfHtgvwjKHq6byoQe69Wv1vQuWdarAtEnU2KpSfztlUa89iSKmi8melF4Ws-YbBo2FBQp5IOfycU0JB-_kEA9_Q6OKb9qNcqvzyoAv4kIGw8TxoNq5yYeH9tZGCh2AmK4f2c0fv497vnwni3eHx8uD-QBj_s6djpOQRuoAW3RyhoAFjlKfwVaCQzy0Yi5niUsU_GzTYq_lCpNraMetSUUxfqdRNQTcLZ";

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