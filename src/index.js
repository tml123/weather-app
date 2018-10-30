import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { LocationProvider } from './components/LocationContext';
import Forecast from './pages/Forecast';

const App = () => {
    return (
        <LocationProvider>
            <Forecast />
        </LocationProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));