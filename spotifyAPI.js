var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQBKZp8acUvRk3JIVvQhFmriIyWdwwG13jr8XtJgNQ3E8AQkoWJHqHq7LeKiso4WgPVI3Yo4KQih7td26U3_51AYkoRTq2DX854PI-ov8hLldCRSck3lbq6w2UJE6buRcleWQOGpyVdw1Ctb9OKchvi8VUSlpFIk8u6Xw-LjRTAwOsmZTVLRCVfMDO_-MjnViU-mPm08IlQhJb9aw-kxRjgGnADkdyRk7d-U_Lx9lbdltUOQ9jbeonZkFrNuEKjQ__cTBesXQqSZU-Il1B1ihkZmwQx8YQAtMyyJfeassIpe";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}