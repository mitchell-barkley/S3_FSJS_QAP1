const os = require('os');
// imports the os module

console.log(`OS Platform: ${os.platform()}`);
// prints the operating system platform
console.log(`OS Architecture: ${os.arch()}`);
// prints the operating system architecture
console.log(`Number of CPUs: ${os.cpus().length}`);
// prints the number of CPUs
console.log(`Total Memory: ${formatBytes(os.totalmem())}`);
// prints the total memory
console.log(`Free Memory: ${formatBytes(os.freemem())}`);
// prints the free memory
console.log(`User Info: ${JSON.stringify(os.userInfo(), null, 2)}`);
// prints user information

// formatting bytes for better readability
function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${units[i]}`;
    // returns the bytes in a more readable format
    }