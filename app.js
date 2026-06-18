const express = require('express');
const path = require('path');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use API routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
