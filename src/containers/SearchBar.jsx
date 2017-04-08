import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWeather } from '../actions/index'

class SearchBar extends Component {

    state = { term: '' }

    componentDidMount() {
        this.searchInput.focus()
    }

    onInputChange = (e) => { this.setState({ term: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.getWeather(this.state.term)
        this.setState({ term: '' })
    }

    render() {
        return (
            <form className="SearchBar" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Get a 5-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    ref={(input) => {this.searchInput = input}}
                />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
