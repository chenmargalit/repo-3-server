export const isStrANumber = str => {
  if (!str) {
    return { error: true, msg: 'no string provided' };
  } else {
    return !isNaN(str);
  }
};

export const isStr = item => {
  return typeof item === 'string';
};
