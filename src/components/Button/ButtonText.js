import React from 'react';
import { Text } from '../../';

const ButtonText = (props) => {
  const { children, ...rest } = props;
  return (
    <Text
      {...rest}
      m={0}
      fontFamily="body"
      textTransform="uppercase"
    >
      { children }
    </Text>
  );
};

export default ButtonText;
