import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routesEntities from './routes/auth';

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/',routesEntities);

app.use(function(req, res, next) {
    res.status(404).send('<h1>No se ha podido encontrar la dirección</h1>');
});

const port = process.env.PORT || 4000;
app.listen(port,()=>console.log(`Listening on port ${port}`));