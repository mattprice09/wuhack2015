function createPlaylist(eventTitle){
	$.ajax({
		type: "POST",
		url: spotifyBase + 'v1/users/unisound.wuhack2015/playlists/',
		data: {
				"name": eventTitle,
				"public": true
			},
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + bearer)
			
		},
		success: function(data){
			console.log(data);
		}
	});
}