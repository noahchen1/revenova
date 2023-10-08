const getIndex = require("./getIndex");

const testGetIndex = () => {
  // Test case 1: Empty grid should return 0
  const grid1 = [];
  const length1 = getIndex(grid1);
  if (length1 === 0) {
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

  const length2 = getIndex(grid2);

  if (length2 === 0) {
    console.log("Case2 passed!");
  } else {
    console.log("Case2 failed!");
  }

  // Test case 3: Grid with no row containing all zeros and a row containing 1
  const grid3 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const length3 = getIndex(grid3);
  if (length3 === 0) {
    console.log("Case3 passed!");
  } else {
    console.log("Case3 failed!");
  }

  // Test case 4: Grid with no row containing 1
  const grid5 = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ];

  const length5 = getIndex(grid5);

  if (length5 === 2) {
    console.log("Case4 passed!");
  } else {
    console.log("Case4 failed!");
  }
};

testGetIndex();
