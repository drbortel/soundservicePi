var container = document.getElementById('container');
container.addEventListener('click', sendSoundRequest);

function sendSoundRequest(e) {
	getRequest('/api/sounds/' + e.target.value);
}

function getRequest(url){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                document.body.className = 'ok';
            } else {
                document.body.className = 'error';
            }
        }
    };
    request.open("GET", url , true);
    request.send(null);
}