function sendToPlayer(trackID){
	var player = document.getElementById('player');
	var iframe = '<iframe class="iframePlayer" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + trackID + '" frameborder="0" allowtransparency="true"></iframe>';
	player.innerHTML += iframe;
}

function getSongPlayer(trackID){
	var iframe = '<iframe class="iframePlayer" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + trackID + '" frameborder="0" allowtransparency="true"></iframe>';
	return iframe;
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