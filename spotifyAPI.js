var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQCITnARMXmzDSvXkCygcKr6YRPKHc3dO3a-LNQgxAkRyHdKzv8SAEqBxl0QbwfWvXiPxdUSP_Fw9cA6f_QOuzUW9KyWYn_lg05pAA6FWBdZhsg4jz58Fthve9USTXG-OUqponeGyjYmf9qg3LxJv4QXT3z2FEjMEEDBTRqEIEtniPPY3ipQpmAIKD48MwH76Da_pQRxbtvQ936CYh3ETGOjhnj39ttOk84SmFEYjYGsUye868z_GnERjKXIl2YRgrfQ3Cc61FKfmkzpyND4wR8ko8n0vvllu6ObtnzSDm3g";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}