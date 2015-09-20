/* DB API */
// get a reference of the database
var ref = new Firebase("https://amber-torch-7758.firebaseio.com");
var songsRef = new Firebase("https://amber-torch-7758.firebaseio.com/songs");

// add song method
var addSong = function(songJSON) {
    songRef = ref.child("songs").child(songJSON.id);
    songRef.set(songJSON);
};

// delete a song from the list
var deleteSong = function(songID) { 
    ref.child("songs").child(songID).remove();
};

var update = function(songID, key, value) {
    ref.child("songs").child(songID).child(key).set(value);
};

// read all objects from the database and also continuously read when a Song is added
var readAll = function(callback) {
    songsRef.on("child_added", function(snapshot) {
        jukebox.addSongs([dataToSong(snapshot.val())]);
    });
};

/*var updateAll = function(callback) {
    ref.on("value", function(snapshot)) {
        Console.log(snapshot);
    }
};*/

// Update all when value is changed
ref.on("value", function(snapshot) {
//    console.log("This is the snapshot of songs");
    var snapshotObj = snapshot.child("songs").val();
    var songs = [];
    for (var key in snapshotObj) {
	if (snapshotObj.hasOwnProperty(key)) {
	    songs.push(dataToSong(snapshotObj[key]));
	}
    }
    console.log("......this is the one");

    jukebox.addSongs(songs);

}, function(errorObject) {
    console.log("The read failed");
});

function getSongJSON(trackID){
    for(var s = 0; s < jukebox.getSongs().length; s++){
	if(jukebox.getSongs()[s].getID() == trackID){
	    return jukebox.getSongs()[s];
	}
    }
}

// write a track to the DB
function postTrack(trackID){
    var json = getSongJSON(trackID);
    json.isQuery = false;
    addSong(json);
}
