const isCargoTooTall = require("./isCargoTooTall");

const testIsCargoTooTall = () => {
  // Test case 1: Cargo fits
  const grid1 = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  if (!isCargoTooTall(0, 2, grid1)) {
    console.log("Case1 passed!");
  } else {
    console.error("Case1 failed!");
  }

  // Test case 2: Cargo exceeds the grid height
  const grid2 = [["", "", "", "", ""]];

  if (isCargoTooTall(1, 2, grid2)) {
    console.log("Case2 passed!");
  } else {
    console.error("Case2 failed!");
  }

  // Test case 3: Cargo fits at the bottom of the grid
  const grid3 = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  if (!isCargoTooTall(1, 1, grid3)) {
    console.log("Case3 passed!");
  } else {
    console.error("Case3 failed!");
  }
};

testIsCargoTooTall();
