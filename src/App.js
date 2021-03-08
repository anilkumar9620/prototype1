import React, { Component } from 'react';
import Aux from './Auxillary/Auxillary';
import classes from './App.css';
import Main from './Containers/Main';
class App extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.App}>
          <Main />
        </div>
      </Aux>
    );
  }
}

export default App;
