import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }
  compondendWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
     return (
       <div>
        <h1>IMDB Clone </h1>
        { <h2>{this.state.date.toLocaleTimeString()}.</h2> }
      </div>
     );
  }
}

export default App;
