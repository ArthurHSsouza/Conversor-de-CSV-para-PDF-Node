
// Aqui temos um problema, pois precisamos retornar o file, 
//porém isto não é possível, pois a função de callback não 
//nos permite fazer isso

/*const fs = require('fs')

 class Reader{
     read(filepath){
         fs.readFile(filepath,{encoding:'utf-8'},(err,file)=>{
             if(err){
                 console.log("Erro ao ler arquivo: "+err)
             }else{
                 console.log(file)
             }
         }) 
     }
 }*/
 // A solução é usar o promisify e tranformar o readfile em uma promise

  const fs = require('fs')
  const util = require('util')

  class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async read(filepath){
        try{
          return await this.reader(filepath,{encoding: 'utf-8'})
        }catch(err){
          console.log("Erro ao salvar arquivo: "+err)
        }
    }
  }


 module.exports = Reader