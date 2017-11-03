import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>
        {this.props.resultData}
      </div>
    );
  }
}
export default Person;
