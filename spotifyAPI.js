var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";

var bearer = "BQDawMlUnY_9vU8dRu-7C9UGjQeIdZa5EWIXGHhdhEOfA2Yap3Wyf3k-7PVAtvrWcWoUMI3Al66FVJ9CSX7DbiyjTm6qQAIZBWiPJiU7vNtvZGwI4IfAYnUGLRMZSBsYfZ6S9slWdUIxPeWZ7CuUrTIjKCHEWGTHta03rlew1ls7AyjjHY3Hrg7uQDqGz4NKWipIIPHujoXppOi646Khwe7bd5G3XpmssrJ3SM51oXKJ53NChKLftMwO1_F2WV-Cyjri_cv2mhZgXeX803wKkcnPCa6iv8q6-plHg-Gq8KxY";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}