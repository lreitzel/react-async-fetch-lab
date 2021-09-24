// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        astronauts: []
    }

    render() {
        return(
        <div>
            {this.state.astronauts.map((astronaut) => <h1>{astronaut.name}</h1>)}
        </div>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(({people}) => this.setState({astronauts: people}))
    }


}
