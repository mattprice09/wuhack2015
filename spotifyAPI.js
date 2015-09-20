var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQBj_DIwAAmI5U6sRAEMBoZaDu0njTEHKzgw3Aav82sEXdjGjGU3IsGZnIYHaoGGHLZRntOj3Tj9HUo3sxK9a8-PQlbli3I1eaXtjJbB2BQ84ocXpRTF1tvj7zN7-3VptA8q-RvMx74LSohf8-yeBlR71YYGh7z-WNcqkhx4KbAmnrudAk2XciLRXqEFdYkPODCnxauqycQzMUce0othZl_1mP1qk5Zqo2K97PYsVw7TU3WN3z6-0nEtg95h_taOH3Wit0kCLCzZYnQM64iitboLeBzLdxTOn_dFwolxCjQ";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}