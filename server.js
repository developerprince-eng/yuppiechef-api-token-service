const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: '5zfNcxD5vJstNxJF'
  });
});

app.listen(7000, () => console.log('API is running on http://localhost:7000/login'));
