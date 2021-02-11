var fs = require('fs')
var util = require('util')

class HTMLWriter{
    constructor(){
     this.writer = util.promisify(fs.writeFile)
    }
   async write(filename,data){
       return await this.writer(filename,data)
    }  
}

module.exports = HTMLWriter