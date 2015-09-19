function Song(title, artist, genre, userID){
	this.title = title;
	this.artist = artist;
	this.genre = genre;
	this.users = [];
	this.users.push(userID);
}

Song.prototype.toString = function(){
	return '[' + this.users.length + '] ' + this.title + ' by ' + this.artist + ' (' + this.genre + ')';
}
