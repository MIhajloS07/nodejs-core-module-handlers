import { Buffer } from 'buffer'; // Import the Buffer class from the buffer module

// const { Buffer } = require('buffer'); // Import the Buffer class from the buffer module

class BufferHandler {
    constructor() {
        this.buffer = null; // Initialize the buffer property to null
    }
    allocBuffer(size) {
        this.buffer = Buffer.alloc(size); // Allocate a new Buffer of the specified size
        return this.buffer; // Return the allocated Buffer
    }
    accessBuffer(index) {
        if (this.buffer && index >= 0 && index < this.buffer.length) {
            return this.buffer[index]; // Return the byte at the specified index if valid
        }
        return null; // Return null if the buffer is not allocated or the index is out of bounds
    }
    createBufferFromString(str) {
        this.buffer = Buffer.from(str); // Create a new Buffer from the provided string
        return this.buffer; // Return the created Buffer
    }
    createBufferFromArray(arr) {
        this.buffer = Buffer.from(arr); // Create a new Buffer from the provided array of numbers
        return this.buffer; // Return the created Buffer
    }
    writeToBuffer(data) {
        if (this.buffer) {
            this.buffer.write(data); // Write the provided data to the Buffer
        }
        return null; // Return null if the buffer is not allocated
    }
    printBuffer() {
        if (this.buffer) {
            console.log('Buffer:', this.buffer, ', Buffer content:', this.buffer.toString()); // Log the Buffer content to the console
        } else {
            console.log('Buffer is not allocated.'); // Log a message if the buffer is not allocated
        }
    }
}

export default BufferHandler; // Export the BufferHandler class for use in other modules