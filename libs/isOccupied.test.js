const isOccupied = require("./isOccupied");
const data = require("../data");
const CARGO_DATA = data.CARGO_DATA;

const testIsOccupied = () => {
  // Test case 1: Cargo 'O' placed at (0, 0) should overlap
  const grid1 = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const cargo1 = CARGO_DATA.O;

  if (isOccupied(0, 0, 2, 2, grid1, cargo1)) {
    console.log("case1 passed!");
  } else {
    console.log("case1 failed!");
  }

  // Test case 2: Cargo 'I' placed at (0, 0) should overlap
  const grid2 = [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const cargo2 = CARGO_DATA.I;

  if (isOccupied(0, 0, 1, 5, grid2, cargo2)) {
    console.log("case2 passed!");
  } else {
    console.log("case2 failed!");
  }

  // Test case 3: Cargo 'S' placed at (0, 0) should overlap
  const grid3 = [
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const cargo3 = CARGO_DATA.S;

  if (isOccupied(0, 0, 2, 2, grid3, cargo3)) {
    console.log("case3 passed!");
  } else {
    console.log("case3 failed!");
  }

  // Test case 4: Cargo 'Z' placed at (1, 2) should not overlap
  const grid4 = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const cargo4 = CARGO_DATA.Z;

  if (!isOccupied(2, 1, 2, 2, grid4, cargo4)) {
    console.log("case4 passed!");
  } else {
    console.log("case4 failed!");
  }

  // Test case 5: Cargo 'L' placed at (2, 0) should not overlap
  const grid5 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  const cargo5 = CARGO_DATA.L;

  if (!isOccupied(2, 0, 2, 3, grid5, cargo5)) {
    console.log("case5 passed!");
  } else {
    console.log("case5 failed!");
  }

  // Test case 6: Cargo 'J' placed at (0, 0)should overlap
  const grid6 = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const cargo6 = CARGO_DATA.J;

  if (isOccupied(0, 0, 2, 3, grid6, cargo6)) {
    console.log("case6 passed!");
  } else {
    console.log("case6 failed!");
  }

  // Test case 7: Cargo 'T' placed at (1, 1) should overlap
  const grid7 = [
    [0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const cargo7 = CARGO_DATA.T;

  if (isOccupied(1, 1, 3, 3, grid7, cargo7)) {
    console.log("case7 passed!");
  } else {
    console.log("case7 failed!");
  }
};

testIsOccupied();
