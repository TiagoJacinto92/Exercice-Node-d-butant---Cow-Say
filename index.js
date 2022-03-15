const userInfo = require("./information.js");
const cowsay = require("cowsay");
console.log(cowsay.say({
  text : `Hello I'm ${userInfo.user.name} from ${userInfo.user.campus} Campus!`,
  e : "oO",
  T : "U "
}))