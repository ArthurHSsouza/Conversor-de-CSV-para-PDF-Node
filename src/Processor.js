class Processor{
     proccess(file){
        var row = file.split('\r\n')
        var array = []
        row.forEach(element => {
            array.push(element.split(","))  
        });
        return array;
     }
}

module.exports = Processor;