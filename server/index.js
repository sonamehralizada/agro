import express from 'express';
import cors from 'cors';
import postgresClient from './config/db.js';
import userRouter from './routers/userRouter.js';
import imageRouter from './routers/imageRouter.js';
import apiRouter from './routers/apiRouter.js';




const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Define routes after cors middleware
app.use('/users', userRouter);
app.use('/images', imageRouter);
app.use('/api', apiRouter);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  postgresClient.connect(err => {
    if (err) {
      console.log('connection error', err.stack);
    } else {
      console.log('db connection successful');
    }
  });
});

