const {Router} = require('express');
const EventController = require ('../controllers/EventController');

const eventRouter = Router();

eventRouter.get('', (req, res) => new EventController(req, res).getAll());
eventRouter.get('/:id', (req, res) => new EventController(req, res).getAll());
eventRouter.post('', (req, res) => new EventController(req, res).createEvent());

module.exports = eventRouter;

