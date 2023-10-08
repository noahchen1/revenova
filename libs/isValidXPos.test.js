const isValidXPos = require("./isValidXPos");

const testIsValidXPos = () => {
  // Test case 1: Valid input
  if (isValidXPos(5, "0O")) {
    console.log("Case1 passed!");
  } else {
    console.error("Case1 failed!");
  }

  // Test case 2: Negative xPos
  if (!isValidXPos(-1, "1T")) {
    console.log("Case2 passed!");
  } else {
    console.error("Case2 failed!");
  }

  // Test case 3: Non-numeric xPos
  if (!isValidXPos("invalid", "aO")) {
    console.log("Case3 passed!");
  } else {
    console.error("Case3 failed!");
  }

  // Test case 4: Input length not equal to 2
  if (!isValidXPos(5, "10L")) {
    console.log("Case4 passed!");
  } else {
    console.error("Case4 failed!");
  }
};

testIsValidXPos();
