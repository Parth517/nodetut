const os=require('os');
//infp abput current user
const user=os.userInfo();
console.log(user);
//method returns system uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
};
console.log(currentOS);