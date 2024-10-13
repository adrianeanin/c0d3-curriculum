/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const populateColumns = (num, num2, res = []) => {
  if (num === 0) return res

  res.push({ x: res.length, y: num2 })

  return populateColumns(num - 1, num2, res)
}

const solution = (num1, num2, res = []) => {
  if (res.length === num1) return res

  res.push(populateColumns(num2, res.length))

  return solution(num1, num2, res)
}
module.exports = {
  solution,
}
