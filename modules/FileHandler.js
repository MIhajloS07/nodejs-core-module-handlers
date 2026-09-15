import fs from 'fs';

// const fs = require('fs'); // Import the file system module

// Define a class to handle file operations
class FileHandler {
    constructor(filePath) {
        this.filePath = filePath; // Store the file path
    }
    readFile(callback) {
        fs.readFile(this.filePath, "UTF-8", (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
    writeFile(data, callback) {
        fs.writeFile(this.filePath, data, "UTF-8", (err) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, 'File has been written!');
            }
        });
    }
    deleteFile(callback) {
        fs.unlink(this.filePath, (err) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, 'File has been deleted!');
            }
        });
    }
}

export default FileHandler; // Export the FileHandler class for use in other modules
