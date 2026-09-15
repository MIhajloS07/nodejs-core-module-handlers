import FileHandler from './modules/FileHandler.js'; // Import the FileHandler class from the modules directory
import BufferHandler from './modules/BufferHandler.js'; // Import the BufferHandler class from the modules directory

const fileHandler = new FileHandler('example.txt'); // Create a new instance of the FileHandler class
const bufferHandler = new BufferHandler(); // Create a new instance of the BufferHandler class

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

bufferHandler.allocBuffer(10); // Allocate a new Buffer of size 10 
bufferHandler.writeToBuffer('Hello'); // Write the string 'Hello' to the allocated Buffer
bufferHandler.printBuffer(); // Print the content of the Buffer to the console
bufferHandler.createBufferFromString('World'); // Create a new Buffer from the string 'World'
bufferHandler.printBuffer();
bufferHandler.createBufferFromArray([1, 2, 3, 4, 5]); // Create a new Buffer from an array of numbers
bufferHandler.printBuffer(); // Print the content of the Buffer to the console
console.log('Value at index 2:', bufferHandler.accessBuffer(2)); // Access the byte at index 2 of the Buffer
