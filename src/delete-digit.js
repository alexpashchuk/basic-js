const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = (n) => {
    let arrDigit = n.toString().split('')
    let arr = []

    arrDigit.forEach((_, i) => {
        let num = arrDigit.slice(0, i).join('') + arrDigit.slice(i + 1, arrDigit.length).join('')
        arr.push(num)
    })
    return Math.max(...arr)
}

module.exports = {
    deleteDigit
}
