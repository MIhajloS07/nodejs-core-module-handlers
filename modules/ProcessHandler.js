class ProcessHandler {
    getEnvironmentVariables(){
        return process.env;
    }
    getCurrentEnvironment(){
        return process.env.NODE_ENV;
    }
    getPathOfShellProgram(){
        return process.env.SHELL;
    }
    getSystemPathVariable(){
        return process.env.PATH; 
    }
    getPWD(){
        return process.env.PWD; 
    }
    getUsername(){
        return process.env.USER;
    }
    readCommandLineArgs(){
        return process.argv;
    }
    getCurrentWorkingDirectory(){
        return process.cwd();
    }
    getDebugPort(){
        return process.debugPort;
    }
    getTypeScriptFeatures(){
        return process.features.typescript;
    }
    getProcessPID(){
        return process.pid;
    }
    getProcessUpTime(){
        return process.uptime();
    }
    getProcessVersion(){
        return process.version;
    }
    handleExitEvent(){
        process.on("exit", (code) => {
            console.log(`Process exited with code ${code}`);
        });
    }
    handleBeforeExitEvent(){
        process.on('beforeExit', (code) => {
            console.log(`Process beforeExit event with code: ${code}`);
        });
    }
    handleUncaughtExceptionEvent(){
        process.on("uncaughtException", (err) => {
            console.error(`Uncaught error: ${err.message}`);
        });
    }    
    handleWarningEvent(){
        process.on("warning", (warning) => {
            console.warn(`Warning name: ${warning.name}`);
            console.warn(`Warning message: ${warning.message}`);
        });
    }
    emitCustomWarning(warningMessage, warningName){
        process.emitWarning(warningMessage, warningName);
    }
}

export default ProcessHandler; // Export the ProcessHandler class for use in other modules