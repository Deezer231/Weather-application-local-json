const express = require("express"); // Import Express
const app = express(); // Create an Express app
const PORT = 3000; // Port number for the server

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Start the server and listen on PORT 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
