# void-protection
Void Protection let you encrypt/decrypt a string/array of string or a file.
## Getting Started
```js
const Protection = require('void-protection')

// let prot = new Protection() works as well.
let prot = new Protection('salt', true)
console.log(prot.encodeFile('./test.txt')) // return the content and save the file if saveToDisk(boolean in the constructor) is set to true
console.log(prot.encodeString('morbius'))
console.log(prot.encodeStringArray(['morb', 'ius']))
```