const os = require("os");
// info about current user
const user = os.userInfo();
console.log(user);

//methods returns the sytem uptime in seconds

console.log(`this sytems uptime is ${os.uptime()} seconds`);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemort: os.totalmem(),
  frerMemory: os.freemem(),
};
console.log(currentOs);
