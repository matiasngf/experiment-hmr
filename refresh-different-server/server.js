const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.use('/', express.static(path.join(__dirname, '/dist')));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
