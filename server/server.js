const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/receive', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(5000, () => console.log('Server started on port 5000'));
