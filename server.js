const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// All other routes should serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
