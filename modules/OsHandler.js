import os from 'os';

//const os = require('os'); // Import the os module to access operating system-related utility methods and properties

class OsHandler {
    printSystemInfo() {
        console.log('Operating System Info:');
        console.log('Platform:', os.platform());
        console.log('Architecture:', os.arch());
        console.log('Type:', os.type());
        console.log('Version:', os.version());
        console.log('Uptime:', os.uptime());
        console.log('Total Memory:', os.totalmem());
        console.log('Free Memory:', os.freemem());
        console.log('User Info:', os.userInfo());
        console.log('Network Interfaces:', os.networkInterfaces());
    }
    isLinuxPlatform() {
        return os.platform() === 'linux';
    }
    isWindowsPlatform() {
        return os.platform() === 'win32';
    }
    isMacPlatform() {
        return os.platform() === 'darwin';
    }
}

export default OsHandler; // Export the OsHandler class for use in other modules