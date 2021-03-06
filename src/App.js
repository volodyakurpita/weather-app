import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "ccac5f4754d1db7990a606377dbf4b32";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && data.cod !== '404') {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        error: "",
      });
      } else {
        this.setState({
          city: undefined,
          temperature: undefined,
          humidity: undefined,
          pressure: undefined,
          description: undefined,
          error: data.cod === '404' ? "Not found this city" : "Please enter your city",
      });
    } 
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="root">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;