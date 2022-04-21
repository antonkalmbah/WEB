import React from "react";


class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    // Вызывается после монтирования компонента
    componentDidMount() { 
        this.timerID = setInterval( 
            () => this.tick(),
            1000
        );
    }

    // Вызывается перед размонтированием компонента
    componentWillUnmount(){
        // функция для остановки таймера
        clearInterval(this.timerID);
    }

    // в методе tick обновляет время в состоянии компонента;
    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  export default Clock;