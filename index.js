const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3000;

// Use middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS for all routes
// GET method

const messages = ["Hello There", "General Kenobi"];


app.get('/api', (req, res) => {
    res.send(messages.length > 0 ? messages : ['This is a message']);
});

// POST method
app.post('/api', (req, res) => {
    // Assuming the request body contains a 'message' property
    const { message } = req.body;

    if (message) {
        // Assuming you want to store the message in a variable
        const storedMessage = message;
        messages = [...messages, storedMessage]

        // You can perform additional actions with the message here

        res.status(201).json({ success: true, message: 'Message created successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Message is required in the request body' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
