const getIndex = require("./getIndex");

const testGetIndex = () => {
  // Test case 1: Empty grid should return 0
  const grid1 = [];
  const index1 = getIndex(grid1);

  if (index1 === 0) {
    console.log("Case1 passed!");
  } else {
    console.log("Case1 failed!");
  }

  // Test case 2: Grid with all zeros should return 0
  const grid2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const index2 = getIndex(grid2);

  if (index2 === 0) {
    console.log("Case2 passed!");
  } else {
    console.log("Case2 failed!");
  }

  // Test case 3: Grid with first row containing all zeros should return 0
  const grid3 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const index3 = getIndex(grid3);
  if (index3 === 0) {
    console.log("Case3 passed!");
  } else {
    console.log("Case3 failed!");
  }

  // Test case 4: Grid with all rows containing 1s should retrun the last index of the grid
  const grid4 = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ];

  const index4 = getIndex(grid4);

  if (index4 === 2) {
    console.log("Case4 passed!");
  } else {
    console.log("Case4 failed!");
  }
};

testGetIndex();
