var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQDZ0fv0mVT4hFjwsbZU7jJpR4fHeanauMRsm0P0abkNYLGjrYfxb-4vUOyV3fZNOagT4w_ZENkyh_bG_wQDTan9BDkfCspfQcUCqDgTajY6nGAxO5yPeSKETowPuQ2TqT6T3CgwvGta3uh8F0gNfP33QS1mMAX9Xp6XpI-DK4H2NQd7Z3W1o2xAGN6LuvNC2bFthKvN4xO2-RIkNBG7dQYrblFwwRZXBmaUqqfEA5C0uET3muS6WG7t2yMdbDOYRzbDgLSBRFkXLmN5H-zH5tRNTG9z_PpkvrLVg3A4mYFo";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}