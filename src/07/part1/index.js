const initialFormat = (inputData) => {
  return inputData.map((d) => {
    var initialRegex = /.*([A-Z]).*([A-Z]).*/g;
    var match = initialRegex.exec(d);
    return {
      a: match[1],
      b: match[2],
    };
  });
};

const part1 = (inputData) => {
  const data = initialFormat(inputData);
  console.log('🚀 ~ file: index.js ~ line 14 ~ part1 ~ data', data);
};

export default part1;
