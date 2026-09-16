import crypto from 'crypto'; 

//const crypto = require('crypto'); // Import the crypto module for hashing and encryption

class CryptoHandler {
    hashPassword(password) {
        return crypto
            .createHash('sha256') // Create a hash object using the sha256 algorithm
            .update(password) // Update the hash object with the password string
            .digest('hex'); // Generate the hash digest in hexadecimal format
    }   
    hashPasswordHMAC(password, secretKey) {
        return crypto
            .createHmac('sha256', secretKey) // Create a HMAC object with SHA-256
            .update(password) // Update the HMAC object with the password string
            .digest('hex'); // Generate the HMAC digest in hexadecimal format
    }
    encryptData(data, key, iv) {
        key = Buffer.from(key, 'utf-8'); // Convert the key string to a Buffer
        iv = Buffer.from(iv, 'utf-8'); // Convert the iv string to a Buffer
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); // Create a Cipher object for AES-256-CBC encryption
        let encrypted = cipher.update(data, 'utf-8', 'hex'); // Encrypt the data and convert it to hexadecimal format
        encrypted += cipher.final('hex'); // Finalize the encryption and append the final block in hexadecimal format
        return encrypted; // Return the encrypted data
    }
    decryptData(encryptedData, key, iv) {
        key = Buffer.from(key, 'utf-8'); // Convert the key string to a Buffer
        iv = Buffer.from(iv, 'utf-8'); // Convert the iv string to a Buffer
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv); // Create a Decipher object for AES-256-CBC decryption
        let decrypted = decipher.update(encryptedData, 'hex', 'utf-8'); // Decrypt the data and convert it to UTF-8 format
        decrypted += decipher.final('utf-8'); // Finalize the decryption and append the final block in UTF-8 format
        return decrypted; // Return the decrypted data
    }
    generateRandomBytes(size) {
        return crypto.randomBytes(size); // Generate a Buffer containing random bytes of the specified size    
    }
    generateRandomInt(min, max) {
        return crypto.randomInt(min, max); // Generate a random integer between min (inclusive) and max (exclusive)
    }
    createSecretKey(numberOfBytes) {
        return crypto.createSecretKey(crypto.randomBytes(numberOfBytes)); // Create a SecretKey object from a Buffer of random bytes of the specified size
    }
    printHashedPassword(password) {
        const hashedPassword = this.hashPassword(password); // Call the hashPassword method to get the hashed password
        console.log('Hashed Password:', hashedPassword); // Log the hashed password to the console
    }
    printHashedPasswordHMAC(password, secretKey) {
        const hashedPassword = this.hashPasswordHMAC(password, secretKey); // Call the hashPasswordHMAC method to get the HMAC hashed password
        console.log('HMAC Hashed Password:', hashedPassword); // Log the HMAC hashed password to the console
    }
    printEncryptedData(data, key, iv) {
        const encryptedData = this.encryptData(data, key, iv); // Call the encryptData method to get the encrypted data
        console.log('Encrypted Data:', encryptedData); // Log the encrypted data to the console
    }
    printDecryptedData(encryptedData, key, iv) {
        const decryptedData = this.decryptData(encryptedData, key, iv); // Call the decryptData method to get the decrypted data
        console.log('Decrypted Data:', decryptedData); // Log the decrypted data to the console
    }
    printSecretKey(secretKey) {
        console.log('Generated Secret Key:', secretKey.export().toString('hex')); // Log the generated SecretKey in hexadecimal format
    }
}

export default CryptoHandler; // Export the CryptoHandler class for use in other modules