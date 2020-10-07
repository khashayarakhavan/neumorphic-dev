import colors from './colors';

export const shadow_neu_light__insetOrange = () => {
      return `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.shadows.lightest},
          inset 0px -4px 0px 0px ${colors.accent};`;
};
export const shadow_neu_light = () => {
      return `0px 0px 15px 2px ${colors.shadows.dark},
          -1px -1px 12px 2px ${colors.shadows.lightest};`;
};

export default {
  shadows: {
    lightest: "rgba(255, 255, 255, 0.93)",
    lighter: " rgba(125, 126, 127, 0.4)",
    light: "grey",
    dark: "darkgrey",
  },
  neumorphic: {
    lightest: "rgba(255, 255, 255, 0.93)",
    lighter: " rgba(125, 126, 127, 0.4)",
    light: `0px 0px 15px 2px ${colors.shadows.light},
          -1px -1px 12px 2px ${colors.highlights.lighter}`,
    dark: "darkgrey",
    norm: `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.highlights.lightest}`,
    orange: `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.highlights.lightest},
          inset 0px -4px 0px 0px ${colors.accent}`,
    red: `4px 4px 15px 2px ${colors.redLight},
          -3px -3px 12px 2px ${colors.redDark}`,
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
