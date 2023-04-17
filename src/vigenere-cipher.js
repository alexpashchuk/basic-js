const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
    encrypt(string, key) {
        if (!string || !key) throw new Error('Incorrect arguments!')

        let strArr = string.toUpperCase().split('')
        let keyArr = key.toUpperCase().split('')
        let res = []
        let i = 0
        strArr.forEach((el) => {
            let index = this.alphabet.indexOf(el)
            if (index === -1) {
                res.push(el)
            } else {
                if (i >= key.length) i = i % keyArr.length
                let indexKey = this.alphabet.indexOf(keyArr[i])
                let letters = this.alphabet[(this.alphabet.length + (index + indexKey)) % this.alphabet.length]
                res.push(letters)
                i++
            }
        })
        if (this.isDirect) {
            return res.join('')
        } else {
            return res.reverse().join('')
        }
    }
    decrypt(string, key) {
        if (!string || !key) throw new Error('Incorrect arguments!')

        let strArr = string.toUpperCase().split('')
        let keyArr = key.toUpperCase().split('')
        let res = []
        let i = 0
        strArr.forEach((el) => {
            let index = this.alphabet.indexOf(el)
            if (index === -1) {
                res.push(el)
            } else {
                if (i >= key.length) i = i % keyArr.length
                let indexKey = this.alphabet.indexOf(keyArr[i])
                let letters = this.alphabet[(this.alphabet.length + (index - indexKey)) % this.alphabet.length]
                res.push(letters)
                i++
            }
        })
        if (this.isDirect) {
            return res.join('')
        } else {
            return res.reverse().join('')
        }
    }
}

module.exports = {
    VigenereCipheringMachine
}
