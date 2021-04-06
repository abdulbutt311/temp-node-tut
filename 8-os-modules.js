const os =require('os')

//info about the current user
const user =os.userInfo()

//method return the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalmen:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)