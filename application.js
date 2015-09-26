/* DB API */
// get a reference of the database
var ref = new Firebase("https://amber-torch-7758.firebaseio.com");

var jukeboxID = "";

// Increments the Jukebox ID counter in the database
var incrementID = function() {
    ref.child("id").once("value", function(data) {
        ref.update({"id": data.val() + 1});
    });
};

// Sets jukeboxID global variable to hexademical String ID value
function getNewID() {
    ref.child("id").once("value", function(data) {
       jukeboxID = data.val().toString(16);
    });
};



// Returns name of the Jukebox with JukeID input
var fetchName = function(jukeID) {
    var toReturn;
    ref.on("child_added", function(snapshot) {
        if (snapshot.child("boxID").val() == jukeID) {
            toReturn = snapshot.child("name").val();
        }
    });
    return toReturn;
}

var addUser = function(songID) {
    ref.child(fetchName(jukebox.partyID)).child("songs").child(songID).once("value", function(data) {
        ref.child(fetchName(jukebox.partyID)).child("songs").update({users: data.child("users").val() + 1});
    });
}


// Instantiates jukebox in database
var createJukebox = function() {

    window.location = 'host.html';

    console.log("id: " + jukeboxID);

    var jbName = prompt("Enter your party's name:");

    ref.child(jbName).update({
        "name": jbName,
        "boxID": jukeboxID
    });

    jukebox = new Jukebox(jbName, jukeboxID);

    alert("Your party ID is: " + jukebox.id);

    incrementID();
    readAll();
    
};

var joinJukebox = function(jbID) {
    jukebox.id = jbID;
};

// add song method
var addSong = function(songJSON) {
    songRef = ref.child(fetchName(jukebox.partyID)).child("songs").child(songJSON.id);
    songRef.set(songJSON);
};

// delete a song from the list
var deleteSong = function(songID) { 
    ref.child(fetchName(jukebox.partyID)).child("songs").child(songID).remove();
};

var update = function(songID, key, value) {
    ref.child(fetchName(jukebox.partyID)).child("songs").child(songID).child(key).set(value);
};

// read all objects from the database and also continuously read when a Song is added
var readAll = function(callback) {
    // continuously update when a song is added
    ref.child(fetchName(jukebox.partyID)).child("songs").on("child_added", function(snapshot) {
        song = dataToSong(snapshot.val());
        console.log(snapshot.val());
        song.isQuery = false;
        jukebox.addSongs([song]);
    });

    // continuously update when there is an upvote
    ref.child(fetchName(jukebox.partyID)).on("value", function(snapshot) {
    console.log(snapshot.val());
    var snapshotObj = snapshot.child("songs").val();
    var songs = [];
    for (var key in snapshotObj) {
    if (snapshotObj.hasOwnProperty(key)) {
        snapshotObj[key].isQuery = false;
        songs.push(dataToSong(snapshotObj[key]));
    }
    }
    
    jukebox.addSongs(songs, snapshot.val());

    }, function(errorObject) {
        console.log("The read failed");
    });
};

/**var updateAll = function(callback) {
    songsRef.on("child_changed", function(snapshot) {
        song = dataToSong(snapshot.val());
        song.isQuery = false;
        jukebox.addSongs([song]);
    }
}*/

function getSongJSON(trackID){
    for(var s = 0; s < jukebox.getSongs().length; s++){
	if(jukebox.getSongs()[s].getID() == trackID){
	    return jukebox.getSongs()[s];
	}
    }
}


function postTrack(trackID){
    var json = getSongJSON(trackID);
    json.isQuery = false;
    addSong(json);
}
