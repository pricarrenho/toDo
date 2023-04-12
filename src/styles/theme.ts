const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  gray: {
    100: "#F2F2F2",
    200: "#D9D9D9",
    300: "#808080",
    400: "#333333",
    500: "#262626",
    600: "#1A1A1A",
    700: "#0D0D0D",
  },
  red: "#E25858",
  blue: {
    100: "#4EA8DE",
    200: "#1E6F9F",
  },
  purple: {
    100: "#8284FA",
    200: "#5E60CE",
  },
};

const font = {
  family: "Inter",
  sizes: {
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
    xlg: "2.4rem",
  },
};

export const themeBlack = {
  colors: {
    ...colors,
    background: colors.gray[600],
  },
  font,
};
