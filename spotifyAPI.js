var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQCdHg7WTecfv7dylkJwax0etewJgtNo1PQV6G3gnE5a1ZCZkDgNj3gUAWF62NAP7nkK3CFwSJIftI7zCxTuPcij6FwzYgMruhts6HOYsBzh2yyJRidtnMU-bq6SU7HmASQ0kcKtXu0qzS3fkLmB-KzWFNAaYoRXjiPfbsxl_6qk-uJB8s-iFN8L_m-PT3O22iMJ99-__BiQPMwWpkMWxmRvIC2yNn2Fx4yMhQ-vUSNJ9rOXa15lqs3KczJsNhiyIBxwxaRuMjkuTrsQzKoGShE7-Lum2kyhTbHJnlJ90RE";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}