 var  somar = require("./soma");
 var sub = require("./sub");
 var multi = require("./multi");
 var div = require("./div")

console.log(somar(2,4))
//console.log(sub(2,4))
//console.log(div(2,4))
//console.log(multi(10,2))
module.require = somar;

