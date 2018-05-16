import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';

const Img = styled.img`
  border-color: black;
  border-width: 10px;
  border-style: solid;

  &:hover {
    transform: scale(1.1,1.1)
  }
`

const HoverImage = (props) => {
  return <Img {...props} />;
}

HoverImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default HoverImage;