document.addEventListener("DOMContentLoaded", function (event) {

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }

        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
        xmlHttp.send();
    }

    // Test to see if the 502 Bad Gateway is related to the script being ran locally.
    httpGetAsync('http://services.runescape.com/m=hiscore/index_lite.ws?player=coachii', function(data) { console.log(data); });
});