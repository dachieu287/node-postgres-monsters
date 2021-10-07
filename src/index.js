const express = require('express');
const monsters = require('./routers/monsters')
const app = express();
const port = 3000;

app.use(express.json());

app.use('/monsters', monsters);

app.use((err, req, res, next) => {
  res.json(err);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});