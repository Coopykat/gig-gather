const {Router} = require('express');
const UserController = require('../controllers/UserController');
const argon2 = require ('argon2');
const auth = require("../../auth");
const EventController = require('../controllers/EventController');

const userRouter = Router();


userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());

userRouter.post('', auth.hashPassword, (req, res) => new UserController(req, res).createUser())
userRouter.post('/login', (req, res) => new UserController(req, res).login())

userRouter.get('/', (req, res) => new EventController(req, res).getAll())
userRouter.post('/', (req, res) => new EventController(req, res).createEvent())
module.exports = userRouter;