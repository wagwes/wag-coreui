import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Continue - Active', () => (
    <Button
      theme="continue"
    />
  ))
  .add('Continue - Inactive', () => (
    <Button
      theme="continue"
      inactive
    />
  ))
  .add('Continue Blue - Active', () => (
    <Button
      theme="continueBlue"
    />
  ))
  .add('ASAP - Active', () => (
    <Button
      theme="asap"
    />
  ))
  .add('Schedule Walk - Active', () => (
    <Button
      theme="scheduleWalk"
    />
  ))
  .add('Schedule Walk - Inactive', () => (
    <Button
      theme="scheduleWalk"
      inactive
    />
  ));
