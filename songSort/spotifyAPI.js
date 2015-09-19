var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQDFre31Y3XLOb7_vARC0-nXIE9PS2fBMDFoc36vl6weySfTalxJS3Ok5KEfbw6E5XrnsTLg5gdRAKAtzDS4kD98VN43BRN_dLg_DTsMOUhUjMWVF_npqdc7JKfcHCUroAIPEYO4FV2hof86-0AHhbyerm49xx89vXDT6dVPqDnQKVc5_mSpYXNBSwVW7h6k5OsoJWkrSjjoDyu17YqElxvBx7Z0A-fCVMATEFdJqo2pUWPnLIvwC6KxXn0dpUjwiAuR6wwiyTCkB8bP0-53p0gJU7JJ1OFiD-buKKhq4zo";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}