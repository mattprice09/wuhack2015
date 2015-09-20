function getSongJSON(trackID){
    for(var s = 0; s < jukebox.getSongs().length; s++){
	if(jukebox.getSongs()[s].getID() == trackID){
	    return JSON.stringify(jukebox.getSongs()[s]);
	}
    }
}

function postTrack(trackID){
    //alert("POST: " + trackID + " TO SERVER.");
    var track = getTrack(trackID);
    addTrackToDB();
    var json = getSongJSON(trackID);
    alert("POST: " + json + " TO SERVER.");
}

// get a reference of the database
var ref = new Firebase("https://amber-torch-7758.firebaseio.com");

// add song method
var addSong = function(songJSON) {
    songRef = ref.child(songJSON.id);
    songRef.set(songJSON);
};

// delete a song from the list
var deleteSong = function(songID) { 
    ref.child(songID).remove();
};

var update = function(songID, key, value) {
    ref.child(songID).child(key).set(value);
};

// read all objects from the database at once
var readAll = function(callback) {
    ref.once("value", callback);
};
