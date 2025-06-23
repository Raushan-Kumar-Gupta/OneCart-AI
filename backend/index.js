import express from 'express';
let app = express();
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
let port = process.env.PORT || 6000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  connectDb()
});