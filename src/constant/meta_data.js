export const SIZE = {
  xs: "xs",
  small: "s",
  medium: "m",
  large: "l",
  xl: "xl",
  xxl: "xxl",
};

export const TEXT_INPUT_TYPE = {
  text: "text",
  number: "number",
};

export const COLOR = {
  primary: "primary",
  blue: "blue",
};

export const DEVICE_MAX_SIZE = {
  small: 767,
  medium: 1023,
  large: 9999999,
};

export const DEVICE = {
  small: `(max-width: ${DEVICE_MAX_SIZE.small}px)`,
  medium: `(min-width: ${DEVICE_MAX_SIZE.small}px) and (max-width: ${DEVICE_MAX_SIZE.medium}px)`,
  large: `(min-width: ${DEVICE_MAX_SIZE.medium + 1}px)`,
};
