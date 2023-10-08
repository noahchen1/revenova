const data = require("../data");
const getGrid = require("./getGrid");
const getInputArr = require("./getInputArr");
const isValidXPos = require("./isValidXPos");
const isValidCargo = require("./isValidCargo");
const isCargoTooWide = require("./isCargoTooWide");
const isOccupied = require("./isOccupied");
const isCargoTooTall = require("./isCargoTooTall");

const CARGO_DATA = data.CARGO_DATA;
const width = data.GRID_WIDTH;
const height = data.GRID_HEIGHT;
const grid = getGrid(width, height);

const loadCargos = async (input) => {
  const inputArr = getInputArr(input);

  const placeCargo = (input) => {
    const xPos = parseInt(input[0]);
    let yPos = 0;

    if (!isValidXPos(xPos, input)) {
      console.log(`${input} is invalid and cannot be loaded!`);

      return;
    }

    const type = input[1].toUpperCase();

    if (!isValidCargo(type)) {
      console.log(`${input} is invalid and cannot be loaded!`);
      return;
    }

    const cargo = CARGO_DATA[type];
    const cargoHeight = cargo.length;
    const cargoWidth = cargo[0].length;

    if (isCargoTooWide(xPos, cargoWidth, grid)) {
      console.log(`Cargo ${input} is too big and cannot be loaded!`);
      return;
    }

    while (isOccupied(xPos, yPos, cargoWidth, cargoHeight, grid, cargo)) {
      yPos++;

      if (isCargoTooTall(yPos, cargoHeight, grid)) {
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
