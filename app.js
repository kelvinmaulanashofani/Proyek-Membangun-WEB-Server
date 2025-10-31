const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App!');
});

app.get('/me', (req, res) => {
  res.json({ message: 'dicoding_kelvin_maulana_shofani_Jw9r' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

