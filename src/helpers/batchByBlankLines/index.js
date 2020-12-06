const batchByBlankLines = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      if (item === '') {
        acc.push([]);
        return acc;
      }

      acc[acc.length - 1].push(item);
      return acc;
    },
    [[]]
  );
  return batches;
};

export default batchByBlankLines;
