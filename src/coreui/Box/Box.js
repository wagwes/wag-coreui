import styled from 'styled-components';
import {
  space,
  height,
  display,
  borders,
  borderColor,
  width,
  propTypes,
  color,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  alignSelf,
  borderRadius,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${borders}
  ${borderColor}
  ${color}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${borderRadius}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${display}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${position}
  ${alignSelf}
  ${zIndex}
  visibility: ${props => props.visibility || 'visible'};
  opacity: ${props => props.opacity || '1'};
  overflow-x: ${props => props.overflowX || 'visible'};
  overflow-y: ${props => props.overflowY || 'visible'};
  box-sizing: ${props => props.boxSizing || 'content-box'};
  transition: ${props => props.transition || 'all 0s 0s ease'};

  &:hover {
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  }
`;

export default Box;
