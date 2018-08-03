import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// global css; only add to this if there are no other options
export const globalCSS = injectGlobal`
  @import url("https://unpkg.com/react-select@1.2.1/dist/react-select.css");
  ${styledNormalize}
`;

const colors = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  green: [
    '#00bf8f',
    '#009972',
    '#085e45',
  ],
  blue: [
    '#616a9b',
    '#7786b7',
    '#353f5b',
    '#1faee3',
    '#5082e5',
  ],
  gray: [
    '#727272', // 0
    '#ededed', // 1
    '#aaaaaa', // 2
    '#d1d1d1', // 3
    '#e5e0d3', // 4,
  ],
  yellow: [
    '#fae7a8',
    '#f9cd46',
  ],
  orange: [
    '#faab43',
    '#ff794d',
  ],
  red: [
    '#ff5867',
    '#dd364a',
  ],
  brown: [
    '#7b5533',
    '#6d482b',
    '#51272f',
  ],
};

const fontSizes = [
  8, // 0
  10, // 1
  12, // 2
  15, // 3
  16, // 4
  18, // 5
  24, // 6
  35, // 7
  44, // 8
];

const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '120em', // 1920px
];

const space = [
  0, // 0
  5, // 1
  10, // 2
  20, // 3
  40, // 4
  60, // 5
];

const fontWeights = [
  200, // 0
  300, // 1
  400, // 2
  500, // 3
  600, // 4
  700, // 5
  800, // 6
  900, // 7
];

const borders = [
  0,
  '1px solid',
  '2px solid',
];

const letterSpacings = [
];

const radii = [
  0,
  2,
  4,
  8,
];

const lineHeights = [
  1,
  1.125,
  1.25,
  1.5,
];

// QUESTION: How do we import fonts? Typekit? Typography.com?
const fonts = {
  heading: '"Grilled Cheese"',
  subHeading: '"Helvetica Neue Bold", Helvetica, Arial, sans-serif',
  body: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif',
};

const Theme = {
  colors,
  fontSizes,
  breakpoints,
  space,
  fontWeights,
  borders,
  letterSpacings,
  radii,
  lineHeights,
  fonts,
};

export default Theme;
