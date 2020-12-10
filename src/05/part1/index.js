const isLowerCase = (char) => {
  return char == char.toLowerCase();
};

const compare = (a, b) => {
  const isMatch = a.toLowerCase() === b.toLowerCase();
  const islowerAndUpper =
    (isLowerCase(a) && !isLowerCase(b)) || (isLowerCase(b) && !isLowerCase(a));
  const check = isMatch && islowerAndUpper;
  return check;
};

const part1 = (inputData) => {
  let data = inputData.map((code) => code.split(''));
  data = data[0];

  let previousLength = 0;
  let currentDataLength = data.length;
  let x = 0;
  while (currentDataLength !== previousLength) {
    for (let i = 0; i < data.length; i++) {
      if (i < data.length - 1) {
        const a = data[i];
        const b = data[i + 1];
        if (compare(a, b)) {
          data.splice(i, 2);
        }
      }
    }
    previousLength = currentDataLength;
    currentDataLength = data.length;
    x++;
  }

  return data.length;
};

export default part1;
