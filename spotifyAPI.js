var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";
var bearer = "BQC3keC-OvmBY3_IIcJwFgNtWcOO620J6YZwY5aTPNdmGEWXVazZdK7gIKMrQtf5uIKUvLf37wKtZPInNjzSMvyDFfshV6ei5RhEkjxvLr6EsT7mtNo8PXELgpikDVi8lv69SugiX1RBzuQ5TRIOViP9COj3MaO4ozsIvS7ait4LwqzbBmTsig3b7B0fLrsQGBI8590ooM8pKdQfEa3MNb_ZCEe9NmIcIfXAqhzEv-Se-pHUBB_PuISFA5nL_Ydnz_4y8hGq7ePFtU6-agey3z6MmjuE4PFSrGdIh0eQcK0";

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}