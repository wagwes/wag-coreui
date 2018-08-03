import styled from 'styled-components';
import {
  space,
  borders,
  borderColor,
  height,
  width,
  position,
  propTypes,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  color,
  top,
  right,
  bottom,
  display,
  left,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
} from 'styled-system';

const Flex = styled.div`
  ${space}
  ${width}
  ${height}
  ${borders}
  ${borderColor}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${color}
  ${flexWrap}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${display}
  ${position}
  box-sizing: ${props => props.boxSizing || 'content-box'};
  position: ${props => props.position || 'static'};
  opacity: ${props => props.opacity || '1'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  z-index: ${props => props.zIndex || 'auto'};
  overflow-y: ${props => props.overflowY || 'visible'};
  flex-shrink: ${props => props.flexShrink || '1'};
  box-shadow: ${props => (props.shadow ? hoverShadowEffect() : 'none')};

  &:hover {
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  }
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
