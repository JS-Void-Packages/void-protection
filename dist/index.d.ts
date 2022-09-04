export = class Protection {

    /**
     * @param salt the salt is used as additional input to safeguard the encryption.
     * @param saveToDisk (only apply to encodeFile and decodeFile) replace the file with its encoded value or decoded value
     */
    constructor(salt?:string, saveToDisk?:boolean)

    /**
     * encode a file
     * @param pathToFile 
     * @param encoding file encoding
     */
    encodeFile(pathToFile:string, encoding:string):string

    /**
     * decode a file
     * @param pathToFile 
     * @param encoding file encoding
     */
    decodeFile(pathToFile:string, encoding:string):string

    /**
     * encode a simple json
     * @param json 
     */
    encodeJson(json:{ [x: string]: string; }): { [x: string]: string; }

    /**
     * decode a simple json
     * @param json 
     */
    decodeJson(json:{ [x: string]: string; }): { [x: string]: string; }

    /**
     * encode a string with line break
     * @param str 
     */
    encodeStringWithLineBreak(str:string):string

    /**
     * decode a string with line break
     * @param str 
     */
    decodeStringWithLineBreak(str:string):string

    /**
     * encode a string
     * @param str 
     */
    encodeString(str:string):string

     /**
      * decode a string
      * @param str 
      */
    decodeString(str:string):string

    /**
     * encode a string array
     * @param str 
     */
    encodeStringArray(str:string):string

     /**
      * decode a string array
      * @param str 
      */
    decodeStringArray(str:string):string
}