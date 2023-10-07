const getLength = (grid) => {
  if (!grid.length) return 0;

  for (let row = 0; row < grid.length; row++) {
    if (grid[0].every(el => el === 0)) return 0;
    if (row === grid.length - 1) return grid.length;
    if (!grid[row].includes(1)) return row - 1;
  }
};

module.exports = getLength;
