import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../src';

storiesOf('Box', module)
  .add('default', () => (
    <Box
      bg="blue.0"
      height={50}
      width={200}
    >
      this is a Box
    </Box>
  ));
