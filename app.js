var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var HTMLParser = require("./HTMLParser")
var Writer = require('./PdfWriter')
var HTMLWriter = require('./HTMLWriter')


 const reader = new Reader()
 const processor = new Processor()
 const writer = new HTMLWriter() 

async function main(){

var file  = await reader.read('./users.csv')
var processedFile = processor.proccess(file);
const table = new Table(processedFile)
var tableHTML =  await HTMLParser.parser(table)
var html = writer.write(Date.now()+".html",tableHTML)
Writer.write(Date.now()+".pdf",tableHTML)
}

main()



