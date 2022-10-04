const color = {
  white: "#FFF",
  pink: "#FF385C",
  black: "#201f1f",
  grey: "#5c5b5b",
};

const flexCenter = (just = "center", align = "center") => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const theme = {
  color,
  flexCenter,
};

export default theme;
