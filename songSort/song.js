function Song(title, artist, genre){
	this.title = title;
	this.artist = artist;
	this.genre = genre;
	this.users = 1;
}

Song.prototype.toString = function(){
	return '[' + this.users + '] ' + this.title + ' by ' + this.artist + ' (' + this.genre + ')';
}
