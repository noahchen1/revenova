const getInputArr = require("./getInputArr");

const testGetInputArr = () => {
  const isEqual = (input, arr) => {
    const inputArr = getInputArr(input);

    return inputArr.every((v, i) => v === arr[i]);
  };

  // Test case 1: valid input
  if (isEqual("0O,2I,3S", ["0O", "2I", "3S"])) {
    console.log("case 1 passed!");
  } else {
    console.log("Failed!");
  }

  // Test case 2: valid input with more elements
  if (isEqual("1O,2I,3S,4T,3S,1O,2I,3S,4T,3S", ["1O", "2I", "3S", "4T", "3S", "1O", "2I", "3S", "4T", "3S"])) {
    console.log("case 2 passed!");
  } else {
    console.log("Failed!");
  }

  // Test case 4: Valid input with spaces
  if (isEqual("1O, 2I, 3S", ["1O", "2I", "3S"])) {
    console.log("case 3 passed!");
  } else {
    console.log("Failed!");
  }

  // Test case 5: inccorect format
  if (isEqual("1O,2I,3S,.,4T,,", ["1O", "2I", "3S", "4T"])) {
    console.log("case 4 passed!");
  } else {
    console.log("Failed!");
  }
};

testGetInputArr();
