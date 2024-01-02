const express = require('express');
const app = express();
const port = 8777; // You can use any available port

// Serve static files (like CSS, images)
app.use(express.static(__dirname));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
});
app.get('/tours', (req, res) => {
    res.sendFile(__dirname + '/tours.html');
});
app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
