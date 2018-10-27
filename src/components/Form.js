import React from 'react';

const Form = props => {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <button className="button-weather">Get Weather</button>
        </form>
    );
}

export default Form;