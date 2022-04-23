import React, { Component } from 'react';


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidCatch() {
        fetch ('https://api.openweathermap.org/data/2.5/weather?lat=47&lon=39&appid=5630f982f691a70c02164b3cca188635')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    item: result.sys
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        )
    }

    render() {
        const {error, items} = this.state;
        if (error) {
            return <p> Error {error.message} </p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.country}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

// https://api.openweathermap.org/data/2.5/weather?lat=47&lon=39&appid=5630f982f691a70c02164b3cca188635
