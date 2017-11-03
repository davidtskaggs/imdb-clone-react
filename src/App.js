import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {movieResult: {},
    date: new Date()};

    this.updateResult = this.updateResult.bind(this);
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
  updateResult(newResult) {
    this.setState({movieResult: newResult});
  }
  render() {
    return (
      <div>
        <h1>IMDB Clone </h1>
        { <h2>{this.state.date.toLocaleTimeString()}.</h2> }
        <Search onUpdate={this.updateResult} />
        <Result resultData={JSON.stringify(this.state.movieResult.name)} />
      </div>
    );
  }
}
export default App;
