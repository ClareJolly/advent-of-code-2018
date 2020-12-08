const sortArrayOfObjects = (arr, key) => {
  return arr.sort(function (a, b) {
    return a[key] - b[key];
  });
};

export default sortArrayOfObjects;
