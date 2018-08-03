import React from 'react';

import { 
  Flex,
  Image,
} from '../../';
import ButtonText from './ButtonText';

import asapIcon from './assets/icon_lightning.svg';
import caratIcon from './assets/icon_carat_white.svg';
import caratIconInactive from './assets/icon_carat_gray.svg';

export default {
  continue: {
    box: {
      bg: 'green.0',
    },
    text: {
      color: 'white',
    },
    content: (props) => (
      <ButtonText
        {...props}
      >
        Continue
      </ButtonText>
    ),
  },
  continueBlue: {
    box: {
      bg: 'blue.0',
    },
    text: {
      color: 'white',
    },
    content: (props) => (
      <ButtonText
        {...props}
      >
        Continue
      </ButtonText>
    )
  },
  asap: {
    box: {
      bg: 'green.0',
    },
    text: {
      color: 'white',
    },
    content: (props) => {
      return (
        <React.Fragment>
          <Image
            src={asapIcon}
            width={30}
            height={30}
            ml={-30}
          />
          <ButtonText
            {...props}
          >
            ASAP
          </ButtonText>
        </React.Fragment>
      );
    },
  },
  scheduleWalk: {
    box: {
      bg: 'green.0',
    },
    text: {
      color: 'white',
    },
    content: (props, inactive) => {
      return (
        <React.Fragment>
          <ButtonText
            {...props}
          >
            Schedule Walk
          </ButtonText>
          <Image
            position="absolute"
            right="10px"
            src={inactive ? caratIconInactive : caratIcon}
            width={15}
            height={15}
          />
        </React.Fragment>
      );
    },
  },
};
