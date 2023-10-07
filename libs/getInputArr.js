const getInputArr = input => input.split(/[ ,]+/).filter(item => item !== "" && !item.match(/[^\w\d]/));;

module.exports = getInputArr;