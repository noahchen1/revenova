const getGrid = (width, height) => Array.from({ length: height }, v => new Array(width).fill(0));

module.exports = getGrid;