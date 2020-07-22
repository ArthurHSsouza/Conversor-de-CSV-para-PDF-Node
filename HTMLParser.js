const ejs = require('ejs')

class HTMLParser{
    static async parser(table){
      return await ejs.renderFile('./html.ejs',{header: table.header, rows: table.rows})     
    }
}
module.exports = HTMLParser;