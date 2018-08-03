import styled from 'styled-components';
import {
  fontSize,
  width,
  fontFamily,
  space,
  color,
  display,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  maxWidth,
  minHeight,
  maxHeight,
  zIndex,
} from 'styled-system';

const Text = styled.p`
  ${fontSize}
  ${fontFamily}
  ${width}
  ${maxWidth}
  ${space}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${minHeight}
  ${maxHeight}
  ${zIndex}
  ${display}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: ${props => props.boxSizing || 'content-box'};
  text-indent: ${props => props.textIndent || '0'};
  text-transform: ${props => (props.textTransform || 'none')};
  font-style: ${props => props.fontStyle || 'normal'};
  white-space: ${props => props.whiteSpace || 'normal'};
  opacity: ${props => props.opacity || '1'};
  transition: ${props => props.transition || 'none'};
  visibility: ${props => props.visibility || 'visible'};
`;

export default Text;
