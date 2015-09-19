var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQC1XmFfKZy4gTXTTbQ53m3zoAunu0blkpCTIvkKWWqloWviOTa_zY8iA1aC2CzFx6CCDdJ_wsDXPFE52nxKEHnnM1fvZAwxUKUJHcfkd3gs0INWr5QDZO8Pv0-K1JRAIKPzeT9_q19bpHpjpY_ct8XETI0NrBFJmwdrdp_rpKF-PSaOu7ErVSWSnHI1m-Ily95OAqZUd07RsR8RhXu6FVtaS8FhcjUE8jjXGTPWSXlCvLfnzsACY6DLX5v7f8n9J27raesw4lHn2-18YbkWZYNoy51TchOT44wzO1d3wK4";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}