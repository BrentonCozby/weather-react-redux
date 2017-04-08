import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

    renderWeather = ({ city, list }) => {
        const temps = list.map(weather => {
            // convert from Kelvin to Fahrenheit
            return weather.main.temp * 9/5 - 459.67
        })
        const pressures = list.map(weather => weather.main.pressure)
        const humidities = list.map(weather => weather.main.humidity)
        const { lat, lon } = city.coord

        return (
            <tr className="city-row" key={city.name}>
                <td className="city-name"><GoogleMap lat={lat} lon={lon} /></td>
                <td className="city-chart"><Chart data={temps} color="red" units="°F" /></td>
                <td className="city-chart"><Chart data={pressures} color="green" units="hPa" /></td>
                <td className="city-chart"><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="WeatherList">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)
