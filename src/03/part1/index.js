const part1 = (inputData) => {
  //   console.log('🚀 ~ file: index.js ~ line 2 ~ part1 ~ inputData', inputData);
  //   const testData = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
  const data = inputData.map((item) => {
    const itemArr = item.split(' ');
    const id = parseInt(itemArr[0].replace('#', ''));
    const position = itemArr[2]
      .replace(':', '')
      .split(',')
      .map((x) => parseInt(x));
    const size = itemArr[3].split('x').map((x) => parseInt(x));
    return {
      id,
      position,
      size,
    };
  });

  const matrix = Array.from(Array(1000), () => new Array(1000).fill(0));

  let posX;
  let posY;
  data.forEach((id) => {
    posX = id.position[0];
    posY = id.position[1];
    while (posY < id.position[1] + id.size[1]) {
      while (posX < id.position[0] + id.size[0]) {
        matrix[posY][posX]++;
        posX++;
      }
      posY++;
      posX = id.position[0];
    }
  });

  const filtered = matrix.map((m) => m.filter((s) => s > 1).length);
  return filtered.reduce((acc, item) => acc + item, 0);
};

export default part1;
