export default class Place {
    
    constructor(latitude=null, longitude=null) { }

    getMyLocation = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}