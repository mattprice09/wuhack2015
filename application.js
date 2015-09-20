/* DB API */
// get a reference of the database
var ref = new Firebase("https://amber-torch-7758.firebaseio.com");
var songsRef = new Firebase("https://amber-torch-7758.firebaseio.com/jukebox");
var jukeboxID;

// Increments the Jukebox ID counter in the database
var incrementID = function() {
    songsRef.child("id").once("value", function(data) {
        songsRef.update({"id": data.val() + 1});
    });
};

// Sets jukeboxID global variable to hexademical String ID value
var getNewID = function() {
    ref.child("id").once("value", function(data) {
       jukeboxID = data.val().toString(16);
    });
};

// NEED TO ADD A PARAMETER AND ACCESS IT
var fetchID = function() {
    ref.child("id").once("value", function(data) {
        if (data != null) {
            return data.val().toString(16);
        } else return null;
    });
}

var createJukebox = function() {
    getNewID();
    incrementID();
};

var joinJukebox = function(jbID) {
    jukeboxID = jbID;
};

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
        song = dataToSong(snapshot.val());
        song.isQuery = false;
        jukebox.addSongs([song]);
    });
};

// Update all when value is changed
ref.on("value", function(snapshot) {
//    console.log("This is the snapshot of songs");
    var snapshotObj = snapshot.child("jukebox").val();
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

function setIDnum() {
    ref.child("jukebox").set({
        "name" : jukebox.name
    });
}