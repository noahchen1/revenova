const loadCargos = require("./libs/loadCargos");
const getLength = require("./libs/getLength");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your input: ", async input => {
    const trailer = await loadCargos(input);
    const length = getLength(trailer);

    console.log(`the highest 0-indexed y-axis that has an occupied square is ${length}`);
    readline.close();
});
