/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/



/*--------------------------------------------*/
/*---> JUKEBOX CLASS <------------------------*/
/*--------------------------------------------*/

function Jukebox(){
	this.songs = [];
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
		this.songs.push(songs[s]);
	}
}

