import React from 'react';
import Game from './components/Game'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Clicky Game</h1>
          <p className="lead">Don't click on the same one twice!</p>
        </div>

        <Game />
      </div>
    );
  }
}

export default App;
