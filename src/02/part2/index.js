const part2 = (inputData) => {
  const remap = inputData.map((item) => item.split(''));
  const close = [];
  remap.forEach((item) => {
    const closeMatch = [];
    remap.forEach((itm) => {
      let match = 0;
      let nonMatches = [];
      for (let i = 0; i < itm.length; i++) {
        if (itm[i] === item[i]) {
          match++;
        } else {
          nonMatches.push({
            itemPos: i,
            // itemDiff: item[i],
            // item: item.join(''),
            // itmPos: i,
            // itmDiff: itm[i],
            // itm: itm.join(''),
          });
        }
      }

      if (match === item.length - 1) {
        delete item[nonMatches[0].itemPos];
        closeMatch.push(item.join(''));
      }
    });
    if (closeMatch.length) close.push(...closeMatch);
  });
  return close[0];
};

export default part2;
