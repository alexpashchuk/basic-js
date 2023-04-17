const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
    const resArr = []
    const copyArr = [...arr]

    for (let i = 0; i < copyArr.length; i++) {
        switch (copyArr[i]) {
            case '--double-next':
                if (i !== copyArr.length - 1) {
                    resArr.push(copyArr[i + 1])
                }
                break
            case '--double-prev':
                if (i !== 0) {
                    if (copyArr[i - 2] !== '--discard-next') {
                        resArr.push(arr[i - 1])
                    }
                }
                break
            case '--discard-prev':
                if (i !== 0) {
                    if (copyArr[i - 2] !== '--discard-next') {
                        resArr.pop()
                    }
                }
                break
            default:
                if (copyArr[i] !== '--discard-next' && copyArr[i - 1] !== '--discard-next') {
                    resArr.push(arr[i])
                }
        }
    }
    return resArr
}

module.exports = {
    transform
}
