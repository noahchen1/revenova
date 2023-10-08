// [ ,]+ matches one or more consecutive occurrences of either a space (``) or a comma (,).
// [^\w\d] matches any character that is not a word character (\w) or a digit (\d).
const getInputArr = (input) => input.split(/[ ,]+/).filter((item) => item !== "" && !item.match(/[^\w\d]/));

module.exports = getInputArr;
