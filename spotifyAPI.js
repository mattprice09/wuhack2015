var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQCSiLEnnqyuPRP-1_z2AX9AumxkdiclA-_zYuLC2oYJ3WTI5Dl_D3oKpTRZ6TpccDx-N7iq7fu5c9u2_hPDQQA2p4xd9P17SDd_6RafVEZxhmcqLUuAxOFyezYpIHeGLne6cNmCfixFlb9x1lQbD2t99-UXBR0RlZ5hMPj9K1sqdfaMbHBkauqIrdEZNMHeZAaOps1yMtS_inujYJo7b5aqhY4DPjxp_pwcjOTwgN_w-Yjx1KvL-3v-wWsMLC1uzAD_SI9SsMEPWPlVMg1ii86QJHB0hBf8bitjpR2VD2U";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}