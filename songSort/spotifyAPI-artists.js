function getArtistData(data){
	return {
		'id': data.id,
		'name': data.name,
		'genre': data.genres[0]
	};
}

function handleArtistData(artistData){

}

function getArtist(artistID){
	$.ajax({
		url: spotifyBase + 'v1/artists/' + artistID,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + bearer)
		},
		success: function(data){
			var artistData = getArtistData(data);
			serveData(artistData);
			handleArtistData(artistData);
		}
	});
}