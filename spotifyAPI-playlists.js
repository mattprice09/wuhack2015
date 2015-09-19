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

function getPlaylist(ownerID, playlistID){
	$.ajax({
		type: "POST",
		url: spotifyBase + 'v1/users/' + ownerID + '/playlists/' + playlistID + '?market=ES',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + bearer)
			
		},
		success: function(data){
			console.log(data);
		}
	});
}

var owner = "1285594060";
var playlist = "2r7tkFG3aLznuVaLTyaIcb";
getPlaylist(owner, playlist);