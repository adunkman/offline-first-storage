import app from './app';

app.listen(process.env.PORT ? parseInt(process.env.PORT, 10) : 8500);
