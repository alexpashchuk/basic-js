const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let res = ''
    let count = 1
    str.split('').forEach((el, i) => {
        if (el === str[i + 1]) {
            count++
        } else {
            res = count === 1 ? res + str[i] : res + `${count}` + str[i]
            count = 1
        }
    })
    return res
}

module.exports = {
    encodeLine
}
