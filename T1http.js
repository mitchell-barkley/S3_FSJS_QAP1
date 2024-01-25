const http = require('http');
// imports the http module

const server = http.createServer((req, res) => {
// creates a server object

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // writes a response to the client

    res.end('Welcome to the HTTP Server!\n');
    // ends the response
});

const PORT = 4000;
// sets the port to 3000
server.listen(PORT, () => {
// the server object listens on port 3000
    console.log(`HTTP Server running on http://localhost:${PORT}`);
    // prints to the console when the server starts listening
});

server.on('close', () => {
    // listens for the close event
    console.log('Server has been closed. Goodbye!');
    // prints to the console when the server closes
});

server.on('error', (error) => {
    // listens for the error event
    console.error(`Server error: ${error.message}`);
    // prints to the console when the server throws an error
});