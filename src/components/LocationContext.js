import React from 'react';
import Place from '../js/place';

async function getLocation() {
    let place = new Place();
    
    const position = await place.getMyLocation();
    return position;
}

export const LocationContext = React.createContext();

export class LocationProvider extends React.Component {

    state = {
        position: null
    }

    componentDidMount() {
        getLocation().then( response => {
            let { latitude, longitude } = response.coords;
            this.setState({ position: [latitude, longitude] });
        });
    }

    render () {
        return (
            <LocationContext.Provider value={this.state}>
                { this.props.children }
            </LocationContext.Provider>
        )
    }
}