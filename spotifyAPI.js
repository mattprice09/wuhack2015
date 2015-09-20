var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQBtOwIfkpXF1S0ksbI3PnhNNAXHk0ih68XybeAr1OHXsDFYgN5RRpP7DEQjNFMnL5fEMyVRGZCDWFSDD1t7kVaqLVJUY86mVLZeOKGumJzlP_BhZL6UmldHkJMfWNRL5kGSBGUN6AIolL";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}