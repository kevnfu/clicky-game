import React from 'react';
import Scoreboard from './Scoreboard';
import HoverImage from './HoverImage';
import './Game.css'

// list 1...12
const numberList = [...Array(12).keys()].map(n => n+1);

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highscore: 0,
      numbers: shuffle(numberList),
      className: ''
    }
    this.set = new Set();
  }

  randomize() {
    const numbers = shuffle(this.state.numbers.slice());
    this.setState({ numbers });
  }

  resetGame() {

    this.setState(prevState => {
      const {score, highscore} = prevState;
      return {...prevState,
        score: 0,
        highscore: score > highscore ? score : highscore
      }
    });
    this.set.clear();
  }

  animateShake() {
    this.setState({ className: 'shake' });
    setInterval(()=>this.setState({ className: '' }), 1000);
  }

  handleClick = (index) => {
    if(this.set.has(index)) {
      // fail -- clicked twice!
      // reset game
      this.resetGame();
      this.animateShake();
    } else {
      // add to clicked
      this.set.add(index);
      // update score
      this.setState(prevState => ({...prevState, score: prevState.score + 1}));

      // clicked all -- win!
      if(this.set.size === this.state.numbers.length) {
        alert("you win");
        this.resetGame();
      }
    }

    // rearrange images
    this.randomize();
  }

  render() {
    return (
      <div className={this.state.className}>
        <Scoreboard
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <div className="row">
        {
          this.state.numbers.map(n => {
            return (
              <div key={n} className="col-3 my-3">
                <HoverImage
                  // style={{borderColor: 'red'}}
                  src={`https://imgplaceholder.com/150x150?font-size=150&text=${n}`}
                  onClick={e => this.handleClick(n)}
                />
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default Game;