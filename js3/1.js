/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  return arr.reduce((acc, el) => {
    if (obj.hasOwnProperty(el)) {
      acc.push(obj[el])
    }
    return acc
  }, [])
}

module.exports = {
  solution,
}
