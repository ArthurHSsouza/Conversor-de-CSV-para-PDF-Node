var pdf = require('html-pdf')

class PDFwriter{
    static write(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{})
 }  
}

module.exports = PDFwriter;