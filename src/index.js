import './index.css';

import Place from './js/place';
import WindChart from './js/chart';

(function() {

    if (!"geolocation" in navigator) {
    let div = document.createElement('div').classList.add('alert-warn');
    div.innerHTML = `Location isn't supported`
    document.body.appendChild(div);
    }
    else {
        const place = new Place();

        document.querySelector('#msg-box').innerHTML = 'Location Found, Getting Weather...'

        setTimeout( () => {
            place.getCurrentWeather()
            .then(response => console.log(response))
            .catch(error => console.log(error));
        
            place.getFiveDay()
            .then(response => {
                console.log(response);
                let windChart = new WindChart(null, response.list, {});
            })
            .catch(error => console.log(error));
        }, 1000);
    }
}());