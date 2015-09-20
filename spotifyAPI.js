var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQDZ4sms5HMKb6gCTqyDSphMbDclpX6TgzGvZQ7IIvdi_P-bIvjhwRkUKCZ4fgInQ6VFIzTLGnh0y7wW57r17sDzEKaY-d5hkRpkhGifSNl5Us_37QnKn6nfL_8bvu-3N100HuvWpmY126Sdin9YhS2SYTuAGHKOMLEnWReG3fjJ9sF2AuxlLPdA6lViTls4J02M5u6GMiRpPRyLpYULrN9c4Wo4QWHbVrM1eO2Q-ViQVm0zwkGr0SQumzhvtDrX1Fo938GUeLxCMia4i6_udnNk8MPF-nUZNAFFCHCngds";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}