import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = (props) => (
  <div className="row">
    <h2 className="col-s-12 col-md-6">
      Score: {props.score}
    </h2>
    <h2 className="col-s-12 col-md-6">
      Highest Score: {props.highscore}
    </h2>
  </div>
);


Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired
}

export default Scoreboard;