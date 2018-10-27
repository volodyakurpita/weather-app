import React from 'react';

const Weather = props => {
    return(
        <div className="weather_info">
        { 
            props.city && <p className="weather_key">Location: 
                <span className="weather_value">{ props.city }</span>
            </p> 
        }
        { 
            props.temperature && <p className="weather_key">Temperature:  
                <span className="weather_value">{ props.temperature } &#8451;</span>
            </p> 
        }
        { 
            props.humidity && <p className="weather_key">Humidity:  
                <span className="weather_value">{ props.humidity } %</span>
            </p> 
        } 
        { 
            props.pressure && <p className="weather_key">Pressure:  
                <span className="weather_value">{ props.pressure } mm</span>
            </p> 
        }
        { 
            props.description && <p className="weather_key">Description:  
                <span className="weather_value">{ props.description }</span>
            </p> 
        }
        { 
            props.error && <p className="weather_error">
                <span>{ props.error }</span>
            </p> 
        }
        </div>
        );
}

export default Weather;