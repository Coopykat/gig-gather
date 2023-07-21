const BaseModel = require("./BaseModel");

class EventModel extends BaseModel {

    constructor() {
        super('events')
    }

    insert(eventData) {
        return this.db.query('INSERT INTO events (artist_name, date, location, comment, users_id) VALUES (?, ?, ?, ?, ?)', [eventData.artist_name, eventData.date, eventData.location, eventData.comment, eventData.users_id]);
    }
}

module.exports = EventModel
