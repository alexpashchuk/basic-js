const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let res = []
    for (let i = 0; i < names.length; i++) {
        let el = names[i]
        let file = el
        if (res.includes(file)) {
            let count = 0
            while (res.includes(file)) {
                ++count
                file = el + `(${count})`
            }
        }
        res.push(file)
    }
    return res
}

module.exports = {
    renameFiles
}
