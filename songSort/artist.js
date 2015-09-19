/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/

function dataToArtist(artistData){
	var song = new Song(
		artistData.id,
		artistData.name,
		artistData.genres[0]
	);
	// ADD SPOTIFY GOODIES
	artist.popularity = artistData.popularity;
	return artist;
}

/*--------------------------------------------*/
/*---> ARTIST CLASS <-------------------------*/
/*--------------------------------------------*/

function Artist(id, name, genre){
	this.id = id;
	this.name = name;
	this.genre = genre;
	// FROM SPOTIFY
	this.popularity = 0;
	// FROM SPOTIFY
}

Artist.prototype.toString = function(){
	return '[' + this.popularity + ']' + this.name + '(' + this.genre + ')';
}

/*--------------------------------------------*/
/*---> GETTERS & SETTERS <--------------------*/
/*--------------------------------------------*/

