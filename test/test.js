const Protection = require('../dist/index')

let prot = new Protection('stfu', true)
console.log(prot.encodeJson({
    a:'Spiderman',
    b:'Doctor Octopus',
    c:'Morbius'
}))
