import { Readable, Writable, Transform } from 'stream'
import fs from 'fs';

//const { Readable, Writable, Transform } = require('stream');

class StreamHandler {
    constructor(inputFilePath, outputFilePath){
        this.inputFilePath = inputFilePath;
        this.outputFilePath = outputFilePath;
    }
    createReadStream(){
        return fs.createReadStream(this.inputFilePath);
    }
    readInputFileStream(){
        const read = this.createReadStream();
        read.on("data", (chunk) => {
            console.log(`Received ${chunk.length} bytes of data`);
            console.log(`Received data: ${chunk.toString()}`);
        });
    }
    writeInputFileStream(){
        const readInputFileStream = this.createReadStream();
        const writeOutputFileStream = fs.createWriteStream(this.outputFilePath);    
        // handle finish and error events
        this.handleErrorEvent(writeOutputFileStream);
        this.handleErrorEvent(writeOutputFileStream);
        readInputFileStream.pipe(writeOutputFileStream); 
    }
    handleFinishEvent(write){
        write.on("finish", () => {
            console.log("All data has been written to the file");
        });
    }
    handleErrorEvent(write){
        write.on("error", (err) => {
            console.log(`Error writing to file: ${err}`);
        });
    }
}

export default StreamHandler; // Export the StreamHandler class for use in other modules