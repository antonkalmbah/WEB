import React from "react";
import { connect } from "react-redux";

class ReduxApp extends React.Component {

    addLibrary() {
        console.log('action done')
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.inputValue = input }} />
                <button onclick={this.addLibrary.bind(this)}> Click me</button>
                <ul>
                    {this.props.tetsStore.map(item =>
                        <li key = "item">{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

connect(
    //mapStateToProps
    state => ({
        testStore: state
    }),

    //mapDispatchToProps
    dispatch => ({})
)()

export default ReduxApp;