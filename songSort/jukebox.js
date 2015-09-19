/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/

/*
* This function can be passed into a sort function as a comparator when sorting an array of songs
* Ex) var songs = [song1, song2, song3];
*     songs.sort(sortSongsByScores);
*     RESULT: [song2, song3, song1];
*/
function sortSongsByScores(song1, song2){
	return song2.getScore() - song1.getScore();
}

/*--------------------------------------------*/
/*---> JUKEBOX CLASS <------------------------*/
/*--------------------------------------------*/

function Jukebox(){
	this.songs = [];
}

Jukebox.prototype.sort = function(){
	this.songs.sort(function(a, b){
		return sortSongsByScores(a, b);
	});
}

/*
* Song song: check jukebox for matches of this song
*/
Jukebox.prototype.addToExistingSong = function(newSong){
	var songExists = false;
	for(var s = 0; s < this.songs.length; s++){
		if(this.songs[s].getID() == newSong.getID()){
			this.songs[s].addUsers([newSong.getUsers()[0]]);
			this.songs[s].calculateScore();
			songExists = true;
		}
	}
	return songExists;
}

Jukebox.prototype.toHTML = function(){
	var listItems = "";
	for(var s = 0; s < this.songs.length; s++){
		listItems += '<li>' + this.songs[s] + '</li>';
	}
	return listItems;
}

Jukebox.prototype.toString = function(){
	var string = "";
	for(var s = 0; s < this.songs.length; s++){
		string += this.songs[s] + '<br>';
	}
	return string;
}

/*--------------------------------------------*/
/*---> GETTERS & SETTERS <--------------------*/
/*--------------------------------------------*/

Jukebox.prototype.getSongs = function(){
	return this.songs;
}

/*
* Note that songs is an array of songs, be sure to wrap in [] brackets, even when pushing only a single songs
*/
Jukebox.prototype.addSongs = function(songs){
	for(var s = 0; s < songs.length; s++){
		var songExists = this.addToExistingSong(songs[s]);
		if(!songExists){
			this.songs.push(songs[s]);
		}
	}
}

