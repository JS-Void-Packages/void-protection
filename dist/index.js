const fs = require('fs');
const Hashids = require('hashids')

module.exports = class Protection {

    #hash = null
    #override = false

    /**
     * 
     * @param {string} salt 
     * @param {boolean} saveToDisk if you want to save the file(override the existing file)
     */
    constructor(salt='', saveToDisk=false) {
        this.#hash = new Hashids(salt, 0, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
        this.#override = saveToDisk
    }

    #encode(value) {
        let hex = Buffer.from(value).toString('hex')
        let encoded = this.#hash.encodeHex(hex)
        return encoded
    }

    #decode(value) {
        let hex = this.#hash.decodeHex(value)
        return Buffer.from(hex, 'hex').toString('utf8')
    }

    /**
     * Encode a file
     * @param {string} pathToFile
     * @param {string} encoding file encoding, default to utf8
     * @returns {string}
     */
    encodeFile(pathToFile, encoding='utf8') {
        let lines = fs.readFileSync(pathToFile, encoding).split('\n')
        let result = lines.map(line => this.#encode(line)).join('\n')
        if(this.#override) {
            fs.writeFileSync(pathToFile, result, encoding)
        }
        return result
    }

     /**
     * Decode a file
     * @param {string} pathToFile
     * @param {string} encoding file encoding, default to utf8
     * @returns {string}
     */
    decodeFile(pathToFile, encoding='utf8') {
        let lines = fs.readFileSync(pathToFile, encoding).split('\n')
        let result = lines.map(line => this.#decode(line)).join('\n')
        if(this.#override) {
            fs.writeFileSync(pathToFile, result, encoding)
        }
        return result
    }

    /**
     * 
     * @param {Object<string, string>} json 
     * @returns 
     */
    encodeJson(json) {
        let outputJson = {}

        for(let [key, value] of Object.entries(json)) {
            outputJson[this.#encode(key)] = this.#encode(value)
        }
        return outputJson
    }

    decodeJson(json) {
        let outputJson = {}

        for(let [key, value] of Object.entries(json)) {
            outputJson[this.#decode(key)] = this.#decode(value)
        }
        return outputJson
    }

    /**
     * Encode a string
     * @param {string} data
     */
    encodeStringWithLineBreak(data) {
        let lines = data.split('\n')
        return lines.map(line => this.#encode(line)).join('\n')
    }

    /**
     * Decode a string
     * @param {string} data
     */
    decodeStringWithLineBreak(data) {
        let lines = data.split('\n')
        return lines.map(line => this.#decode(line)).join('\n')
    }

    /**
     * Encode a string
     * @param {string} str
     */
    encodeString(str) {
        return this.#encode(str)
    }

    /**
     * Decode a string
     * @param {string} str
     */
    decodeString(str) {
        return this.#decode(str)
    }

    /**
     * Encode a string array
     * @param {string[]} data
     */
    encodeStringArr(data) {
        return data.map(value => this.#encode(value))
    }

    /**
     * Decode a string array
     * @param {string[]} data
     */
    decodeStringArr(data) {
        return data.map(value => this.#decode(value))
    }
}