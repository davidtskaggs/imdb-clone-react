import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://api.themoviedb.org/3/search/company?api_key=c0e6cd3e6ce3c656b434f13a125ec931&query=' + this.state.value)
    .then(
      // Error handling per Phil
       function(response) {
         if (response.status !== 200) {
           console.log('Error: ' + response.status);
           return;
         }
         response.json().then(function(resultData) {
           this.props.onUpdate(resultData.results[0]);
         }.bind(this))
       }.bind(this)
     )
     .catch(function(errors) {
       console.log('Errors', errors);
     });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} placeholder="search titles here" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Search;
