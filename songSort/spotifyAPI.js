var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQC65ap1YKqT7yUSOGWZZ0_drwd1DzLtX2dhPTKSjMp5qhvnIJds-fzCbKV4RNnQB86BlAxsBiZrSFPK_1U96qiSpcMyCdGXoW4kW6D9ZArEcJLjd0BarL4sTlP_eB0A2tosIKcp5VkiVVJB77fexNTV21eCFqW_XnDbw6qaQtCOQXUixpbe32gwixFP-e8_yzVqqlMlnopN9teLDMkPvZYZsR1BJU9iOPk8NbLqtFsiNJE4fougiVVV3BvvQogOTiyUWGXyJthxYynGG3dmz_mcvMKnxYR-nbbl587uBVo";

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
		'genre': data.artists[0].genre[0];
	};
}

function handleTrackData(trackData){
	sendToPlayer(trackData.id);
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