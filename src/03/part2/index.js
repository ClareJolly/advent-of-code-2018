const part2 = (inputData) => {
  //   console.log('🚀 ~ file: index.js ~ line 2 ~ part2 ~ inputData', inputData);
  const testData = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
  const data = inputData.map((item) => {
    const itemArr = item.split(' ');
    const id = parseInt(itemArr[0].replace('#', ''));
    const position = itemArr[2]
      .replace(':', '')
      .split(',')
      .map((x) => parseInt(x));
    const size = itemArr[3].split('x').map((x) => parseInt(x));
    const totalSize = size[0] * size[1];
    return {
      id,
      position,
      size,
      totalSize,
    };
  });

  const matrix = Array.from(Array(1000), () => new Array(1000).fill(''));

  let posX;
  let posY;
  data.forEach((id) => {
    posX = id.position[0];
    posY = id.position[1];
    while (posY < id.position[1] + id.size[1]) {
      while (posX < id.position[0] + id.size[0]) {
        // matrix[posY][posX]++;
        matrix[posY][posX] += `,${String(id.id)}`;
        // if
        // matrix[posY][posX].push(id.id);
        posX++;
      }
      posY++;
      posX = id.position[0];
    }
  });

  const filtered = matrix.map((m) =>
    m
      .filter((s) => s.split(',').length - 1 === 1)
      .map((f) => parseInt(f.replace(',', '')))
  );

  const reduced = filtered.reduce((acc, row) => {
    row.forEach((r) => {
      if (!acc[r.toString()]) acc[r.toString()] = 0;
      acc[r.toString()]++;
    });
    return acc;
  }, {});

  const mapped = data.reduce((acc, item) => {
    if (!acc[item.id]) acc[item.id] = '';
    acc[item.id] = item.totalSize;
    return acc;
  }, {});

  return Object.keys(mapped).filter((m) => reduced[m] === mapped[m])[0];
};

export default part2;
