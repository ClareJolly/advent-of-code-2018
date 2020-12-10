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

const part2 = (inputData) => {
  let data = inputData.map((code) => code.split(''));
  data = data[0];

  const charList = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let charDetails = [];
  charList.forEach((ch) => {
    let x = 0;
    let newData = [...data.filter((d) => d.toLowerCase() !== ch.toLowerCase())];
    let previousLength = 0;
    let currentDataLength = newData.length;
    while (currentDataLength !== previousLength) {
      for (let i = 0; i < newData.length; i++) {
        if (i < newData.length - 1) {
          const a = newData[i];
          const b = newData[i + 1];
          if (compare(a, b, ch)) {
            newData.splice(i, 2);
          }
        }
      }
      previousLength = currentDataLength;
      currentDataLength = newData.length;
      x++;
    }
    charDetails.push(newData.length);
  return charDetails.sort(function (a, b) {
    return a - b;
  })[0];
};

export default part2;
