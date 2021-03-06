import colors from './colors';
import { css } from "styled-components";




const shadows = {
  mixins: {
    neumorphic: {
      onActive_orange: (...args) => css`
        box-shadow:  ${({ variant }) =>
          variant === "active"
            ? shadows.neumorphic.orange
            : shadows.neumorphic.norm};
        `,
      norm: (...args) => css`
        box-shadow: ${shadows.neumorphic.norm};
        `,
      light: (...args) => css`
        box-shadow: ${shadows.neumorphic.light};
        `,
      red: (...args) => css`
        box-shadow: ${shadows.neumorphic.red};
        `,
      original: (...args) => css`
        box-shadow: ${shadows.neumorphic.original};
        `,
    },
  },
  neumorphic: {
    lightest: "rgba(255, 255, 255, 0.93)",
    lighter: " rgba(125, 126, 127, 0.4)",
    light: `0px 0px 15px 2px ${colors.shadows.light},
          -1px -1px 12px 2px ${colors.highlights.lighter}`,
    dark: "4px 4px 15px 2px ${colors.greyDark}",
    norm: `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.highlights.lightest}`,
    orange: `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.highlights.lightest},
          inset 0px -4px 0px 0px ${colors.accent}`,
    red: `4px 4px 15px 2px ${colors.redLight},
          -3px -3px 12px 2px ${colors.redDark}`,
    original: `4px 4px 15px 2px  ${colors.shadows.light},
           -3px -3px 12px 2px ${colors.highlights.lightest}`,
  },

  highlights: {
    lightest: "rgba(125,126,127,0.2)",
    lighter: " rgba(125,126,127,0.4)",
    light: "grey",
    dark: "darkgrey",
  },

  CTA: {
    lightest: "rgba(125,126,127,0.2)",
    lighter: " rgba(125,126,127,0.4)",
    light: "grey",
    dark: "darkgrey",
  },
  white: "#fff",
  primary: "#003153",
  accent: "#D65524",
  black: "black",
  palePink: "#fde2e4",
  paleYellow: "#fff1e6",
  paleGreen: " #dbe7e4",
  paleBlue: "#d6e2e9",

  grayLighter: "#D8D8D8",
  grayLight: "#ccc",
  grayDark: "#444",
  grayDarker: "#222",

  blueLight: "#2196F3",
  blueDark: "#104977",

  greenLight: "#8bc34a",
  greenDark: "#3b5221",

  yellowLight: "#ffc107",
  yellowDark: "#715605",

  redLight: "#e91e63",
  redDark: "#670a2a",
};

export default shadows;