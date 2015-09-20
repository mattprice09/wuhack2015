var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQDtDFZkM7bv0JzsgDN4UPwhgwEFdIYNbmHBdEIvKzTwSTkKME9juoatfcOhdis0_g35KXFc1eQbwt4EvCyLubKsQUyOFTCJsqb9fsPd540HcopLTNEqvOlJgeVT3rXQTPGxWdhO9PuXCcYw-R3uvfnBmaILafPOZa_eYB1-Cqz9ysQVOuPDsPUXg5vK-qkvUt5mKn07KmCeJWy_k4xCiYw6PQWcViPZmCAjykLjSuJHBuqMNQVgqB5Hary6q5aslDKV1_fhdzbxn0YpvOCIGy1hBbvd2YHCYIJxlCAIhOU";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}