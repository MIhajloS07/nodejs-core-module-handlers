import { Readable, Writable, Transform } from 'stream'
import fs from 'fs';

//const { Readable, Writable, Transform } = require('stream');

class StreamHandler {
    constructor(inputFilePath){
        this.inputFilePath = inputFilePath;
    }
    readInputFileStream(){
        const read = fs.createReadStream(this.inputFilePath);
        read.on("data", (chunk) => {
            console.log(`Received ${chunk.length} bytes of data`);
            console.log(`Received data: ${chunk.toString()}`);
        });
    }
}

export default StreamHandler; // Export the StreamHandler class for use in other modules