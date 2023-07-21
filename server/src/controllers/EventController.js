const EventModel = require("../models/EventModel");
const BaseController = require("./BaseController");

class EventController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new EventModel();
    }


    createEvent() {
        const { artist_name, date, location, comment } = this.req.body;
        this.model
            .insert ({ artist_name, date, location, comment })
            .then (([result]) => {
                return this.res.status(201).send({ id: result.insertId, artist_name, date, location, comment})
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });

    }

}

module.exports = EventController;