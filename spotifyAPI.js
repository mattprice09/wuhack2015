var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQDuYYT0PenIDZBucwETH9uksuUzd4S9Twl7WR8Zsch5zKX9r141tR-hNH33wIYcC-LkYUgz4TFuz__cpUSiHpgkc13afbAm18TzLB_OU1ctwDAcfKgtd3jgFeoD4fEaoZeStfw083wJUjnMI6FsSzY2fZ3DrmstF9HFqmtkEl0qfFYbjzagCNMN3QiJT4toQyWnfoapEiuvA-e9RO97hbZ6G5hkXc0Vp-gv5pgovByseBW2RlX4uwcpJEHUmyoI4X6FF-yVswDsufWob7l4WvV1Bvt_SMVi11bqn7L0E0au";


function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}