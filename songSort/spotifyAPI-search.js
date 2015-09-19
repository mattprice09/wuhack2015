function chooseFromResults(data){
	console.log(data)
	console.log(data.tracks)
	console.log(data.tracks.items[0])
	return data.tracks[0];
}

function getSearchData(data){
	var bestResult = chooseFromResults(data);
	console.log(bestResult);
	return {
		'id': 0
	};
}

function handleSearchData(searchData){

}

function getSearch(query, type){
	$.ajax({
		url: spotifyBase + 'v1/search?q=' + query + '&type=' + type,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + bearer)
		},
		success: function(data){
			console.log(data);
			var searchData = getSearchData(data);
			serveData(searchData);
			handleSearchData(searchData);
		}
	});
}

getSearch('uptown+funk', 'track')