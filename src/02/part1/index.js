const part1 = (inputData) => {
  const data = inputData.map((item) => {
    const summary = item.split('').reduce((acc, item) => {
      if (!acc[item]) acc[item] = 0;
      acc[item]++;
      return acc;
    }, {});

    return {
      two: Object.entries(summary).filter((e) => e[1] === 2).length,
      three: Object.entries(summary).filter((e) => e[1] === 3).length,
    };
  });
  const final = data.reduce(
    (acc, item) => {
      if (item.two > 0) acc[0]++;
      if (item.three > 0) acc[1]++;
      return acc;
    },
    [0, 0]
  );
  return final[0] * final[1];
};

export default part1;
