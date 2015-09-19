/*
* StackOverflow Link: http://stackoverflow.com/questions/391979/get-client-ip-using-just-javascript
*/
function getDeviceIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ){
        	document.getElementById('userID').innerHTML = ipAddress[1];
        	return ipAddress[1];
        }
    }

    return false;
}