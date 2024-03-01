export const isNumber = (value) => {
  const pattern = /^[0-9]*$/;
  if (pattern.test(value)) {
    return true;
  }
  return false;
};

export const isAlphabet = (value) => {
  const alphabetRegex = /^[a-zA-Z]+$/;
  if (alphabetRegex.test(value) || value === "") {
    return true;
  }
  return false;
};
