const part1 = (inputData) => {
  const startFreq = 0;

  return inputData.reduce((acc, item) => {
    return acc + 1 * parseInt(item);
  }, startFreq);
};

export default part1;
