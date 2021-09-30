const student = require("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${student.nom}, from ${student.campus}`,
    e : "oO",
    T : "U "
}));