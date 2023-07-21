require('dotenv')
const express = require('express');
const userRouter = require('./src/routes/userRoutes');
const eventRouter = require('./src/routes/eventRoutes');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res) {
    const { version } = require('./package.json'); 
    return res.json({ version })
})

APIRouter.use('/users', userRouter);
APIRouter.use('/users/login', userRouter);
APIRouter.use('/events', eventRouter);

app.use('/api', APIRouter);

app.listen(3001, () => {
    console.log('running on port 3001');
});

