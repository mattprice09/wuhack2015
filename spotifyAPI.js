var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQD2OYkUF5PDhNqFIMYHQyExbQo-A3LZfWFe6LZigcL8IFpVYc4-qJBeNTTFhtC0v6ZFoPBPka-nVwuHgj1BS7sTV8FyLnGyjGt8WF6ZGIGRlUBlFjzIn3XSsEDVuzN0dPAOgZxUZV1tfCT4dwygyL6ZRLeyEbVzka9N6SEnq1ptkuDeUHn3pwnYiQvcNOetoB_jsa7dgkUzg38Bgym_MoxJsP-ulXWOfgfsEYngvSwBKMq11N5MUp-5Bwuy4hJrpHbjzkC0Yh-xwkkDOBa-ou6vwkN7-tr-rYOK3ZIYnNs";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}