const getGrid = require("./getGrid");

const testGetGrid = () => {
  const width = 30;
  const height = 25;
  const grid1 = getGrid(width, height);

  // Test case 1: check grid height
  if (grid1.length === height) {
    console.log("Case1 passed!");
  } else {
    console.log("Case1 failed!");
  }

  // Test case 2: check grid width and values
  for (let i = 0; i < height; i++) {
    if (grid1[i].length === width) {
      for (let j = 0; j < width; j++) {
        if (grid1[i][j] !== 0) {
          console.log("Case2 failed: Grid contains non-zero value.");
          return;
        }
      }
    } else {
      console.log("Case2 failed: Incorrect width.");
      return;
    }
  }

  console.log("Case2 passed!");
};

testGetGrid();
