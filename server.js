import FileHandler from './modules/FileHandler.js'; // Import the FileHandler class from the modules directory
import { Buffer } from 'buffer'; // Import the Buffer class from the buffer module

const fileHandler = new FileHandler('example.txt'); // Create a new instance of the FileHandler class

// fileHandler.writeFile('Backend', (err, message) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log(message); // Log the success message to the console
//     }
// });

// fileHandler.readFile((err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data); // Log the file content to the console
//     }
// });

// fileHandler.deleteFile((err, message) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     }
//     else {
//         console.log(message); // Log the success message to the console
//     }
// });


const myStrBuffer = Buffer.from('Hello, World!'); // Create a new Buffer from a string
const myNumBuffer = Buffer.from([
    1, 3, 5, 7, 9, 44, 67, 89, 100, 200, 255 // hexadecimal values 
]); // Create a new Buffer from an array of numbers

console.log('Buffer from string:', myStrBuffer.toString()); // Log the Buffer to the console
console.log('Buffer from numbers:', myNumBuffer.toString()); // Log the Buffer to the console

// Accessing individual bytes in the Buffer
console.log('First byte of myStrBuffer:', myStrBuffer[0]); // Log the first byte of the Buffer to the console


