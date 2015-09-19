/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/

/*
* Global weighting values for calculating song scores
*/
var WEIGHT = {
	'VOTES': 2.0,
	'FAIRNESS': 1.2
};

/*
* This function can be passed into a sort function as a comparator when sorting an array of songs
* Ex) var songs = [song1, song2, song3];
*     songs.sort(sortSongsByScores);
*     RESULT: [song2, song3, song1];
*/
function sortSongsByScores(song1, song2){
	return song1.getScore() - song2.getScore();
}

/*--------------------------------------------*/
/*---> SONG CLASS <---------------------------*/
/*--------------------------------------------*/

function Song(title, artist, genre, userID){
	// Input  Variables
	this.title = title;
	this.artist = artist;
	this.genre = genre;
	this.users = [];
	this.users.push(userID || 'anonUser');
	this.score = 0;
}

Song.prototype.calculateScore = function(){

}

Song.prototype.toString = function(){
	return '[' + this.users.length + '] ' + this.title + ' by ' + this.artist + ' (' + this.genre + ')';
}

/*--------------------------------------------*/
/*---> GETTERS & SETTERS <--------------------*/
/*--------------------------------------------*/

Song.prototype.getTitle = function(){
	return this.title;
}

Song.prototype.setTitle = function(title){
	this.title = title;
}

Song.prototype.getArtist = function(){
	return this.artist;
}

Song.prototype.setArtist = function(artist){
	this.artist = artist;
}

Song.prototype.getGenre = function(){
	return this.genre;
}

Song.prototype.setGenre = function(){
	this.genre = genre;
}

Song.prototype.getUsers = function(){
	return this.users;
}

/*
* Note that userID is an array of userIDs, be sure to wrap in [] brackets, even when pushing only a single userID
*/
Song.prototype.addUser = function(userID){
	for(var u = 0; u < userID.length; u++){
		this.users.push(userID[u]);
	}
}

Song.prototype.getScore = function(){
	return this.score;
}

Song.prototype.setScore = function(score){
	this.score = score;
}
