import React from 'react';
import {
  Box,
  Text,
  Image,
  Flex,
} from '../../';

import themes from './themes';

const inactiveStyles = {
  box: {
    bg: 'gray.2',
  },
  text: {
    color: 'gray.0',
  },
};

const Button = ({
  theme,
  inactive,
}) => {
  const boxProps = inactive ? inactiveStyles.box : themes[theme].box;
  const textProps = inactive ? inactiveStyles.text : themes[theme].text;
  const content = themes[theme].content;

  return (
    <Box
      {...boxProps}
      width={300}
      height={20}
      borderRadius={2}
      p={2}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        position="relative"
      >
        { content(textProps, inactive) }
      </Flex>
    </Box>
  )
};

export default Button;
