const part2 = (inputData) => {
  const startFreq = 0;

  let freqList = [];
  let twiceFreq = undefined;
  let i = 0;

  while (!twiceFreq) {
    inputData.forEach((item) => {
      if (!freqList.length) freqList.push(startFreq);
      const newFrequency = freqList[freqList.length - 1] + 1 * parseInt(item);
      if (freqList.includes(newFrequency) && !twiceFreq) {
        twiceFreq = newFrequency;
      }
      freqList.push(newFrequency);
      i++;
    });
  }
  return twiceFreq;
};

export default part2;
