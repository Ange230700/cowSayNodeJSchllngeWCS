const studentInfoModule = require('./information');
const cowsay = require('cowsay');

console.log(
    cowsay.say({
        text: `Hello I'm ${studentInfoModule.name} from ${studentInfoModule.campus} campus!`,
        e: "oO",
        T: "U "
    })
)