/* DB API */
// get a reference of the database
var ref = new Firebase("https://amber-torch-7758.firebaseio.com");
var DBRef = new Firebase("https://amber-torch-7758.firebaseio.com/songs");

// init
var initID = function() {
    ref.update({"id": 1});
};

var increamentID = function() {
    ref.child("id").once("value", function(data) {
	console.log(data.val());
	ref.update({"id": data.val() + 1});
    });
};

initID();
increamentID();
increamentID();
increamentID();

// add song method
var addSong = function(songJSON) {
    songRef = ref.child("jukebox").child(songJSON.id);
    songRef.set(songJSON);
};

// delete a song from the list
var deleteSong = function(songID) { 
    ref.child("jukebox").child(songID).remove();
};

var update = function(songID, key, value) {
    ref.child("jukebox").child(songID).child(key).set(value);
};

// read all objects from the database and also continuously read when a Song is added
var readAll = function(callback) {
    songsRef.on("child_added", function(snapshot) {
        song = datatoSong(snapshot.val());
        song.isQuery = false;
        jukebox.addSongs([song]);
    });
};

// add jukebox
var addJukebox = function() {

};





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

    songs[0].isQuery = false;
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
