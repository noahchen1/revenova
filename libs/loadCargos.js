const data = require("../data");
const getGrid = require("./getGrid");
const getInputArr = require("./getInputArr");
const isOccupied = require("./isOccupied");

const CARGO_DATA = data.CARGO_DATA;
const width = data.GRID_WIDTH;
const height = data.GRID_HEIGHT;
const grid = getGrid(width, height);

const loadCargos = async input => {
  const inputArr = getInputArr(input);

  const placeCargo = (input) => {
    let yPos = 0;
    const xPos = parseInt(input[0]);

    if (xPos < 0 || isNaN(xPos) || input.length !== 2) {
      console.log(`${input} is invalid and cannot be loaded!`);
      
      return;
    }

    const type = input[1].toUpperCase();
    const cargo = CARGO_DATA[type];
    const cargoHeight = cargo.length;
    const cargoWidth = cargo[0].length;

    if (xPos + cargoWidth > grid[0].length) {
      console.log(`Cargo ${input} is too big and cannot be loaded!`);
      return;
    }

    while (isOccupied(xPos, yPos, cargoWidth, cargoHeight, grid, cargo)) {
      yPos++;

      if (yPos + cargoHeight > grid.length) {
        console.log(`Cargo ${input} is too big and cannot be loaded!`);
        return;
      }
    }

    for (let row = 0; row < cargoHeight; row++) {
      for (let col = 0; col < cargoWidth; col++) {
        if (cargo[row][col] === 1) {
          grid[yPos + row][xPos + col] = 1;
        }
      }
    }
  };

  inputArr.forEach((input) => placeCargo(input));

  return grid;
};

module.exports = loadCargos;