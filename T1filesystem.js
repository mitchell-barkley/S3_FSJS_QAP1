const fs = require('fs');
// imports the fs module

const fileContent = 'This is some text that will be written to a file.';

fs.writeFile('documentation.txt', fileContent, (err) => {
    // writes to the file
    if (err) {
        console.error(`Error writing to the file: ${err.message}`);
        // prints to the console when there is an error
    } else {
        console.log('Documentation file created successfully! 🌟');
        // prints to the console when the file is created

    fs.readFile('documentation.txt', 'utf8', (readErr, data) => {
        // reads from the file
        if (readErr) {
            console.error(`Error reading from the file: ${readErr.message}`);
            // prints to the console when there is an error
        } else {
            console.log(`Documentation file content:\n${data}`);
            // prints the file contents to the console when the file is read
        }
    });
}});

fs.unlink('documentation.txt', (unlinkErr) => {
    // deletes the file
    if (unlinkErr) {
        console.error(`Error deleting the file: ${unlinkErr.message}`);
        // prints to the console when there is an error
    } else {
        console.log('Documentation file deleted successfully.');
        // prints to the console when the file is deleted
    }
});
