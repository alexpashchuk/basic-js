const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    _data: [],
    getLength() {
        return this._data.length
    },
    addLink(value) {
        if (typeof value === 'undefined') {
            this._data.push('( )')
        } else {
            this._data.push(`( ${value} )`)
        }
        return this
    },
    removeLink(position) {
        if (typeof position !== 'number' || position < 1 || position > this._data.length) {
            this._data = []
            throw new Error("You can't remove incorrect link!")
        }
        this._data.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this._data.reverse()
        return this
    },
    finishChain() {
        const finishData = this._data.join('~~')
        this._data = []
        return finishData
    }
}

module.exports = {
    chainMaker
}
