var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQCVi2PAIenS9CMhWDh6S6V5xykHzOWibmbOYBnVBWITzJbSE8aaS7BqcxRH9qprxyUNrwejwLF5SCZycOHYN-uGFV66sYlfUNr_0AnUHVs7C71kWhFkU9njaGp9kkcl20nJdCGhMk-xdZxo29uC0rXBlbUia5A8itNcH31d6f_jgiBVIpnTd8w5YXxaer_H9Ym1WDpZePWwYsR9C0b9pBvy-39GDQO0jvi1ZNr9cmmh-Z9wXCjoVLyUuu8dmb6m2nJUBK84dqW2FKlilvMN1OWWQ_LOijQ5kKW4lgkuGcs";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}

function sendToPlayer(trackID){
	var player = document.getElementById('player');
	var iframe = '<iframe class="iframePlayer" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + trackID + '" frameborder="0" allowtransparency="true"></iframe>';
	player.innerHTML += iframe;
}

function getTrackData(data){
	return {
		'id': data.id,
		'title': data.name,
		'artists': data.artists[0].name,
		'popularity': data.popularity,
		'genre': 'genre'
	};
}

function handleTrackData(trackData){
	sendToPlayer(trackData.id);
	var song = dataToSong(trackData);
	jukebox.addSongs([song]);
	jukebox.sort();
	var rankings = document.getElementById('rankings');
	rankings.innerHTML = jukebox.toHTML();
}

function getTrack(trackID){
	$.ajax({
		url: spotifyBase + 'v1/tracks/' + trackID,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + bearer)
		},
		success: function(data){
			var trackData = getTrackData(data);
			serveData(trackData);
			handleTrackData(trackData);
		}
	});
}