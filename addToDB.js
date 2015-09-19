var tracks = new Firebase('https://crackling-fire-7290.firebaseio.com/');

function alreadyExistsCallBack(nTrck, exists) {
    if (exists) {
            tracks.set({
                tracks.child(nTrck['id']): {
                    tracks.child(nTrck['id'])['users'].push(nTrck['users'][0]);
                    tracks.child(nTrck['id'])['score']: tracks.child(nTrck['id'])['score'] + nTrck['score'];
                }
            });
            
        } else {
            tracks.push(nTrck);
        }
}

function addTrackToDB(nTrck) {
    tracks.child(nTrck['id']).once('value', function(snapshot)) {
        var exists = (snapshot.val() != null);
        alreadyExistsCallBack(nTrck, exists);
});
}