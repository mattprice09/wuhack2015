var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQB-J-_yYfrJ4tLlqnh8bMz3Ae2vzhJZVYNqIdcjfpAYRG1ptJpfhpvy_z4VCUw9oDwy3Lf2XZyV87HaLv7sl64IfT9pUpZGXycEx3C2O9s9zVk8sR46E723NeX3KVU9ryWIHUPmfBUpzovSPhGmdxscQaiEkzdK5TXn4KzlNQnnysou8Bnc9bdeOOG4ah3r-onkAQmvPhcRpImY5fVzFakfJVD9jYE1L0BUcLdoINbhTH_7hh9rnpPraG6we7vqPkT8mp3GAF_hPgCaenJI2lOSJyvFH3zt-wX8ozEHP1A";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}