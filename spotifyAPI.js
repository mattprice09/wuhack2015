var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQCYBsOuRWpzccwfVYIYIH5Ijq8IGl8Bfb4yKdEaNzKnx2U1TNfrXiZBKvTiQIZIIZmEyymgP0SMz_Hu24mL4n2aEHSHNyKYVSpMMMdtk7ahm";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}