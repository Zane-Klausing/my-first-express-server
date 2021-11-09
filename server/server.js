console.log('Look at my first server!');

// Load the express library from the node_modules/express:
const express = require('express');

// Create a variable called "app". This variable is...
// THE SERVER:
const app = express();

// Tell express where to find our "public" files.
    // aka "the client-side" files
    // aka "all the stuff we've been doing already"
app.use(express.static('.server/public'));

// Starts server and listens for requests:
app.listen(5000, function(){
    console.log('My first express server is running!')
});

