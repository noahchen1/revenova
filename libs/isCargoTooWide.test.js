const isCargoTooWide = require("./isCargoTooWide");

const testIsCargoTooWide = () => {
  // Test case 1: Cargo fits
  const grid1 = [["", "", "", "", ""]];
  if (!isCargoTooWide(1, 2, grid1)) {
    console.log("Case1 passed!");
  } else {
    console.error("Case1 failed!");
  }

  // Test case 2: Cargo exceeds the grid width
  const grid2 = [["", "", "", "", ""]];
  if (isCargoTooWide(3, 3, grid2)) {
    console.log("Case2 passed!");
  } else {
    console.error("Case2 failed!");
  }

  // Test case 3: Cargo fits at the edge of the grid
  const grid3 = [["", "", "", "", ""]];
  if (!isCargoTooWide(4, 1, grid3)) {
    console.log("Case3 passed!");
  } else {
    console.error("Case3 failed!");
  }
};

testIsCargoTooWide();
