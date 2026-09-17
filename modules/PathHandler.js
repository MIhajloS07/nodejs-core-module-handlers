import path from 'path';

//const path = require('path'); // import the 'path' module from Node.js, which provides utilities for working with file and directory paths. The 'require' statement is used to include the module in the current file, allowing you to use its functions and properties.

class PathHandler {
    constructor(fileName){
        this.path = path;
        this.fileName = fileName;
        this.dir = null;
    }
    getExtension(){
        return this.path.extname(this.fileName);
    }
    parseFile(){
        return this.path.parse(this.fileName);
    }
    formatFile(){
        const parsed = this.parseFile();
        return this.path.format({
            dir: this.dir,
            name: parsed.name,
            ext: parsed.ext
        });
    }
    createRelativePath(arg1, arg2, arg3){
        return this.path.join(arg1, arg2, arg3);
    }
    createAbsolutePath(arg1, arg2, arg3){
        return this.path.resolve(arg1, arg2, arg3);
    }
}

export default PathHandler; // Export the PathHandler class for use in other modules
