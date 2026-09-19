import FileHandler from './modules/FileHandler.js'; // Import the FileHandler class from the modules directory
import BufferHandler from './modules/BufferHandler.js'; // Import the BufferHandler class from the modules directory
import CryptoHandler from './modules/CryptoHandler.js'; // Import the CryptoHandler class from the modules directory
import OsHandler from './modules/OsHandler.js'; // Import the OsHandler class from the modules directory
import PathHandler from './modules/PathHandler.js'; // Import the PathHandler class from the modules directory    
import ProcessHandler from './modules/ProcessHandler.js'; // Import the ProcessHandler class from the modules directory
import StreamHandler from './modules/StreamHandler.js'; // Import the StreamHandler class from the modules directory

const fileHandler = new FileHandler('example.txt'); // Create a new instance of the FileHandler class
const bufferHandler = new BufferHandler(); // Create a new instance of the BufferHandler class
const cryptoHandler = new CryptoHandler(); // Create a new instance of the CryptoHandler class
const osHandler = new OsHandler(); // Create a new instance of the OsHandler class
const pathHandler = new PathHandler('example.cpp'); // Create a new instance of the PathHandler class
const processHandler = new ProcessHandler(); // Create a new instance of the processHandler class
const streamHandler = new StreamHandler('example.txt'); // Create a new instance of the StreamHandler class

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

console.log('------------------------------');

bufferHandler.allocBuffer(10); // Allocate a new Buffer of size 10 
bufferHandler.writeToBuffer('Hello'); // Write the string 'Hello' to the allocated Buffer
bufferHandler.printBuffer(); // Print the content of the Buffer to the console
bufferHandler.createBufferFromString('World'); // Create a new Buffer from the string 'World'
bufferHandler.printBuffer();
bufferHandler.createBufferFromArray([1, 2, 3, 4, 5]); // Create a new Buffer from an array of numbers
bufferHandler.printBuffer(); // Print the content of the Buffer to the console
console.log('Value at index 2:', bufferHandler.accessBuffer(2)); // Access the byte at index 2 of the Buffer

console.log('------------------------------');

const key = '12345678901234567890123456789012';
const iv = '1234567890123456';
cryptoHandler.printHashedPassword('myPassword'); // Hash the password 'myPassword' and print the hashed value to the console
cryptoHandler.printHashedPasswordHMAC('myPassword', 'mySecretKey'); // Hash the password 'myPassword' with HMAC using the
cryptoHandler.printEncryptedData('Hello, World!', key, iv); // Encrypt the string 'Hello, World!' using AES-256-CBC with the provided key and IV, and print the encrypted value to the console
const encryptedData = cryptoHandler.encryptData('Hello, World!', key, iv); // Encrypt the string 'Hello, World!' using AES-256-CBC with the provided key and IV
cryptoHandler.printDecryptedData(encryptedData, key, iv); // Decrypt the previously encrypted data using AES-256-CBC with the provided key and IV, and print the decrypted value to the console 
cryptoHandler.generateRandomBytes(16); // Generate a Buffer containing 16 random bytes
cryptoHandler.generateRandomInt(1, 100);
const secretKey = cryptoHandler.createSecretKey(32); // Create a SecretKey object from a Buffer of 32 random bytes
cryptoHandler.printSecretKey(secretKey); // Print the key to the console

console.log('------------------------------');

osHandler.printSystemInfo(); // Print the operating system information to the console
osHandler.isLinuxPlatform() ? console.log('Running on Linux platform.') : console.log('Not running on Linux platform.'); // Check if the platform is Linux and log the result to the console
osHandler.isWindowsPlatform() ? console.log('Running on Windows platform.') : console.log('Not running on Windows platform.');
osHandler.isMacPlatform() ? console.log('Running on macOS platform.') : console.log('Not running on macOS platform.');

console.log('------------------------------');

console.log(pathHandler.getExtension()); // Get an extension from filename
console.log(pathHandler.createAbsolutePath("assets", "src", "text-files")); // create an absolute path from three arguments
console.log(pathHandler.createRelativePath("assets", "src", "text-files")); // create a relative path from three arguments
console.log(pathHandler.parseFile()); // Parse file path to object to get informations (root, dir, base, ext, name)
console.log(pathHandler.formatFile()); // Format file from object to file path to get path

console.log('------------------------------');

console.log(processHandler.getCurrentEnvironment() + '\n');
console.log(processHandler.getEnvironmentVariables() + '\n');
console.log(processHandler.getPWD() + '\n');
console.log(processHandler.getPathOfShellProgram() + '\n');
console.log(processHandler.getSystemPathVariable() + '\n');
console.log(processHandler.getUsername() + '\n');
console.log(processHandler.readCommandLineArgs() + '\n');
console.log(processHandler.getCurrentWorkingDirectory() + '\n');
console.log(processHandler.getProcessPID() + '\n');
console.log(processHandler.getProcessUpTime() + '\n');
console.log(processHandler.getProcessVersion() + '\n');
console.log(processHandler.getTypeScriptFeatures() + '\n');
console.log(processHandler.getDebugPort() + '\n');

// process events => Node.js core feature that let app respond to key moments in its lifecycle
processHandler.handleBeforeExitEvent();
processHandler.handleExitEvent(); 
processHandler.handleUncaughtExceptionEvent();
processHandler.handleWarningEvent();
processHandler.emitCustomWarning('This is a custom warning message', 'CustomWarning');

console.log('------------------------------');

streamHandler.readInputFileStream();