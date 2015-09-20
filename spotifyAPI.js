var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQAKmwyvfDXMZYc8ukWFYB6PCGe1bd6GpnQs3GqDaPka6gcXNSnQFk4csPKRw9_lC5OhW5hA228pROR_yCGSEYm2FJhPxAjnwoX2mXvT3Fn2hSurS10qtd6Ktxx16dU-y3BCxD9BAdY2kQAwJfaEX7nL0HRpUSBfF_AB1BZh3VaWW7oHKXoYHMgzNSv6aGkaxiHMOYW6qcT_MBeby5UvXdCvXUa6HLaYb5_cc5oEDPPVA1b5tKQ4Rzcgh21eAwXz3LaM_XNXUIUdqfZqYXveJgcjizspRK_WirE_qb53FGn8";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}