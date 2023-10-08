const isValidCargo = require("./isValidCargo");

const testIsValidCargo = () => {
  // Test case 1: Valid cargo type
  if (isValidCargo("O")) {
    console.log("Case1 passed!");
  } else {
    console.error("Case1 failed!");
  }

  // Test case 2: Invalid cargo type
  if (!isValidCargo("X")) {
    console.log("Case2 passed!");
  } else {
    console.error("Case2 failed!");
  }
};

testIsValidCargo();
