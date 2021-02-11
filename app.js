const Reader = require("./src/Reader");
const Processor = require("./src/Processor");
const Table = require("./src/Table");
const HTMLParser = require("./src/HTMLParser");
const HTMLWriter = require('./src/HTMLWriter');
const readline = require('readline-sync');

 const reader = new Reader();
 const processor = new Processor();
 const writer = new HTMLWriter();

async function main(){

    var path = readline.question("Digite o caminho do arquivo CSV: ");
    while(path != "exit"){

        try{
            var file  = await reader.read(path);

            var processedFile = processor.proccess(file);
            const table = new Table(processedFile);
            var tableHTML =  await HTMLParser.parser(table);
            writer.write("./files/"+Date.now()+".html",tableHTML);
            writer.write("./files/"+Date.now()+".pdf",tableHTML);
        }catch(err){
            console.log("Erro ao converter arquivo");
        }
    }
}

main();



