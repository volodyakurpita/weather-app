import React from 'react';

const Weather = props => {
    return(
        <div>
        { props.city && <p>Location : { props.city }</p> }
        { props.temperature && <p>Temperature : { props.temperature } &#8451;</p> }
        { props.humidity && <p>Humidity : { props.humidity } %</p> } 
        { props.pressure && <p>Pressure : { props.pressure } mm</p> }
        { props.description && <p>Description : { props.description }</p> }
        { props.error && <p>{ props.error }</p> }
        </div>
        );
}

export default Weather;