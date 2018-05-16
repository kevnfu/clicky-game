import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 class="display-4">Clicky Game</h1>
          <p class="lead">Don't click on the same one twice!</p>
        </div>

        <Game />
      </div>
    );
  }
}

export default App;
