import styled from 'styled-components';
import {
  maxWidth,
  maxHeight,
  display,
  space,
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  opacity,
} from 'styled-system';


const Image = styled.img`
  ${space}
  ${width}
  ${height}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${position}
  ${display}
  ${zIndex}
  ${maxWidth}
  ${opacity}
  ${maxHeight}
  transition: ${props => props.transition || 'all 0s 0s ease'};
  transform: ${props => props.transform || 'none'};
  visibility: ${props => props.visibility || 'visible'};

  &:hover {
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  }

`;

export default Image;
