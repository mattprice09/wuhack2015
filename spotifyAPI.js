var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQAJnCdKpbx_JMa4mbQqQts7RGB5k_CWmcWMBlDajuLFFlq0QPlk8CPngbwH4ML0pUwtmCXAIQ1vBZaqYhL9c6IbZ3WCdHtQb6pUwaFAyvXfcfWb28WMkueEvdBiLH8eaZkfKikpTE4Tg3_P7VoNm4JBzY2zYJ_r9SivYNH4Abe0_5ci9n5swtPJSI49BEDSl7flhrWHOJMzSYCx77hi9OS-B2c5p9N6LRy8Dwe1PIVd8a4sJQTsE1YKyPzq7Rfu0pWQSB8QbMgMIyi3CwSavFHGadFfPVpa4Dsv7x84c80";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}