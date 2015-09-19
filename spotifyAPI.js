var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQA6DbvKxFGbs-fqVpFJWvOR0CSZwm38hvRHi8ossEkj4X5qGxxn2JPwNte-ZEYXSsLatnFCCWNGx9OapWtfERWz3aA4ulCLxg9ey-2JgZqUwfNCmX1uPWsxrJ5HSiqOnTTU83zgqNwih8v_qTgUssMUmv7-oqDkP3GuwBBRSllZe-1HeoulqM2QU2vOI5ZUC9dakKhy2wHgwfkYZ5wLY1MQEFisp8LKWrE-wgNuPYy4gEqgQlqsqacfBbrK51hQ1j9Ab_xHMjrYgxp7rO6FhDdpRBovlkVJYGfAzY-3pL4";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}