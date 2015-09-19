function getSearchData(data){
	return {
		'id': 0
	};
}

function handleSearchData(searchData){

}

function getSearch(query, type){
	$.ajax({
		url: spotifyBase + 'v1/search?q=/' + query + '&type=' + type,
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