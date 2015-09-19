function postTrack(trackID){
	//alert("POST: " + trackID + " TO SERVER.");

	var track = getTrack(trackID);
	addTrackToDB();
}