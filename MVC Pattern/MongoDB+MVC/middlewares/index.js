const fs = require("fs");


function logReqres (filename) {
    return (req,res,next) => {
        console.log("\n Hello",req.myname ," this is middleware 2 ")
        fs.appendFile(
            "./log.txt",
            `${Date.now()} : ${req.method} : ${req.path} \n `,
            (err,data) =>{
                          next();
                     }
        )
    }
}

module.exports = {
    logReqres,
}