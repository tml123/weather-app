import './index.css';

(function() {

    if (!"geolocation" in navigator) {
    let div = document.createElement('div').classList.add('alert-warn');
    div.innerHTML = 'We have no idea where you are'
    document.body.appendChild(div);
    }
    else {
        getMyLocation(document.querySelector('#msg-box'));
    }
}());

function $id(id) {
    return document.getElementById(id);
}

function loadHTML(url, id) {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
        $id(id).insertAdjacentHTML('afterbegin', req.responseText);
    };
}

function getMyLocation(element) {

    function success(position) {
        let { latitude, longitude } = position.coords;
        element.innerHTML = `We know where you are: ${latitude}, ${longitude}`;
        //getCurrentWeather(latitude, longitude);
    }

    function error() {
        console.log('Failed to retrieve your location')
    }

    navigator.geolocation.getCurrentPosition(success, error);
}