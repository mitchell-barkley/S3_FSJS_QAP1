const express = require('express');
// imports the express module
const app = express();
// creates an express application
const port = 4400;
// sets the port to 9000

app.get('/', (req, res) => {
    // creates a route for the home page
    res.send('Hello, Express!');
    // sends a response to the client
});

app.listen(port, () => {
    // the server object listens on port 9000
    console.log(`Server is running at http://localhost:${port}`);
    // prints to the console when the server starts listening
});