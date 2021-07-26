import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(logger);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
});

export default app;
