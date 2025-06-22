import express from 'express';
let app = express();
import dotenv from 'dotenv';
dotenv.config();
let port = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});