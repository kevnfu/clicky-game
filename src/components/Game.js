import React from 'react';
import Scoreboard from './Scoreboard';
import HoverImage from './HoverImage';

// build a list of image urls that display numbers
const numberList = [...Array(12).keys()].map(n => n+1);

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highscore: 0,
      numbers: numberList
    }
  }

  handleClick = (event) => {
    console.log('clicked');
  }

  render() {
    return (
        <div>
          <Scoreboard
            score={this.state.score}
            highscore={this.state.highscore}
          />
          {
            this.state.numbers.map(n => {
              console.log(n);
              return (
                <HoverImage
                  key={n}
                  src={`https://imgplaceholder.com/200x200?text=${n}`}
                  onClick={this.handleClick}
                />
              );
            })
          }
        </div>
    );
  }
}

export default Game;