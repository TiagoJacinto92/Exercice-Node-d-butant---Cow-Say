const user = require("./information.js");
const cowsay = require("cowsay");
console.log(cowsay.say({
  text : `Hello I'm ${user.name} from ${user.campus} Campus!`,
  e : "oO",
  T : "U "
}))