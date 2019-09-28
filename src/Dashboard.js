
import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <center>
              <h1>Welcome! {this.props.name}</h1>
            </center>
        </div>
    );    
  }
}
export default Dashboard;
