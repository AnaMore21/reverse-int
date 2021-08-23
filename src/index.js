module.exports = function reverse (n) {
  let revert = Math.abs(n).toString().split('').reverse().join('');
  return Number(revert);
}
