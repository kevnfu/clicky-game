import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  margin: 10px;
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