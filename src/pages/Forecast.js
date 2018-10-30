import React from 'react';
import { withLocation } from '../components/LocationContext';
import { useFetchDailyForecast } from '../effects/useFetchForecast';

function Forecast(props) {
    const weather = useFetchDailyForecast(props.location);
    return <div>{props.location}</div>;
}

export default withLocation(Forecast);